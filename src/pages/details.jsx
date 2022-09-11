import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostItem } from "../components/post-item";
import useFetch from "../hooks/useFetch";
const DetailsPage = () => {
  //   const [details, setDetails] = useState(null);
  let params = useParams();
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(params.id)}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setDetails(data);
  //       })
  //       .catch((err) => console.log(err.message));
  //   }, []);
  let { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${parseInt(params.id)}`
  );
  return (
    <div className="container">
      <h1>Post details : {params.id}</h1>
      <div className="col-md-8">{data && <PostItem post={data} />}</div>
    </div>
  );
};

export default DetailsPage;
