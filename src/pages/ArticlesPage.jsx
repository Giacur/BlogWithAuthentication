import { useLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";
import { supabase } from "../utils/client";

export default function ArticlesPage() {
  const articles = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-10">Bacheca</h1>

      {articles.length > 0 && (
        <div className="container mx-auto flex flex-col items-center">
          {articles.map((article) => {
            return <PostCard autore key={article.id} article={article} />;
          })}
        </div>
      )}

      {articles.length < 1 && (
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-center py-5 text-red-500">
            Siamo spiacenti, ma non ci sono articoli da mostrare.
          </p>
        </div>
      )}
    </div>
  );
}

export async function loader() {
  try {
    let { data: articles, error } = await supabase.from("articles").select("*");
    return articles;
  } catch (error) {
    console.log(error);
  }
}
