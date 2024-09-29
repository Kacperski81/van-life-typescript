import { Form } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export function Login() {
  const {navigation} = useLogin();

  return (
    <div className="my-0 w-full bg-background px-4 md:bg-[transparent] lg:flex lg:items-center lg:justify-center">
      <Form
        method="post"
        className="mx-auto flex aspect-square max-w-[500px] flex-col justify-center rounded-full border border-8 border-white bg-red-500 px-3 py-4 shadow-xl lg:grow"
      >
        <button
          className="mx-auto mt-4 w-11/12 rounded-lg bg-white py-2 py-4 text-lg font-bold text-black shadow-lg hover:scale-105 hover:text-xl active:scale-95"
          type="submit"
        >
          {navigation.state !== "idle" ? "Logging in ..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
