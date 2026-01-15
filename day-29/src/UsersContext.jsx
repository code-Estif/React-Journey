import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("az");
  const [selectedUser, setSelectedUser] = useState(null);

  // 1️⃣ Fetch users (runs once)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // 2️⃣ Restore selected user from localStorage (runs once)
  useEffect(() => {
    const savedUser = localStorage.getItem("selectedUser");
    if (savedUser) {
      setSelectedUser(JSON.parse(savedUser));
    }
  }, []);

  // 3️⃣ Save selected user to localStorage (runs on change)
  useEffect(() => {
    if (selectedUser) {
      localStorage.setItem(
        "selectedUser",
        JSON.stringify(selectedUser)
      );
    }
  }, [selectedUser]);

  // 4️⃣ Derived data: filter + sort
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
