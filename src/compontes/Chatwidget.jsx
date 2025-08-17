import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickQuestions = [
    "Track my order",
    "What is your return policy?",
    "How do I book an appointment?",
    "Where can I find you?"
  ];

  const handleQuickQuestion = (question) => {
    setMessage(question);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-2xl z-50 border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[rgb(96,12,3)] text-white p-4 relative">
            <h3 className="text-lg font-semibold mb-2">Chat with us</h3>
            <p className="text-sm opacity-90">
              👋 Hi, message us with any questions. We're happy to help!
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 hover:bg-[rgb(96,12,3)] rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Message Input */}
            <div className="mb-4">
              <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Write message"
                  className="flex-1 p-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 text-gray-400 hover:text-red-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>

            {/* Instant Answers */}
            <div>
              <h4 className="text-gray-700 font-medium mb-3 text-center">
                Instant answers
              </h4>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full p-3 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 w-16 h-16 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
          isOpen
            ? 'bg-red-700 hover:bg-[rgb(96,12,3)]'
            : 'bg-red-700 hover:bg-[rgb(96,12,3)] hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>


    </>
  );
};

export default ChatWidget;