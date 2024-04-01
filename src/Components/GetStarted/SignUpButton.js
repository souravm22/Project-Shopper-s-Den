import React, { useState } from 'react';

const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    
    console.log('Signing up with name:', name, ', email:', email, ', phone number:', phoneNumber, 'and password:', password);
    
    setName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    
    setIsOpen(false);
  };

  return (
    <div>
      <button className="bg-slate-600 hover:bg-slate-900 hover:scale-105 hover:cursor-pointer dark:border-yellow-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(true)}>
        Sign Up
      </button>
      {isOpen && (
        <div className=" z-10 fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-30 backdrop-blur-3xl">
          <div className="bg-slate-500 font-madimi p-6 rounded-lg relative">
            <h2 className="text-xl mb-4">Welcome to Shopper's Den!</h2>
            <p className="text-white mb-4">We're pleased to have you as a new user.</p>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="block mb-2 text-white">Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-white">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-white">Phone Number:</label>
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-white">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
            </form>
            <button className="absolute top-2 right-2 text-black text-lg" onClick={() => setIsOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpButton;
