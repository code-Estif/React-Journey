import UserCard from "./UserCard";

function UsersList() {
  const users = [
    { name: "Estif", age: 17, city: "Markos", job: "Frontend Developer" },
    { name: "Alice", age: 19, city: "Paris", job: "Backend Developer" },
    { name: "Jhon", age: 40, city: "New-York", job: "Full-stack Developer" }
  ];

  return (
    <div className="users-container">
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} city={user.city} job={user.job} />
      ))}
    </div>
  );
}

export default UsersList;