import React from "react";
import { useOutletContext } from "react-router-dom";

function UserID() {
  const { userID } = useOutletContext();
  console.log(userID);
  return (
    <div>
      <div className="bg-green-400 text-center pb-6">User ID: {userID}</div>
    </div>
  );
}

export default UserID;
