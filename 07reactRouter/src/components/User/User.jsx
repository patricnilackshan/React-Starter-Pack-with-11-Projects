import React from "react";
import { Outlet, useParams } from "react-router-dom";

function User() {
  const { userID } = useParams();
  return (
    <div>
      <div className="text-center font-semibold text-xl py-10 bg-green-400">
        Users {userID}
      </div>
      <Outlet context={{ userID }} />
    </div>
  );
}

export default User;
