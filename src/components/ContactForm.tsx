import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, XCircle, Loader2, ExternalLink, X } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface NotificationType {
  id: number;
  type: 'success' | 'error';
  message: string;
  testMode?: boolean;
  previewUrl?: string;
  errorDetails?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationType | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (notification: Omit<NotificationType, 'id'>) => {
    const newNotification = {
      ...notification,
      id: Date.now()
    };
    setNotification(newNotification);
  };

  const dismissNotification = () => {
    setNotification(null);
  };

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submission started with data:', data);
    setIsSubmitting(true);
    
    try {
      // Show a test notification to verify the notification system is working
      showNotification({
        type: 'success',
        message: 'Processing your message...',
        testMode: true
      });
      
      console.log('Sending request to server...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      console.log('Response status:', response.status);
      
      let result;
      try {
        result = await response.json();
        console.log('Response data:', result);
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        console.error('Server responded with error status:', response.status);
        throw new Error(result.message || `Server error: ${response.statusText}`);
      }
      
      // If we get here, the request was successful
      console.log('Form submission successful!', result);
      
      showNotification({
        type: 'success',
        message: result.message || 'Your message has been sent successfully!',
        testMode: result.testMode,
        previewUrl: result.previewUrl
      });
      
      // Reset the form
      reset();
      
    } catch (error: any) {
      console.error('Error in form submission:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      
      showNotification({
        type: 'error',
        message: 'Failed to send message',
        errorDetails: errorMessage,
        testMode: process.env.NODE_ENV === 'development'
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const Notification = ({ type, message, testMode, previewUrl, errorDetails }: Omit<NotificationType, 'id'>) => {
    return (
      <motion.div
        key={`notification-${Date.now()}`}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-xl z-[9999] ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white max-w-md`}
        style={{
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            {type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium">{message}</p>
            
            {testMode && previewUrl && (
              <a 
                href={previewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center text-xs font-medium text-white hover:underline"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                View email preview
              </a>
            )}
            
            {errorDetails && (
              <p className="mt-1 text-xs opacity-90">{errorDetails}</p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={dismissNotification}
              className="inline-flex text-white hover:text-gray-200 focus:outline-none focus:text-gray-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            testMode={notification.testMode}
            previewUrl={notification.previewUrl}
            errorDetails={notification.errorDetails}
          />
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}