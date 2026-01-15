import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function UsersList() {
  const { users, loading, selectedUser, setSelectedUser } =
    useContext(UsersContext);

  if (loading) return <p>Loading...</p>;

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => setSelectedUser(user)}
          className={
            selectedUser?.id === user.id ? "user selected" : "user"
          }
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;