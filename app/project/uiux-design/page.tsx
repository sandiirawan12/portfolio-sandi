import Index from "@/components/main/uiux-design/Index";
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
