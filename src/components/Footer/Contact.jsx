import React from 'react';

export default function Contact() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        We'd love to hear from you! Reach out to us with your queries or feedback.
      </p>
      <ul className="list-disc pl-6">
        <li>Email: support@megablog.com</li>
        <li>Phone: +91-9876543210</li>
      </ul>
    </div>
  );
}
