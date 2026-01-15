import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function UserDetails() {
  const { selectedUser } = useContext(UsersContext);

  if (!selectedUser) {
    return <p>Select a user to see details</p>;
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