import { PhoneCall, X } from 'lucide-react';
import { Logo } from '../../ui/logo';
import { LanguageSelector } from './language-selector';
import { NavLinks } from './nav-links';
import { NavSearchBar } from './nav-searchbar';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    if (!open) return null;
    return (
        <div className="fixed right-0 top-0 h-full z-[100] flex">
            <div className="bg-background w-96 max-w-full h-full shadow-lg  flex flex-col justify-between gap-8">
                <div className="relative max-w-full h-full p-12 flex-col flex gap-8">
                    <button
                        className="absolute top-11 right-11 rounded-full p-2 bg-muted"
                        aria-label="Fermer le menu"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-4 mb-4">
                        <Logo height={32} width={32} />
                    </div>
                    <nav className="flex flex-col gap-4">
                        <NavLinks mobile />
                    </nav>
                </div>
                <div className="flex gap-4 p-12">
                    <div className="mt-4 flex gap-4">
                        <NavSearchBar />
                        <LanguageSelector />
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                        <PhoneCall className="text-primary" />
                        <span className="text-foreground">06.00.00.00.00</span>
                    </div>
                </div>
            </div>
            <div className="flex-1" onClick={onClose} />
        </div>
    );
};
