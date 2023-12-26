import { redirect, useLoaderData } from "react-router-dom";
import { supabase } from "../utils/client";

export default function HomePage() {
  const user = useLoaderData();
  let lastAccess = "";

  if (user) {
    lastAccess = new Date(user.last_sign_in_at);
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold py-20">Home page</h1>
      <p className="text-center">{user && user.email}</p>
      <p className="text-center">
        Ultimo accesso: {user && lastAccess.toLocaleDateString()}
      </p>
    </>
  );
}

export async function loader() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if(!user){
      return redirect('/');
    }

    return user;
  } catch (error) {
    console.log(error);
  }
}
