import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:
                    'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary',
                ghost: 'hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive',
            },
            size: {
                sm: 'h-8 px-2 text-xs rounded-md',
                md: 'h-10 px-3 text-sm rounded-lg',
                lg: 'h-12 px-4 text-md rounded-1xl',
                xl: 'h-14 px-6 text-lg rounded-2xl',
                icon: 'h-10 w-10 rounded-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant, size, iconLeft, iconRight, children, ...props },
        ref
    ) => {
        return (
            <button
                className={`${buttonVariants({
                    variant,
                    size,
                    className,
                })} w-fit`}
                ref={ref}
                {...props}
            >
                {iconLeft && <span className="inline-flex">{iconLeft}</span>}
                {children}
                {iconRight && <span className="inline-flex">{iconRight}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
