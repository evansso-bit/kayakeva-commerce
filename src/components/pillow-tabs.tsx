import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PillowTabs() {
    return (
        <div className="mx-auto">
            <Tabs defaultValue="account" className="max-w-[1200px] w-full">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </div>
    );
}
