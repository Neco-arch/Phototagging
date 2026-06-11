import axios from "axios";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaderboard, saveleaderboard] = useState([]);

  const getleaderboard = async () => {
    const result = await axios.get("http://localhost:3000/leaderboard");
    const sorted = [...result.data].sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
    saveleaderboard(sorted);
  };

  useEffect(() => {
    getleaderboard();
  }, []);

  return (
    <div>
        <h1>Hall of fame</h1>
      {leaderboard.map((value, index) => (
        <div key={index}>
          <h2>{index + 1} . {value.username} : {value.time}</h2>
        </div>
      ))}
    </div>
  );
}