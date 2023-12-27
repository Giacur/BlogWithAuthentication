export default function PostCard({ article, user }) {
  return (
    <div className="block w-2/3 mb-5 p-6 bg-purple-600/50 backdrop-blur-xl border border-gray-200 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-bold text-slate-50">{article.title}</h5>
      <p className="font-normal text-slate-100">{article.content}</p>
    </div>
  );
}
