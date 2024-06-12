import Image from "next/image";
import { Button } from "./ui/button";

export default function MainHeader() {
    return (
        <div className="w-full bg-cover bg-center bg-no-repeat lg:h-[500px] h-[350px] overflow-hidden relative">
            <Image
                src={"/background.png"}
                alt="background"
                fill
                className="object-cover"
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full">
                <div className="flex flex-col px-3 items-center text-white justify-center gap-4">
                    <h1 className="font-extrabold text-center lg:text-7xl text-5xl font-playFair">
                        Comfort Redifined
                    </h1>
                    <p className="lg:text-2xl text-xl">
                        Discover the perfect pillow
                    </p>
                    <div className="flex flex-row gap-4">
                        <Button size="lg" className="rounded-full">
                            Shop Now
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full border-solid border-2 border-white text-white bg-transparent">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
