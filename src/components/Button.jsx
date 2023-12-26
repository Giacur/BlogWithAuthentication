export default function Button({children, ...props}){
    return <button {...props} className="px-4 py-2 bg-purple-700 hover:bg-purple-900 text-slate-50 rounded-md shadow-md">{children}</button>
}