import { Link, redirect, useLoaderData } from "react-router-dom";
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

      {articles.length > 0 && <div className="py-5 flex flex-col items-center">
        {articles.map(article=>{
          return <PostCard owner key={article.id} article={article} user={user} />
        })}
      </div>}

      {articles.length < 1 && (
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-center py-20 text-red-500">
            Non hai ancora pubblicato nessun post <Link to="/articles/new" className="bg-purple-500 text-slate-50 px-4 py-2 rounded-md shadow-md ms-3 hover:bg-purple-800">+ Pubblica</Link>
          </p>
        </div>
      )}
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
