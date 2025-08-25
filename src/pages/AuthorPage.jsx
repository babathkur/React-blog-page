import { useParams } from "react-router";

const AuthorPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>User Page</h2>
      <p>User ID {userId}</p>
      <p>Blog List</p>
    </div>
  );
}
export default AuthorPage;