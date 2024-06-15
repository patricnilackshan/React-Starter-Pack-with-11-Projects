import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data.login}
      <img src={data.avatar_url} width={300} alt={data.login} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/patricnilackshan");
  return response.json();
};
