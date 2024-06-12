import { signIn, providerMap } from "@/actions/auth";

export default async function SignInPage() {
    return (
        <div className="flex flex-col gap-2">
            {Object.values(providerMap).map((provider, index) => (
                <form
                    key={index}
                    action={async () => {
                        "use server";
                        await signIn(provider.id);
                    }}>
                    <button
                        type="submit"
                        className="border-solid rounded-full px-[23px] py-[11px] border-black text-black text-[15px] border-2">
                        Log in with Google
                    </button>
                </form>
            ))}
        </div>
    );
}
