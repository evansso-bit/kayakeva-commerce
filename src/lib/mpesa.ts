export async function PayWithMpesa() {
    const tokener = await fetch("http://localhost:3000/api/token", {
        method: "GET",
    });

    const tokens = await tokener.json();

    const token = tokens.data.access_token;
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
        Amount: 100,
        PartyA: 254711990445,
        PartyB: 174379,
        PhoneNumber: 254711990445,
        CallBackURL: "http://localhost:3000/success",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
    };

    const mpesaResponse = await fetch(
        "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer DfXEDYy8yWBtYqVGyYoKTS8Q40sQ`,
            },
            body: JSON.stringify(paymentPayload),
        }
    );

    const data = await mpesaResponse.json();

    return data;
}
