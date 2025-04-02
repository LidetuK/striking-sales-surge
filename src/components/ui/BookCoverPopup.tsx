
import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface BookCoverPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitch: () => void;
}

const BookCoverPopup = ({ isOpen, onClose, onSwitch }: BookCoverPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" onClick={onClose} />
          <span className="sr-only">Close</span>
        </div>
        
        <DialogTitle className="text-xl font-semibold">
          Out of Stock
        </DialogTitle>
        
        <DialogDescription className="py-4">
          <div className="space-y-4">
            <p>
              We're sorry, but hardcover copies are currently out of stock. Please select the softcover option instead.
            </p>
            <div className="flex items-center justify-center">
              <img src="/lovable-uploads/Elevate Higher Book Mockup 5.jpg" alt="Softcover Book" className="w-32 h-auto" />
            </div>
          </div>
        </DialogDescription>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-primary text-white" onClick={onSwitch}>
            Switch to Softcover
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookCoverPopup;
