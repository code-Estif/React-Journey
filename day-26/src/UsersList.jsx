import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function UsersList() {
  const { users, loading, setSelectedUsers } = useContext(UsersContext);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => setSelectedUsers(user)}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;