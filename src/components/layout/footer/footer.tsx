interface FooterProps {
    variant?: 'default' | 'primary';
}

export const Footer = ({ variant = 'default' }: FooterProps) => {
    return (
        <footer
            className={`bg-background text-foreground h-96 w-full py-6 flex flex-col items-center gap-4 px-6 ${
                variant === 'primary' ? 'bg-primary text-primary' : ''
            }`}
        ></footer>
    );
};
