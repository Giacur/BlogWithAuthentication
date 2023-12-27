import { redirect, useLoaderData } from "react-router-dom";
import { supabase } from "../utils/client";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const {user, articles} = useLoaderData();
  let lastAccess = "";

  if (user) {
    lastAccess = new Date(user.last_sign_in_at);
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold py-5">Area personale</h1>
      <p className="text-center">{user && user.email}</p>
      <p className="text-center">
        Ultimo accesso: {user && lastAccess.toLocaleDateString()}
      </p>

      <div className="py-5 flex flex-col items-center">
        {articles.map(article=>{
          return <PostCard key={article.id} article={article} user={user} />
        })}
      </div>
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

    const { data: articles, error } = await supabase
    .from('articles')
    .select("*").eq('user_id', user.id)

    return {user, articles};

  } catch (error) {
    console.log(error);
  }
}
