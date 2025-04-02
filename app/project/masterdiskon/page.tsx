import Index from "@/components/main/masterdiskon/Index";
import Image from "next/image";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Index />
            </div>
        </main>
    );
}
