import { Link, Form } from "react-router-dom";
import Button from '../components/Button'

export default function PostCard({ article, autore, owner }) {
  let articleDate = "";

  if (article) {
    articleDate = new Date(article.created_at);
  }

  return (
    <div className="block w-2/3 mb-5 p-6 bg-purple-600/50 backdrop-blur-xl border border-gray-200 rounded-lg shadow-md static">
      <h5 className="mb-2 text-2xl font-bold text-slate-50">{article.title}</h5>
      <p className="font-normal text-slate-100">{article.content}</p>
      {autore && (
        <p className="font-sm text-slate-100 text-end mt-5">
          <i className="fa-solid fa-user me-2"></i> {article.user_email}
        </p>
      )}
      <p className="font-sm text-slate-100 text-end">
        {articleDate.toLocaleDateString()}
      </p>
      {owner && 

      <Form method="POST" action={`/articles/del/${article.id}`} className="absolute end-3 top-3">
        <button>
        <i className="text-black hover:cursor-pointer hover:text-red-600 fa-solid text-[1.2rem] fa-trash-can"></i>
        </button>
      </Form>}
    </div>
  );
}


