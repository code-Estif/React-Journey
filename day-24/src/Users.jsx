import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔹 filter users based on search text
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="status">Loading users...</p>;
  }

  if (error) {
    return <p className="status">Error: {error}</p>;
  }

  return (
    <div className="users-card">
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <h2>Users</h2>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => alert(user.email)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;