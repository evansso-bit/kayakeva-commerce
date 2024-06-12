import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Icons } from "@/components/icons";

export function Cart() {
    return (
        <Drawer>
            <DrawerTrigger>
                <Icons.cart />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Cart</DrawerTitle>
                    <DrawerDescription>There is nothing here</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}
