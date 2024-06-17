import React from "react";
import useUser from "../context/User";

function Profile() {
  const { user } = useUser();
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-white p-4 transition duration-500 flex items-center justify-center h-32 w-full">
      {Object.keys(user).length
        ? `Logged in as ${user.username}`
        : `Not Logged in`}
    </div>
  );
}

export default Profile;
