import React, { useState } from 'react';

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic (replace with actual login logic)
    console.log('Logging in with email:', email, 'and password:', password);
    // Clear email and password fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <button className="bg-slate-600 hover:bg-slate-900 hover:scale-105 hover:cursor-pointer dark:border-yellow-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(true)}>
        Log In
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-10  bg-gray-900 bg-opacity-30 backdrop-blur-3xl">
          <div className="bg-slate-500 font-madimi p-6 rounded-lg relative">
            <h2 className="text-xl mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-2 text-white">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-white">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </form>
            <button className="absolute top-2 right-2 text-black text-lg" onClick={() => setIsOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
