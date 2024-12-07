import React from 'react';

const Contact: React.FC = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Contact Information</h2>
          <p className="text-lg mb-4 text-center text-blue-700">Get in touch with me for any queries or collaboration opportunities!</p>
          <div className="text-center text-black">
            <p className="mb-2"><strong>Name:</strong> Muhammad Shahrukh</p>
            <p className="mb-2"><strong>Email:</strong> shahrukhjaved459@gmail.com</p>
            <p className="mb-2"><strong>Phone:</strong> 03205421692</p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Feel free to reach out via email or phone for more information!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;