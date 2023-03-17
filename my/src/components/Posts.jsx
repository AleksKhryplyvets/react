import { useEffect, useState } from "react";

const Posts = () => {
  const [value, setValue] = useState(0)
  const [posts, setPosts] = useState([]);
  const handleClick = () => setPosts(value + 1)

  useEffect(() => {
    const request = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const items = await responce.json();
      setPosts(items);
    };
    request();
  }, []);
  return (
    <div className="posts">
      <ul>
        {posts.map(post => <li key={post.id}>{post.name}</li>)}
      </ul>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Posts;
