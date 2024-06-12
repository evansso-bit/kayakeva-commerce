import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SquarePillows } from "./pillow/square-pillows";
import { RectanglePillows } from "./pillow/rectangle-pillows";
import { ColorSplashPillows } from "./pillow/sqpillow";

export function PillowTabs() {
    return (
        <div className="mx-auto">
            <Tabs
                defaultValue="square-pillows"
                className="max-w-[1200px] w-full">
                <TabsList>
                    <TabsTrigger value="square-pillows">
                        Square Pillows
                    </TabsTrigger>
                    <TabsTrigger value="rectangle-pillows">
                        Rectangle Pillows
                    </TabsTrigger>
                    <TabsTrigger value="color-splash">Color Splash</TabsTrigger>
                </TabsList>
                <TabsContent value="square-pillows">
                    <SquarePillows />
                </TabsContent>
                <TabsContent value="rectangle-pillows">
                    <RectanglePillows />
                </TabsContent>
                <TabsContent value="color-splash">
                    <ColorSplashPillows />
                </TabsContent>
            </Tabs>
        </div>
    );
}
