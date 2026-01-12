import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function UserDetails() {
  const { selectedUser } = useContext(UsersContext);

  if (!selectedUser) {
    return <p>Select a user</p>;
  }

  return (
    <div>
      <h4>{selectedUser.name}</h4>
      <p>Email: {selectedUser.email}</p>
      <p>Phone: {selectedUser.phone}</p>
    </div>
  );
}

export default UserDetails;