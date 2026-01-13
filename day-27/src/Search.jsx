import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function Search() {
  const { search, setSearch } = useContext(UsersContext);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;