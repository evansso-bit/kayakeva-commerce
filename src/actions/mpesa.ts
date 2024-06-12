"use server";

export async function Mpesa(formData: FormData) {
    ("use server");

    const numberString = formData.get("number");
    const number = Number(numberString); // Convert to number (either int or float)

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

    // Encode the password using base64
    const password = Buffer.from(businessShortCode + passKey + time).toString(
        "base64"
    );

    // Create the request payload
    const paymentPayload = {
        BusinessShortCode: businessShortCode,
        Password: password,
        Timestamp: time,
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: number,
        PartyB: 174379,
        PhoneNumber: number,
        CallBackURL: "https://mydomain.com/pat",
        AccountReference: "Kayakeva Decor",
        TransactionDesc: "Payment of Decor",
    };

    await fetch("http://localhost:3000/api/Mpesa/MpesaPayment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentPayload),
    });
}
