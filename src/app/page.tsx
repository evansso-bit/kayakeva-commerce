import MainHeader from "@/components/main-header";
import { SitePromise } from "@/components/site-promise";
import { PillowTabs } from "@/components/pillow-tabs";

export default function Home() {
    return (
        <main className="flex flex-col lg:gap-20 gap-10">
            <MainHeader />
            <SitePromise />
            <PillowTabs />
        </main>
    );
}
