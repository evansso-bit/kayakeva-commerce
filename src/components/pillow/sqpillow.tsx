import { PillowCombos } from "./combos";
import BlurImage from "../image-component";
import { Squarec } from "@/lib/images";

export async function ColorSplashPillows() {
    const images = await Squarec();
    return (
        <div>
            <h1 className=" lg:text-3xl sm:text-xl text-2xl text-white mx-auto lg:mb-10 my-5">
                Pillow Combos
            </h1>
            <PillowCombos />

            <h1 className=" lg:text-3xl sm:text-xl text-2xl text-white mx-auto lg:mb-10 my-5">
                Color Splash
            </h1>
            <div className="">
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
                    {images.resources.map((image: any) => (
                        <div key={image.asset_id}>
                            <BlurImage image={image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
