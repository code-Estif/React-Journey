import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function UsersList() {
  const { users, loading, setSelectedUser } = useContext(UsersContext);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => setSelectedUser(user)}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;