import { useContext } from "react";
import { UsersContext } from "./UsersContext";

function Search() {
  const { search, setSearch, sortOrder, setSortOrder } = useContext(UsersContext);

  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="az">A–Z</option>
        <option value="za">Z–A</option>
      </select>
    </div>
  );
}

export default Search;