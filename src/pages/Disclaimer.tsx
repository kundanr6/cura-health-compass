import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 px-4">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Medical Disclaimer</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <div className="p-4 border rounded-md bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 mb-8">
              <p className="font-bold">Important Notice:</p>
              <p>
                The information provided by Cura is not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
            
            <h2>No Medical Diagnosis</h2>
            <p>
              Cura does not provide medical diagnoses. The information provided by Cura is for informational and educational purposes only. 
              The analysis of symptoms is based on general knowledge and statistical correlations, not on a personal examination of your health.
            </p>
            
            <h2>Emergency Situations</h2>
            <p>
              If you think you may have a medical emergency, call your doctor or emergency services immediately. 
              Cura's recommendations should never delay seeking professional medical advice, diagnosis, or treatment.
            </p>
            
            <h2>Limitations of AI</h2>
            <p>
              Cura uses artificial intelligence to analyze symptoms, but AI has limitations:
            </p>
            <ul>
              <li>It cannot perform physical examinations</li>
              <li>It cannot order or interpret medical tests</li>
              <li>It has limited information about your specific medical history</li>
              <li>It may not have the most current medical research</li>
              <li>It cannot recognize non-verbal cues or subtle symptoms</li>
            </ul>
            
            <h2>Health Recommendations</h2>
            <p>
              Any recommendations provided by Cura regarding home remedies, lifestyle changes, yoga, or dietary suggestions should be:
            </p>
            <ul>
              <li>Discussed with a healthcare professional before implementation</li>
              <li>Considered as general information, not personalized medical advice</li>
              <li>Evaluated in the context of your full health profile, which Cura does not have</li>
            </ul>
            
            <h2>No Doctor-Patient Relationship</h2>
            <p>
              Using Cura does not create a doctor-patient relationship. Cura is a tool designed to provide information, 
              not to replace the important relationship you have with your healthcare providers.
            </p>
            
            <h2>Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, 
              reliability, completeness, or timeliness of the content provided by Cura.
            </p>
            
            <h2>Use at Your Own Risk</h2>
            <p>
              By using Cura, you acknowledge and agree that you do so at your own risk. 
              The creators and operators of Cura shall not be liable for any direct, indirect, incidental, consequential, or special damages 
              arising out of or in any way connected with the use of Cura or reliance on any information provided by Cura.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
