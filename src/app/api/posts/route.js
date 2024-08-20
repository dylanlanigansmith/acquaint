export async function GET() {
    
  let posts = [];
  try {
    const res = await query('SELECT * FROM posts LIMIT 5'); // Adjust SQL query as needed
    posts = res.rows;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
  
    return new Response(JSON.stringify(posts), {
      headers: { 'Content-Type': 'application/json' },
    });
  }