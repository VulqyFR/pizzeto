'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { MobileMenu } from './mobile-menu';

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className="lg:hidden rounded-full p-2 bg-background z-[100]"
                aria-label="Ouvrir le menu"
                onClick={() => setOpen(true)}
            >
                <Menu size={28} />
            </button>
            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </>
    );
};
