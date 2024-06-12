// /api/MpesaStatus/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const requestBody = await req.json();
        const checkoutRequestId = requestBody.CheckoutRequestID;

        const tokener = await fetch(
            "http://localhost:3000/api/Mpesa/MpesaToken",
            {
                method: "GET",
                cache: "no-store",
            }
        );

        const businessShortCode = 174379;
        const passKey: any = process.env.PASS_KEY;
        const date = new Date();

        const time =
            date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2);

        const password = Buffer.from(
            businessShortCode + passKey + time
        ).toString("base64");

        const tokens = await tokener.json();

        const token = tokens.data.access_token;

        const bodys = {
            BusinessShortCode: businessShortCode,
            Password: password,
            Timestamp: time,
            CheckoutRequestID: checkoutRequestId,
        };

        async function queryTransactionStatus(token: any, bodys: any) {
            const res = await fetch(
                "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(bodys),
                }
            );
            return res.json();
        }

        let data = await queryTransactionStatus(token, bodys);

        // Poll for transaction status
        while (data.errorCode === "500.001.1001") {
            await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
            data = await queryTransactionStatus(token, bodys);
        }

        return Response.json(data, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
