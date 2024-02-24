import DeletePostButton from "./DeletePostButton";

export default function Post({id, title, content, authorName, email}) {
    return (
        <>
            <article className="relative shadow-md shadow-slate-300 p-5 text-start mb-4 hover:bg-blue-100">
                <h3 className="font-bold uppercase mb-2">{authorName}</h3>
                <h3>{email? email : ""}</h3>
                <h4 className="">{title}</h4>
                <p className="font-extralight mb-6">{content}</p>
                <DeletePostButton postId={id}/>
            </article>
        </>
        
    );
}