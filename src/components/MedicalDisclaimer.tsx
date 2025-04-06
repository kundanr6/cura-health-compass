
import React from 'react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type MedicalDisclaimerProps = {
  showAsDialog?: boolean;
  children?: React.ReactNode;
  onAccept?: () => void;
};

const DisclaimerContent = () => (
  <>
    <h3 className="font-bold mb-2">Medical Disclaimer</h3>
    <p className="mb-2">
      Cura is not a substitute for professional medical advice, diagnosis, or treatment. 
      The content provided is for informational purposes only.
    </p>
    <ul className="list-disc pl-5 mb-2 space-y-1">
      <li>Always seek the advice of a qualified health provider.</li>
      <li>Never disregard professional medical advice because of something you have read on Cura.</li>
      <li>If you think you may have a medical emergency, call your doctor or emergency services immediately.</li>
    </ul>
    <p>
      Cura uses AI to analyze symptoms, but technology has limitations and may not capture the full context of your health situation.
    </p>
  </>
);

const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ 
  showAsDialog = false, 
  children, 
  onAccept 
}) => {
  if (showAsDialog) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {children || <Button variant="outline">Show Medical Disclaimer</Button>}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Important Health Information</AlertDialogTitle>
            <AlertDialogDescription>
              <DisclaimerContent />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onAccept}>I Understand</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <div className="p-4 border rounded-md bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-sm">
      <DisclaimerContent />
    </div>
  );
};

export default MedicalDisclaimer;
