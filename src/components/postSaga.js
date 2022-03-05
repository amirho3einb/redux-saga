import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../redux/posts/postAction";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, error, post } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux-Saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostsRequest(postId))}>
        get post
      </button>
      {loading ? (
        <p>loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : post.title ? (
        <div>
          <p>post title : {post.title}</p>
          <p>post body : {post.body}</p>
        </div>
      ) : (
        <p>fetch some post !</p>
      )}
    </>
  );
};

export default PostSaga;
