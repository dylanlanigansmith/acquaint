import { query } from "@/data/db";
import Post from "@/components/Post";


async function get_posts() {
  let posts = [];
  try {
    const res = await query("SELECT * FROM posts LIMIT 10"); // Adjust SQL query as needed
    posts = res.rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return posts;
}


export default async function Feed({ param }) {
  const posts = await get_posts();


  return (
    <div className="md:w-2/5 border-r bg-gray-50 overflow-hidden">
      <nav className="flex py-4 px-4 sticky top-0 border-b bg-white items-center justify-between">
        <h1 className="font-extrabold tracking-wide text-lg text-gray-800">
          Latest
        </h1>
        <div className="text-blue-400">
          <i className="fa fa-dot-circle-o"></i>
        </div>
      </nav>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden">
        {posts.length > 0 ? (
          posts.map((post) => <Post key={post.uid} post={post} />)
        ) : (
          <p>Failed to fetch latest.</p>
        )}
      </div>
    </div>
  );
}
