export async function GET(res) {
    try {
        const response = await fetch(
            "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
            {
                method: "GET",
                headers: {
                    Authorization: `Basic ${process.env.CONSUMER_AUTH}`,
                },
                next: { revalidate: 3699 },
            }
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return Response.json({ data });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
