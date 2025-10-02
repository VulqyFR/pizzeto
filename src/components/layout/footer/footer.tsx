import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/cn';
import Image from 'next/image';

interface FooterProps {
    background?: 'default' | 'foreground' | 'secondary';
    variant?: 'default' | 'primary';
}

export const Footer = ({
    variant = 'default',
    background = 'default',
}: FooterProps) => {
    return (
        <footer
            className={cn(
                `relative ${
                    variant === 'default' ? 'bg-background' : 'bg-primary'
                }  text-foreground w-full py-16 z-50`
            )}
        >
            <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="w-full h-[120px]"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 120"
                >
                    <path
                        d="M0,120 C360,0 1080,0 1440,120 L1440,0 L0,0 Z"
                        fill={
                            background === 'foreground'
                                ? '#E8E3D9'
                                : background === 'secondary'
                                ? '#ddb30a'
                                : '#1E1E1E'
                        }
                    />
                </svg>
            </div>
            <div className="relative z-10 px-8 pt-24 pb-8 max-w-7xl mx-auto">
                <div className="flex rounded-3xl md:-top-56 -top-48 absolute max-lg:ml-8 left-1/2 -translate-x-1/2 md:p-10 p-6 bg-[#f1ece5] text-background border-none w-72 md:w-auto">
                    <div className="absolute md:top-0 top-0 -left-36 w-full h-full">
                        <Image
                            src="/images/hero-pizza.png"
                            alt="Pizza"
                            width={400}
                            height={400}
                            draggable={false}
                            className="object-contain md:object-right select-none max-md:w-64 max-md:h-64   "
                        />
                    </div>
                    <div className="min-w-48 max-md:min-w-20 md:min-h-32" />
                    <div className="flex flex-col gap-4">
                        <div className="relative text-5xl max-md:text-3xl flex flex-col gap-2 font-bold mb-4">
                            <span>LIVRAISON</span>
                            <span>GRATUITE</span>
                            <div className="absolute top-18 left-12 max-md:top-12 w-full overflow-hidden">
                                <svg
                                    width="239"
                                    height="56"
                                    viewBox="0 0 239 56"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="max-md:w-32"
                                >
                                    <path
                                        d="M3 35.2792C14.8292 40.3419 47.7181 48.2928 66.4029 50.8411C101.589 55.6401 153.733 51.7246 175.42 46.0672C204.59 34.1749 220.989 24.5591 232.191 16.3704C236 12.1061 236 7.62102 236 3"
                                        stroke="#EE4231"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Button className="bg-secondary text-background rounded-full px-8">
                            Voir la carte
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-y-12 gap-x-24">
                    <div className="-mt-1.5 flex justify-end max-sm:justify-center lg:justify-start">
                        <Logo />
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-lg">Localisation</h3>
                        <p className="text-sm text-muted-foreground">
                            37 rue Pierre Jean <br /> 27836 Vierpon
                        </p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-lg max-sm:text-center max-lg:text-right">
                            Nous contacter
                        </h3>
                        <p className="text-sm text-muted-foreground max-sm:text-center max-lg:text-right">
                            06.00.00.00.00 <br /> contact@pizzeto.com
                        </p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-lg">Navigation</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>À propos</li>
                            <li>Notre menu</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-8 pt-4 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
                    <p>© 2025 Pizzeto. Tous droits réservés</p>
                    <p>Politique de confidentialité | Termes et conditions</p>
                </div>
            </div>
        </footer>
    );
};
