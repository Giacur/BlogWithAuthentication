import { supabase } from "../utils/client";
import { redirect } from "react-router-dom";

export async function logout({ request, params }) {
  try {
    const { error } = await supabase.auth.signOut();
    alert('Utente disconnesso!')
    return redirect('/');
  } catch (error) {
    console.log(error);
  }
}
