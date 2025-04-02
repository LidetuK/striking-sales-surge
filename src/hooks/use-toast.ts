
import { toast as sonnerToast } from "sonner";

// Re-export the sonner toast function
export const toast = sonnerToast;

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
};

export const useToast = () => {
  const toasts: ToastProps[] = [];

  const toast = ({
    title,
    description,
    variant = "default",
    action,
    ...props
  }: ToastProps) => {
    // Use sonner's toast API
    return sonnerToast(title, {
      description,
      action,
      ...props,
    });
  };

  return {
    toast,
    toasts,
    dismiss: sonnerToast.dismiss,
    error: sonnerToast.error,
    success: sonnerToast.success,
    warning: sonnerToast.warning,
    info: sonnerToast.info,
  };
};
