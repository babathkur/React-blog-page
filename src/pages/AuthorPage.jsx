import { useParams } from "react-router";

const AuthorPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>Author Page</h2>
      <p>Auther ID {userId}</p>
      <p>Blog List</p>
    </div>
  );
}
export default AuthorPage;