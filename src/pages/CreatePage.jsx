import { useLoaderData, redirect } from "react-router-dom";
import PostForm from "../components/PostForm";
import { supabase } from "../utils/client";

export default function CreatePage() {
  const user = useLoaderData();

  return (
    <div className="py-5 container mx-auto">
      <PostForm userID={user.id} />
    </div>
  );
}

export async function loader() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if(!user){
      return redirect('/')
    }

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function action({ request, params }) {
  const postData = await request.formData();

  try {

    const {
        data: { user },
      } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("articles")
      .insert([
        {
          title: postData.get("title"),
          content: postData.get("content"),
          user_id: user.id,
          user_email: user.email,
        },
      ])
      .select();
  } catch (error) {
    console.log(error);
  }
  return redirect("/home");
}
