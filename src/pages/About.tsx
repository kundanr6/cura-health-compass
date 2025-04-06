
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 px-4">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">About Cura</h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Cura was created with a simple but important mission: to make basic healthcare guidance accessible to everyone, everywhere. 
                We believe that understanding your health shouldn't be limited by your location, language, or access to medical professionals.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">What Cura Can Do</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cura uses artificial intelligence to analyze your symptoms and provide possible explanations and guidance. It can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Analyze your symptoms</li>
                <li>Provide possible conditions that match your symptoms</li>
                <li>Offer home remedies and lifestyle recommendations</li>
                <li>Suggest dietary changes and yoga practices for wellness</li>
                <li>Alert you when symptoms might require urgent attention</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">What Cura Is Not</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                It's important to understand that Cura is not a replacement for professional medical care:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Cura does not provide medical diagnoses</li>
                <li>It cannot prescribe medications</li>
                <li>It doesn't have access to your medical history or test results</li>
                <li>It's not a substitute for emergency services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Privacy First</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Your health information is personal and private. Cura was designed with privacy as a core principle:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>No data is stored longer than necessary</li>
                <li>Your conversations are not used to train our models without consent</li>
                <li>We don't sell or share your health information</li>
                <li>No advertising or monetization of your health data</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Who We Built Cura For</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cura was designed for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>People in remote areas with limited access to healthcare</li>
                <li>Those seeking to understand basic symptoms before deciding to see a doctor</li>
                <li>Anyone interested in holistic wellness and preventative health</li>
              </ul>
            </section>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/">
              <Button size="lg">
                Start Using Cura
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
