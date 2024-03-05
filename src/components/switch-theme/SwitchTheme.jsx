import "./SwitchTheme.css";
import useLocalStorage from "./useLocalStorage";

const SwitchTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="wrapper theme-bg" data-theme={theme}>
      <h1 style={{ fontWeight: "lighter", margin: "0" }}>Hello World!</h1>
      <p>How are you?</p>
      <button
        className={`theme-btn ${
          theme === "light" ? "theme-btn-dark" : "theme-btn-light"
        }`}
        onClick={toggleTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default SwitchTheme;
