
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getChatSessions } from '@/services/chatService';
import { ChatSession } from '@/types/chat';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistance } from 'date-fns';

const Profile = () => {
  const { currentUser } = useAuth();
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChatSessions = async () => {
      if (currentUser) {
        setIsLoading(true);
        try {
          const sessions = await getChatSessions(currentUser.uid);
          setChatSessions(sessions);
        } catch (error) {
          console.error('Error fetching chat sessions:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchChatSessions();
  }, [currentUser]);

  // If not logged in or guest, redirect to auth
  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 flex items-center justify-center p-4">
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
        </main>
        <Footer />
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
              <AvatarImage src={currentUser.photoURL || "/placeholder.svg"} alt="Profile" />
              <AvatarFallback>
                {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{currentUser.displayName || "Cura User"}</h1>
              <p className="text-gray-500 dark:text-gray-400">{currentUser.email}</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p>{currentUser.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Account Created</p>
                      <p>{currentUser.metadata.creationTime 
                          ? formatDistance(new Date(currentUser.metadata.creationTime), new Date(), { addSuffix: true }) 
                          : "Unknown"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last Sign In</p>
                      <p>{currentUser.metadata.lastSignInTime 
                          ? formatDistance(new Date(currentUser.metadata.lastSignInTime), new Date(), { addSuffix: true }) 
                          : "Unknown"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Chat History</h2>
              <Card>
                <CardContent className="pt-6">
                  {isLoading ? (
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <Skeleton className="h-4 w-[200px] mb-2" />
                            <Skeleton className="h-3 w-[100px]" />
                          </div>
                          <Skeleton className="h-8 w-[60px]" />
                        </div>
                      ))}
                    </div>
                  ) : chatSessions.length > 0 ? (
                    <div className="space-y-4">
                      {chatSessions.map((session) => (
                        <Card key={session.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{session.title}</h3>
                                <p className="text-sm text-gray-500">
                                  {formatDistance(session.lastUpdatedAt, new Date(), { addSuffix: true })}
                                </p>
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <Link to={`/chat?sessionId=${session.id}`}>View</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-6 text-gray-500">No chat history found</p>
                  )}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
