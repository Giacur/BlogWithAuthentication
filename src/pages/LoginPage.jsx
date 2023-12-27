import UserForm from "../components/UserForm";
import { redirect, json, useLoaderData, useActionData } from "react-router-dom";
import { supabase } from "../utils/client";

export default function LoginPage() {
  const error = useActionData();

  return (
    <>
      <div className="container mx-auto flex justify-center py-10">
        <UserForm login error={error ? error : null} />
      </div>
    </>
  );
}

export async function action({ request, params }) {
  const userData = await request.formData();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.get("email"),
      password: userData.get("password"),
    });

    if (!data.user) {
      return json(error);
    }

    return redirect("home");
  } catch (error) {
    //!...
  }
}
