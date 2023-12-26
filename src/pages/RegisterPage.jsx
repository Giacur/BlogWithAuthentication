import UserForm from "../components/UserForm";
import { redirect } from "react-router-dom";
import { supabase } from "../utils/client";

export default function RegisterPage() {
  return (
    <>
      <div className="container mx-auto flex justify-center py-10">
        <UserForm />
      </div>
    </>
  );
}

export async function action({ request, params }) {
  const userData = await request.formData();

  try {
    const { data, error } = await supabase.auth.signUp({
      email: userData.get('email'),
      password: userData.get('password'),
    });

    return redirect('/')
  } catch (error) {
    console.log(error);
  }
}
