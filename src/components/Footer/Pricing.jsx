import React from 'react';

export default function Pricing() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="text-gray-700 mb-6">Choose a plan that fits your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Free</h2>
          <p className="mb-4">For hobby projects & testing.</p>
          <p className="font-bold">$0/month</p>
        </div>
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Pro</h2>
          <p className="mb-4">For growing blogs & communities.</p>
          <p className="font-bold">$12/month</p>
        </div>
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Enterprise</h2>
          <p className="mb-4">Custom solution for large platforms.</p>
          <p className="font-bold">Contact us</p>
        </div>
      </div>
    </div>
  );
}
