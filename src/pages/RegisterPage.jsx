import UserForm from "../components/UserForm";
import { redirect, useActionData, json } from "react-router-dom";
import { supabase } from "../utils/client";

export default function RegisterPage() {
  const error = useActionData();

  return (
    <>
      <div className="container mx-auto flex justify-center py-10">
        <UserForm error={error ? error : null} />
      </div>
    </>
  );
}

export async function action({ request, params }) {
  const userData = await request.formData();

  try {
    const { data, error } = await supabase.auth.signUp({
      email: userData.get("email"),
      password: userData.get("password"),
    });

    if (!data.user) {
      return json(error);
    }

    alert("Abbiamo inviato una e-mail di verifica al tuo indirizzo di posta!");
    return redirect("/");
  } catch (error) {
    //!...
  }
}
