
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleLogin = async (values: FormValues) => {
    try {
      setIsLoading(true);
      await signIn(values.email, values.password);
      toast({
        title: "Success!",
        description: "You have been logged in",
      });
      navigate('/chat');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message || "Invalid email or password",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      toast({
        title: "Success!",
        description: "Signed in with Google",
      });
      navigate('/chat');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Google sign-in failed",
        description: error.message || "An error occurred during Google sign-in",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestAccess = () => {
    navigate('/chat');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 gradient-bg">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-6 border border-gray-100 dark:border-slate-800">
        <div className="text-center space-y-1 sm:space-y-2">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Logo />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-cura-dark dark:text-white">Welcome Back</h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Sign in to your Cura account</p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 border-gray-300 dark:border-gray-700 text-xs sm:text-sm"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path d="M21.8,10.4h-10V14h5.7c-0.5,2.5-2.7,4.3-5.7,4.3c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.4,0,2.7,0.5,3.7,1.3l2.8-2.8 C16.4,3.1,14,2,11.3,2C5.5,2,0.8,6.7,0.8,12.5S5.5,23,11.3,23c5.8,0,9.6-3.8,9.6-9.5C21,12.2,20.9,11.3,21.8,10.4z" fill="#4285F4"></path>
                <path d="M5.3,14.7l-3.3,2.8c2,4,6.1,6.7,10.7,6.7c2.8,0,5.1-0.9,6.9-2.5l-3.3-2.6c-0.9,0.6-2.1,1-3.6,1 C9.4,20.2,6.8,18,6.1,15C5.9,14.9,5.7,14.8,5.3,14.7z" fill="#34A853"></path>
                <path d="M21.8,10.4l-0.2,1.3c-0.1,0.8-0.6,1.5-1.1,2c-0.6,0.5-1.3,0.8-2,1l-3.3-2.6c1.3-0.8,2.2-2.2,2.4-3.8h-6.7V3.5 c0,0,6.7,0,8.8,0C20.7,4.5,21.4,6.6,21.8,10.4z" fill="#FBBC05"></path>
                <path d="M5.3,14.7c-0.4-1.1-0.7-2.2-0.7-3.4s0.2-2.3,0.7-3.4l-3.3-2.6C0.7,7.2,0,9.8,0,12.5s0.7,5.3,1.9,7.2L5.3,14.7z" fill="#EA4335"></path>
              </g>
            </svg>
            Sign in with Google
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-3 sm:space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="you@example.com" 
                        type="email" 
                        {...field} 
                        disabled={isLoading}
                        className="text-xs sm:text-sm h-9 sm:h-10"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Password</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="••••••••" 
                        type="password" 
                        {...field} 
                        disabled={isLoading}
                        className="text-xs sm:text-sm h-9 sm:h-10"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          disabled={isLoading}
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        />
                      </FormControl>
                      <FormLabel className="text-xs sm:text-sm font-normal">Remember me</FormLabel>
                    </FormItem>
                  )}
                />
                
                <div className="text-xs sm:text-sm">
                  <Link to="/forgot-password" className="text-cura-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-cura-primary hover:bg-cura-primary/90 text-xs sm:text-sm h-9 sm:h-10"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-gray-500">Or</span>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full text-gray-600 dark:text-gray-400 text-xs sm:text-sm h-9 sm:h-10"
            onClick={handleGuestAccess}
          >
            Continue as Guest
          </Button>
          
        </div>

        <div className="text-center text-xs sm:text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-cura-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
