import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://api.github.com/users/rhythamtech"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json(); 
        setData(result); 
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchGithubData(); 
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub Profile</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <img
            src={data.avatar_url}
            alt="avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{data.name}</h2>
          <p>@{data.login}</p>
          <p>{data.bio}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          <p>Public Repos: {data.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;