export default function PostText({post}){
    return (
        <div className="mt-10">
        <p className="text-gray-600">{post.content}</p>
      </div>
    )
}