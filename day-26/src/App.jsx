import Header from "./Header";
import Search from "./Search";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <UsersList />
      <UserDetails />
    </div>
  );
}

export default App;