import UserForm from "../components/UserForm";
import { redirect } from "react-router-dom";
import { supabase } from "../utils/client";

export default function LoginPage() {
  return (
    <>
      <div className="container mx-auto flex justify-center py-10">
        <UserForm login />
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

    return redirect("home");
  } catch (error) {
    console.log(error);
  }
}
