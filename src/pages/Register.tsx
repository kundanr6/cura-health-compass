
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Register = () => {
  const navigate = useNavigate();

  // This would typically handle registration logic
  const handleRegister = () => {
    // Simulate successful registration
    // In a real app, this would validate user input and make an API call
    
    // Redirect to the home page after successful registration
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 gradient-bg">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 space-y-6 border border-gray-100 dark:border-slate-800">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold text-cura-dark dark:text-white">Create an Account</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Join Cura to manage your health journey</p>
        </div>
        
        <div className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 border-gray-300 dark:border-gray-700"
            onClick={handleRegister}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path d="M21.8,10.4h-10V14h5.7c-0.5,2.5-2.7,4.3-5.7,4.3c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.4,0,2.7,0.5,3.7,1.3l2.8-2.8 C16.4,3.1,14,2,11.3,2C5.5,2,0.8,6.7,0.8,12.5S5.5,23,11.3,23c5.8,0,9.6-3.8,9.6-9.5C21,12.2,20.9,11.3,21.8,10.4z" fill="#4285F4"></path>
                <path d="M5.3,14.7l-3.3,2.8c2,4,6.1,6.7,10.7,6.7c2.8,0,5.1-0.9,6.9-2.5l-3.3-2.6c-0.9,0.6-2.1,1-3.6,1 C9.4,20.2,6.8,18,6.1,15C5.9,14.9,5.7,14.8,5.3,14.7z" fill="#34A853"></path>
                <path d="M21.8,10.4l-0.2,1.3c-0.1,0.8-0.6,1.5-1.1,2c-0.6,0.5-1.3,0.8-2,1l-3.3-2.6c1.3-0.8,2.2-2.2,2.4-3.8h-6.7V3.5 c0,0,6.7,0,8.8,0C20.7,4.5,21.4,6.6,21.8,10.4z" fill="#FBBC05"></path>
                <path d="M5.3,14.7c-0.4-1.1-0.7-2.2-0.7-3.4s0.2-2.3,0.7-3.4l-3.3-2.6C0.7,7.2,0,9.8,0,12.5s0.7,5.3,1.9,7.2L5.3,14.7z" fill="#EA4335"></path>
              </g>
            </svg>
            Sign up with Google
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cura-primary focus:border-cura-primary dark:bg-slate-800"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cura-primary focus:border-cura-primary dark:bg-slate-800"
                placeholder="••••••••"
              />
            </div>
            
            <Button 
              className="w-full bg-cura-primary hover:bg-cura-primary/90"
              onClick={handleRegister}
            >
              Create Account
            </Button>
          </div>
        </div>

        <div className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cura-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
