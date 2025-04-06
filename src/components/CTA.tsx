
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-cura-primary to-cura-secondary p-10 md:p-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take control of your health?</h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Start a conversation with Cura and get personalized health guidance based on your symptoms.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="bg-white text-cura-primary hover:bg-gray-100">
            <Link to="/login">
              Sign In
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/chat">
              Try as Guest
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
