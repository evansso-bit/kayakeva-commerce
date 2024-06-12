"use client";

import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

interface ImageComponentProps {
    image: any;
}

export default function BlurImage({ image }: ImageComponentProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <div className="flex flex-col gap-4">
            <div className="w-fit overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <CldImage
                    alt={image.name}
                    src={image.public_id}
                    width={500}
                    height={300}
                    objectFit="cover"
                    className={cn(
                        "duration-700 ease-in-out hover:opacity-75 rounded-xl",
                        isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
        </div>
    );
}
