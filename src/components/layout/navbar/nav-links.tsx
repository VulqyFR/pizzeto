'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/a-propos', label: 'À propos' },
    { href: '/la-carte', label: 'La carte' },
];

interface NavLinksProps {
    mobile?: boolean;
}

export const NavLinks = ({ mobile }: NavLinksProps) => {
    const pathname = usePathname();

    return (
        <nav
            className={`flex items-center gap-6 mt-1 ${
                !mobile ? 'max-lg:hidden' : 'flex-col gap-2 items-start'
            }`}
        >
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium hover:text-muted-foreground text-foreground ${
                        pathname === link.href
                            ? 'underline underline-offset-3 hover:foreground'
                            : ''
                    }`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
};
