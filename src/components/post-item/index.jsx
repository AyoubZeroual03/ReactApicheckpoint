import { useParams, useNavigate } from "react-router-dom";
export const PostItem = ({
  post = {
    id: 555,
    title: "this is title",
    body: "this is body",
  },
}) => {
  const { id, title, body } = post;
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{body}</p>
        {!params.id && (
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/posts/${id}`)}
          >
            read more
          </button>
        )}
      </div>
    </div>
  );
};
