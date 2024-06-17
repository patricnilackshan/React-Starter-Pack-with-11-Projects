import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { UserProvider } from "./context/User";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
    // Check if system prefers dark mode
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDarkMode) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  const [user, setUser] = useState({});
  const [dark, setDark] = useState();

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(dark ? "dark" : "light");
  }, [dark]);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="bg-gray-50 dark:bg-gray-900 h-screen transition duration-500 flex flex-col items-center justify-center">
        <header className="fixed top-0 w-full flex items-center justify-between px-10 h-16 bg-blue-400 text-black dark:text-white shadow-md">
          <span className="font-bold text-3xl">Greetings!</span>
          <div className="flex items-center space-x-2">
            <span className="text-xl">{dark ? "🌚" : "☀️"}</span>
            <input
              className="w-7 h-7"
              type="checkbox"
              checked={dark}
              onChange={(e) => {
                setDark(e.target.checked);
              }}
            />
          </div>
        </header>
        <div className="flex flex-col items-center w-full space-y-8 mt-24">
          <Login />
          <Profile />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
