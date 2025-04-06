
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Profile = () => {
  // This would typically check if the user is logged in
  const isLoggedIn = false; // Placeholder, would be determined by auth state
  const isGuest = true; // Placeholder, would be determined by auth state

  // If not logged in or guest, redirect to auth
  if (!isLoggedIn && !isGuest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please log in or register to view your profile</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button asChild>
              <Link to="/auth">Register/Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 px-4">
        <div className="max-w-4xl mx-auto py-12">
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>CU</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{isGuest ? "Guest User" : "Your Name"}</h1>
              <p className="text-gray-500 dark:text-gray-400">{isGuest ? "Using Cura as guest" : "user@example.com"}</p>
            </div>
          </div>

          {isGuest && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Guest Mode</CardTitle>
                <CardDescription>Sign up to save your chat history and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link to="/auth">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Age</p>
                      <p>{isGuest ? "Not specified" : "35"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                      <p>{isGuest ? "Not specified" : "Female"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Joined</p>
                      <p>{isGuest ? "Current session" : "April 2025"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Chat History</h2>
              {isGuest ? (
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center py-6 text-gray-500">Chat history is not saved in guest mode</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {/* This would map through chat history from state/DB */}
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Headache symptoms</h3>
                          <p className="text-sm text-gray-500">April 5, 2025</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/chat">View</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Allergy questions</h3>
                          <p className="text-sm text-gray-500">April 3, 2025</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/chat">View</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
