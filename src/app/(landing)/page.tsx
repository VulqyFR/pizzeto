import { Hero } from './hero';

export default function Home() {
    return (
        <>
            {' '}
            <main className="overflow-hidden relative z-50 w-full flex flex-col items-center justify-between px-72 max-3xl:px-64 max-2xl:px-48 max-xl:px-48 max-lg:px-24 max-md:px-12 max-sm:px-6">
                <Hero />
                <p>dsds</p>
            </main>
        </>
    );
}
