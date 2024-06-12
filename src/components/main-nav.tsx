import { auth } from "@/actions/auth";
import SignInPage from "./sign-in";
import Link from "next/link";
import { Menu } from "@/components/menu";
import { Cart } from "@/components/Cart";

export async function MainNav() {
    const session: any = await auth();
    return (
        <nav className="flex justify-center z-50  sticky top-[10px] left-0 right-0 mx-3">
            <div className="bg-amber-500 max-w-[1200px] w-full px-[13px] py-[7px] rounded-full ">
                <div className="flex flex-row justify-between items-center">
                    <Link href={"/"}>
                        <h1 className="text-xl font-playFair leading-snug">
                            Kayakeva
                        </h1>
                    </Link>

                    <div className="flex flex-row items-center gap-7">
                        <Cart />
                        {session?.user ? <Menu /> : <SignInPage />}
                    </div>
                </div>
            </div>
        </nav>
    );
}
