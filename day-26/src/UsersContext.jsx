import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState("");
   const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // 🔑 derived data (NOT state)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

   return (
    <UsersContext.Provider
      value={{
        users: filteredUsers,
        loading,
        search,
        setSearch,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
