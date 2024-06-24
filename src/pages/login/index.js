// pages/login.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set('token', data.token, { path: '/' });
        router.push('/admin');
      } else {
        const data = await response.json();
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>

<form onSubmit={handleSubmit}>
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
<div class="relative py-3 sm:max-w-xl sm:mx-auto  -top-10 ">
  <div
    class="absolute  inset-0 bg-gradient-to-br from-white to-[#27AB61] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
  </div>
  <div class="relative px-4 py-1 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    <div class="max-w-md mx-auto ">
      <div>
        <h1 class="text-2xl font-semibold">Login with happiness</h1>
      </div>
      <div class="divide-y divide-gray-200">
        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div class="relative">
            <input value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="off" id="email" name="email" type="email"  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
            <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
          </div>
          <div class="relative">
            <input value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
            <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
          </div>
          <div class="relative">
            <button type='submit' class="bg-gradient-to-br from-white to-[#27AB61] text-black transition-transform  hover:scale-105 rounded-md px-2 py-1">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</form>
</>
  );
}
