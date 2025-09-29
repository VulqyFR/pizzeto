'use client';

import { Check, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
];

export function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                btnRef.current &&
                !btnRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <div className="relative">
            <button
                ref={btnRef}
                type="button"
                className="rounded-full flex items-center justify-center bg-background"
                onClick={() => setOpen((v) => !v)}
                aria-label="Changer de langue"
            >
                <Globe height={20} width={20} className="text-foreground m-2" />
            </button>
            {open && (
                <div
                    ref={menuRef}
                    className="absolute -translate-x-1/2 left-4.5 mt-4 w-32 bg-background border border-muted-foreground/20 shadow z-20 py-2"
                >
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-muted-foreground/20 rotate-45 z-30"></span>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`w-full text-left px-4 py-2 text-sm hover:cursor-pointer ${
                                lang.code === 'fr'
                                    ? 'text-primary hover:text-primary/90'
                                    : 'text-muted-foreground/50'
                            }`}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <div className="flex justify-between items-center">
                                {lang.label}
                                {lang.code === 'fr' && (
                                    <Check size={16} className="inline" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
