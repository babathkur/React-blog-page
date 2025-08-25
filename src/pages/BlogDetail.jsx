import { useParams } from "react-router";

const BlogDetail = () => {
    const {blogId} = useParams();
  return (
    <div>
      <h1>Blog Detail Page</h1>
      <p>Blog ID : {blogId}</p>
    </div>
  );
}
export default BlogDetail;