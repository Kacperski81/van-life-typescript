export function Login() {
    return (
        <div className="my-0 mx-auto">
            <form className="flex flex-col gap-3 px-4 py-4">
                <h1 className="text-3xl font-bold">Sign in to your account</h1>
                <input
                    className="p-2 rounded-lg"
                    type="text"
                    placeholder="Email address"
                />
                <input
                    className="p-2 rounded-lg"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="border py-2 rounded-lg text-white bg-rent-button"
                    type="submit"
                >
                    Log in
                </button>
            </form>
        </div>
    )
}