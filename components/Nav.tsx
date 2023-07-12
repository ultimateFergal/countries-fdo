import { useTheme } from "@/lib/theme";
import Link from "next/link";
import { Moon, Sun } from "react-feather";

const Nav = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleDarkMode = () => {
    localStorage.setItem("countriesDarkMode", (!isDarkMode).toString());
    toggleTheme();

    const key = localStorage.getItem("countriesDarkMode");
    document.documentElement.className = key === "true" ? "dark" : "";
  };

  return (
    <nav className="flex justify-between items-center w-full shadow border-b dark:border-0 h-16 dark:bg-dark-blue bg-very-light-gray text-very-dark-blue-2 dark:text-white">
      <Link href="/" className="px-5 flex items-center dark:hover:bg-very-dark-blue hover:bg-light-gray h-full">Where in the world?</Link>
      <button
        onClick={() => toggleDarkMode()}
        role="button"
        className="px-5 flex items-center dark:hover:bg-very-dark-blue hover:bg-light-gray h-full"
      >
        {isDarkMode ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>
    </nav>
  );
};

export default Nav;
