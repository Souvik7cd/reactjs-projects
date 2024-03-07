import { useEffect, useState } from "react";
import "./SearchAutocomplete.css";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchListOfUsers = async () => {
      try {
        setLoading(true);
        const response = fetch(`https://dummyjson.com/users`);
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
  }, [])

  const handleSearchAutocomplete = (e) => {
    setTimeout(()=>{
      console.log(e.target.value);
      setSearchInput(e.target.value);
      
    }, 500);
  }

  return (
    <div className="search-autocomplete-container">
      <div className="autocomplete-container">
        <h2>Search Autocomplete</h2>
        <input
          className="auto-complete-input"
          name="search-users"
          type="text"
          placeholder={error ? "Please check your internet connection" : "Search users here..."}
          onChange={handleSearchAutocomplete}
          disabled={error}
        />

        {
          error && <div style={{paddingTop: "1rem", color: "red"}}>{error}</div> 
        }
      </div>
    </div>
  );
};

export default SearchAutocomplete;
