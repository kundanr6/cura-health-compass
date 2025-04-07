
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmergencyAlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const EmergencyAlert: React.FC<EmergencyAlertProps> = ({ 
  isOpen, 
  message, 
  onClose 
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="border-cura-danger border-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <AlertDialogHeader className="flex items-center">
            <div className="bg-cura-danger/10 p-4 rounded-full mb-4">
              <AlertTriangle className="h-10 w-10 text-cura-danger" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-cura-danger">
              Emergency Warning
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base mt-2">
              {message || "Your symptoms may indicate a serious condition. Please consult a medical professional immediately."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6">
            <AlertDialogAction 
              onClick={onClose}
              className="bg-cura-danger hover:bg-cura-danger/90 text-white w-full"
            >
              Understood, continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </motion.div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EmergencyAlert;
