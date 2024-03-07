import { useEffect, useState } from "react";
import "./SearchAutocomplete.css";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchListOfUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw Error("Network Error: Couldn't fetch the user list");
        }
        const jsonData = await response.json();
        setUsers(jsonData.users);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchListOfUsers();
  }, []);

  const handleSearchAutocomplete = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.trim().toLowerCase() === "") {
      setFilteredUsers([]);
    } else {
      setTimeout(() => {
        const query = e.target.value.trim().toLowerCase();
        if (query !== "") {
          const filtered = users.filter((user) => {
            if (user.firstName.toLowerCase().includes(query)) {
              return user;
            }
          });
          setFilteredUsers(filtered);
        }
      }, 500);
    }
  };

  const handleListClick = (firstName) => {
    setSearchText(firstName);
    setFilteredUsers([]);
  };

  return (
    <div className="search-autocomplete-container">
      <div className="autocomplete-container">
        <h2>Search Autocomplete</h2>
        <input
          className="auto-complete-input"
          name="search-users"
          type="text"
          value={searchText}
          placeholder={
            error
              ? "Please check your internet connection"
              : "Search user by first name here..."
          }
          onChange={handleSearchAutocomplete}
          disabled={error}
        />
        <div className="suggestions">
          {filteredUsers && filteredUsers.length > 0 && (
            <ul className="dropdown">
              {filteredUsers.map((user) => (
                <li
                  key={user.id}
                  onClick={() => handleListClick(user.firstName)}
                >
                  {user.firstName}
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && (
          <div style={{ paddingTop: "1rem", color: "red" }}>{error}</div>
        )}
        {loading && (
          <div style={{ paddingTop: "1rem" }}>Loading user data...</div>
        )}
      </div>
    </div>
  );
};

export default SearchAutocomplete;
