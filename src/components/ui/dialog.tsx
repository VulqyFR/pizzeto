'use client';

import { cn } from '@/lib/cn';
import { X } from 'lucide-react';
import {
    FC,
    MouseEvent,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { createPortal } from 'react-dom';

type DialogContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

type DialogProps = {
    children: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

export const Dialog: FC<DialogProps> = ({ children, open, onOpenChange }) => {
    const [isOpen, setIsOpen] = useState(open || false);

    useEffect(() => {
        if (open !== undefined) {
            setIsOpen(open);
        }
    }, [open]);

    const handleOpenChange = (newOpen: boolean) => {
        setIsOpen(newOpen);
        onOpenChange?.(newOpen);
    };

    return (
        <DialogContext.Provider value={{ isOpen, setIsOpen: handleOpenChange }}>
            {children}
        </DialogContext.Provider>
    );
};

type DialogTriggerProps = {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
};

export const DialogTrigger: FC<DialogTriggerProps> = ({
    children,
    className = '',
}) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogTrigger must be used within a Dialog');
    const { setIsOpen } = context;

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        setIsOpen(true);
    };

    return (
        <button onClick={handleClick} type="button" className={className}>
            {children}
        </button>
    );
};

type DialogPortalProps = {
    children: ReactNode;
};

export const DialogPortal: FC<DialogPortalProps> = ({ children }) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogPortal must be used within a Dialog');
    const { isOpen } = context;

    if (!isOpen) return null;

    return typeof window !== 'undefined'
        ? createPortal(children, document.body)
        : null;
};

type DialogOverlayProps = {
    className?: string;
};

export const DialogOverlay: FC<DialogOverlayProps> = ({ className = '' }) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogOverlay must be used within a Dialog');
    const { setIsOpen } = context;

    return (
        <div
            className={`fixed inset-0 bg-black/90 bg-opacity-50 z-50 ${className}`}
            onClick={() => setIsOpen(false)}
        />
    );
};

type DialogContentProps = {
    children: ReactNode;
    className?: string;
};

export const DialogContent: FC<DialogContentProps> = ({
    children,
    className = '',
}) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogContent must be used within a Dialog');
    const { isOpen, setIsOpen } = context;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, setIsOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    return (
        <DialogPortal>
            <DialogOverlay />
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={handleOverlayClick}
            >
                <div
                    className={`relative rounded-3xl bg-background shadow-xl max-w-lg w-full z-10 ${className}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </DialogPortal>
    );
};

type DialogHeaderProps = {
    children: ReactNode;
    className?: string;
};

export const DialogHeader: FC<DialogHeaderProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
            {children}
        </div>
    );
};

type DialogTitleProps = {
    children: ReactNode;
    className?: string;
};

export const DialogTitle: FC<DialogTitleProps> = ({
    children,
    className = '',
}) => {
    return (
        <h2
            className={`text-lg font-semibold leading-none tracking-tight ${className}`}
        >
            {children}
        </h2>
    );
};

type DialogDescriptionProps = {
    children: ReactNode;
    className?: string;
};

export const DialogDescription: FC<DialogDescriptionProps> = ({
    children,
    className = '',
}) => {
    return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
};

type DialogBodyProps = {
    children: ReactNode;
    className?: string;
};

export const DialogBody: FC<DialogBodyProps> = ({
    children,
    className = '',
}) => {
    return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

type DialogFooterProps = {
    children: ReactNode;
    className?: string;
};

export const DialogFooter: FC<DialogFooterProps> = ({
    children,
    className = '',
}) => {
    return (
        <div
            className={cn(
                `flex items-center justify-end gap-2 p-8 pt-0 ${className}`
            )}
        >
            {children}
        </div>
    );
};

type DialogCloseProps = {
    children?: ReactNode;
    asChild?: boolean;
    className?: string;
};

export const DialogClose: FC<DialogCloseProps> = ({
    children,
    className = '',
}) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogClose must be used within a Dialog');
    const { setIsOpen } = context;

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className={`absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity ${className}`}
        >
            {children || <X size={20} />}
        </button>
    );
};
