import { FaSearch } from "react-icons/fa";
import "./GitHubProfileFinder.css";
import { useState } from "react";

const GitHubProfileFinder = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState();

  const fetchGithubProfileData = async (username) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw Error("No users found with the username: " + username);
      }
      const jsonData = await response.json();
      setUserData(jsonData);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="github-container bg-github">
      <div className="result-container">
        <h1>Github User Search</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setError()
            fetchGithubProfileData(searchText.trim());
            setSearchText("");
          }}
          className="search-form"
        >
          <input
            type="text"
            name="search-input"
            id="search-input"
            value={searchText}
            placeholder="Search by github username..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button disabled={searchText.trim()===""} className="search-btn">
            <FaSearch />
          </button>
        </form>
        {error && !isLoading && <div className="error">{error}</div>}
        {isLoading && <div className="searching"> Searching... </div>}
        {!error && !isLoading && userData && (
          <div className="card">
            <div className="profile-img-container">
              <img
                className="profile-img"
                src={userData.avatar_url}
                alt={userData.avatar_url}
              />
            </div>
            <p>
              <a href={userData.html_url}>{userData.login}</a>
            </p>
            <table className="user-info">
              <tbody>
              <tr>
                <td className="key">User joined on: </td>
                <td className="value">{userData.created_at.substring(0, 10)}</td>
              </tr>
              <tr>
                <td className="key">Public repos: </td>
                <td className="value">{userData.public_repos}</td>
              </tr>
              <tr>
                <td className="key">Followers: </td>
                <td className="value">{userData.followers}</td>
              </tr>
              <tr>
                <td className="key">Following: </td>
                <td className="value">{userData.following}</td>
              </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
