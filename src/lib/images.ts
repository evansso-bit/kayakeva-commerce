import { redis } from "@/lib/redis";

import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with credentials
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Assuming your variables are named like this
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function Squares() {
    const cachedData = await redis.get("squares");

    if (cachedData) {
        return cachedData;
    }

    const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "square/", // Folder to search in
        max_results: 500, // Adjust if needed
    });

    await redis.set("squares", result);

    return result;
}

export async function Rectangles() {
    const cachedData = await redis.get("rectangle");
    if (cachedData) {
        return cachedData;
    }

    const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "rectangle/", // Folder to search in
        max_results: 500, // Adjust if needed
    });

    await redis.set("rectangle", result);

    return result;
}

export async function Squarec() {
    const cachedData = await redis.get("squarecs");
    if (cachedData) {
        return cachedData;
    }

    const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "squarec/", // Folder to search in
        max_results: 500, // Adjust if needed
    });
    await redis.set("squarecs", result);

    return result;
}

export async function Combos() {
    const cachedData = await redis.get("combos");
    if (cachedData) {
        return cachedData;
    }

    const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "combos/", // Folder to search in
        max_results: 500, // Adjust if needed
    });
    await redis.set("combos", result);

    return result;
}
