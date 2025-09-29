import { PhoneCall } from 'lucide-react';
import { Logo } from '../../ui/logo';
import { LanguageSelector } from './language-selector';
import { NavLinks } from './nav-links';
import { NavSearchBar } from './nav-searchbar';

export const Navbar = () => {
    return (
        <header className="relative z-50 w-full h-32 flex items-center justify-between px-72 max-3xl:px-64 max-2xl:px-48 max-xl:px-36 max-lg:px-24 max-md:px-12 max-sm:px-6">
            <div className="flex items-center gap-12">
                <Logo height={36} width={36} />
                <NavLinks />
            </div>
            <div className="flex items-center gap-6 mt-1 max-lg:hidden">
                <div className="flex gap-4 items-center">
                    <PhoneCall className="text-primary" />
                    <span className="text-background">06.00.00.00.00</span>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="rounded-full flex items-center justify-center bg-background">
                        <NavSearchBar />
                    </div>
                    <div className="rounded-full flex items-center justify-center bg-background">
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </header>
    );
};
