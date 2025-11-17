// src/app/api/contact/route.ts
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// Initialize Resend with your API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Create a test account if in development
let testAccount: nodemailer.TestAccount | null = null;

// Create a transporter for local development
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to ensure we have a test account
async function getTestAccount(): Promise<nodemailer.TestAccount> {
  if (!testAccount) {
    testAccount = await nodemailer.createTestAccount();
  }
  return testAccount;
}

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(request: Request) {
  console.log('Contact form submission received');
  
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }
  
  try {
    let body;
    try {
      body = await request.json();
      console.log('Request body:', JSON.stringify(body, null, 2));
    } catch (e) {
      console.error('Error parsing request body:', e);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid JSON in request body' 
        }), 
        { 
          status: 400, 
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders
          } 
        }
      );
    }
    
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      console.error('Validation failed: Missing required fields');
      return new Response(
        JSON.stringify({ 
          success: false,
          message: 'All fields are required',
          receivedData: { name: !!name, email: !!email, message: !!message }
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
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

    // In production or if Resend is configured
    if (process.env.NODE_ENV === 'production' && resend) {
      console.log('Using Resend to send email...');
      try {
        const { data, error } = await resend.emails.send({
          from: 'AgroHaven Contact <onboarding@resend.dev>',
          to: process.env.CONTACT_EMAIL || 'your-email@example.com',
          subject: `New Contact Form Submission from ${name}`,
          html: emailContent,
        });

        if (error) {
          console.error('Resend error:', error);
          throw new Error(`Failed to send email via Resend: ${error.message}`);
        }

        console.log('Email sent successfully via Resend:', data);
        return new Response(
          JSON.stringify({ 
            success: true,
            message: 'Message sent successfully',
            data
          }),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      } catch (resendError: unknown) {
        const error = resendError as Error;
        console.error('Error in Resend API call:', error);
        return new Response(
          JSON.stringify({ 
            success: false,
            message: 'Failed to send email via Resend',
            error: error?.message || 'Unknown error',
            ...(process.env.NODE_ENV !== 'production' && {
              stack: error?.stack
            })
          }),
          { 
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    } else {
      try {
        const account = await getTestAccount();
        console.log('Using Ethereal test account:', account.user);

        const mailOptions = {
          from: `"AgroHaven Contact" <${account.user}>`,
          to: process.env.CONTACT_EMAIL || account.user,
          subject: `[DEV] New Contact: ${name}`,
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

        return new Response(
          JSON.stringify({ 
            success: true,
            message: 'Test email sent (development mode)',
            testMode: true,
            previewUrl,
            messageId: info.messageId
          }),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      } catch (err: unknown) {
        const error = err as Error;
        const errorMessage = error?.message || 'Unknown error';
        console.error('Error sending test email with Ethereal:', error);
        return new Response(
          JSON.stringify({ 
            success: false,
            message: `Failed to send test email: ${errorMessage}`,
            error: errorMessage,
            ...(process.env.NODE_ENV !== 'production' && {
              stack: error?.stack
            })
          }),
          { 
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }
  } catch (err) {
    const error = err as Error;
    const errorMessage = error?.message || 'Unknown error';
    
    console.error('Contact form error:', {
      message: errorMessage,
      stack: error?.stack,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });

    return new Response(
      JSON.stringify({ 
        success: false,
        message: 'Failed to process contact form submission',
        error: errorMessage,
        ...(process.env.NODE_ENV !== 'production' && {
          debug: {
            stack: error?.stack,
            environment: process.env.NODE_ENV,
            nodeVersion: process.version
          }
        })
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
}