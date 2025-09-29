'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/a-propos', label: 'À propos' },
    { href: '/la-carte', label: 'La carte' },
];

export const NavLinks = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-6 mt-1 max-lg:hidden">
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
