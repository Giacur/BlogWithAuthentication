import { redirect } from "react-router-dom";
import { supabase } from "../utils/client";

export async function action({ request, params }) {
  const postId = params.id;

  try {
    const { error } = await supabase.from("articles").delete().eq("id", postId);
    return redirect("/home");
  } catch (error) {
    console.log(error);
  }
}
