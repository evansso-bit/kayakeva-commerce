import BlurImage from "../image-component";
import { Rectangles } from "@/lib/images";
import React from "react";

export async function RectanglePillows() {
    const images = await Rectangles();
    return (
        <div className="mx-auto max-w-2xl  py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
                {images.resources.map((image: any) => (
                    <div key={image.asset_id} className="rounded-lg">
                        <BlurImage image={image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
