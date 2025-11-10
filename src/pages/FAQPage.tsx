import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FAQPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to home page first
    navigate('/');
    // Then scroll to contact section after a small delay
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const faqs = [
    {
      question: "What is AgroHaven?",
      answer: "AgroHaven is a platform dedicated to providing sustainable agricultural solutions. We connect farmers with resources, knowledge, and tools to improve farming practices and increase productivity."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team by email at support@agrohaven.rw or by calling +250 795 288 755 during business hours (8:00 AM - 5:00 PM CAT, Monday - Friday)."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we primarily serve Rwanda. For international inquiries, please contact our support team to discuss potential arrangements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including mobile money (MTN, Airtel), credit/debit cards, and bank transfers."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email or SMS that you can use to track your package on our website."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day return policy for most products. Items must be in their original condition with all tags attached. Please contact our support team to initiate a return."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our services and products</p>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-green-50 p-8 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Our team is happy to help!</p>
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;