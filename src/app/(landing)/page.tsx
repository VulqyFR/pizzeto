import { TopRightDecoration } from '@/components/layout/top-right-decoration';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <TopRightDecoration />
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <Image
                        src="/images/hero-pizza.png"
                        alt="Pizza"
                        width={300}
                        height={300}
                        draggable={false}
                    />
                </main>
            </div>
        </>
    );
}
