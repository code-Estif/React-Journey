import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function Header() {
  const { users, loading } = useContext(UsersContext);

  if (loading) return <h3>Loading...</h3>;

  return <h3>Total users: {users.length}</h3>;
}

export default Header;