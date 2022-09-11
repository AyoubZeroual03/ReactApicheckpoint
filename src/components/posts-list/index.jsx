import { PostItem } from "../post-item";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
export const PostList = () => {
  //   const [posts, setPosts] = useState(null);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, []);
  let { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <>
      <h1 className="text-center">Posts List</h1>
      {/* <PostItem /> */}
      <div className="container">
        <div className="row">
          {error && "error"}
          {loading && "loading"}
          {data &&
            data.map((post) => {
              return (
                <div key={post.id} className="col-md-4">
                  <PostItem post={post} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
