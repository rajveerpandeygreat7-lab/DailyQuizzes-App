const leaderboard = [
  { name: "You", score: 72 },
  { name: "Student A", score: 65 },
  { name: "Student B", score: 80 },
  { name: "Student C", score: 50 },
  { name: "Student D", score: 90 }
];

function loadLeaderboard() {
  const tbody = document.getElementById("leaderboard-body");
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.name}</td>
      <td>${player.score}</td>
    `;
    tbody.appendChild(row);
  });
}

window.onload = loadLeaderboard;
