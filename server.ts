import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const allowedOrigins = ['http://localhost:5173'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(bodyParser.json());

// Create a test account for development
let testAccount: nodemailer.TestAccount | null = null;
let transporter: nodemailer.Transporter;

async function createTestAccount() {
  if (!testAccount) {
    testAccount = await nodemailer.createTestAccount();
    console.log('Created new Ethereal test account:', testAccount.user);
  }
  return testAccount;
}

// Initialize the transporter when the server starts
async function initializeTransporter() {
  const account = await createTestAccount();
  
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user,
      pass: account.pass,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  });
}

// API endpoint for contact form submission
app.post('/api/contact', async (req, res) => {
  console.log('Contact form submission received');
  
  try {
    const { name, email, message } = req.body;
    console.log('Request body:', { name, email, message });

    // Validate the input
    if (!name || !email || !message) {
      console.error('Validation failed: Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        receivedData: { name: !!name, email: !!email, message: !!message }
      });
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
        <h2 style="color: #10b981;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line; background-color: #f3f4f6; padding: 1rem; border-radius: 0.375rem;">
          ${message}
        </p>
        <p style="margin-top: 1.5rem; color: #6b7280; font-size: 0.875rem;">
          This message was sent from the contact form on AgroHaven.
        </p>
      </div>
    `;

    console.log('Running in development mode, using Ethereal test account');
    // Development mode - use Nodemailer with Ethereal
    try {
      const account = await createTestAccount();
      console.log('Using Ethereal test account:', account.user);

      const mailOptions = {
        from: `"AgroHaven Contact" <${account.user}>`,
        to: account.user, // Send to the test account itself for demo
        subject: `[AgroHaven] New Contact: ${name}`,
        html: emailContent,
      };

      console.log('Sending test email with options:', {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject
      });

      const info = await transporter.sendMail(mailOptions);
      const previewUrl = nodemailer.getTestMessageUrl(info);

      console.log('Email sent! Preview URL:', previewUrl);
      console.log('Message ID:', info.messageId);

      res.json({
        success: true,
        message: 'Test email sent (development mode)',
        testMode: true,
        previewUrl,
        messageId: info.messageId
      });

    } catch (error: any) {
      console.error('Error sending email:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send email',
        error: error.message,
        ...(process.env.NODE_ENV !== 'production' && {
          stack: error.stack
        })
      });
    }

  } catch (error: any) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process contact form submission',
      error: error.message,
      ...(process.env.NODE_ENV !== 'production' && {
        stack: error.stack
      })
    });
  }
});

// Initialize the transporter and start the server
initializeTransporter().then(trans => {
  transporter = trans;
  console.log('SMTP transporter initialized with Ethereal test account');
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}).catch(err => {
  console.error('Failed to initialize SMTP transporter:', err);
  process.exit(1);
});
