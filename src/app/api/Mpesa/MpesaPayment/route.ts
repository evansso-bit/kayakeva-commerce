// /api/MpesaPayment/route.ts

import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
    try {
        const tokener = await fetch(
            "http://localhost:3000/api/Mpesa/MpesaToken",
            {
                method: "GET",
                cache: "no-store",
            }
        ).then((res) => res.json());

        const token = tokener.data.access_token;

        const bodys = await req.json();

        console.log(bodys);

        console.log(token);

        const mpesaResponse = await fetch(
            "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(bodys),
            }
        );
        const data = await mpesaResponse.json();

        console.log(data);

        const mpesaStatus = await fetch(
            "http://localhost:3000/api/Mpesa/MpesaStatus",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                cache: "no-store",
            }
        ).then((res) => res.json());

        console.log(mpesaStatus);
        return Response.json({ mpesaStatus }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
