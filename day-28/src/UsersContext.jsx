import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("az"); 
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      if (sortOrder === "az") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

   return (
    <UsersContext.Provider
      value={{
        users: filteredUsers,
        loading,
        search,
        setSearch,
        sortOrder,
        setSortOrder, 
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}