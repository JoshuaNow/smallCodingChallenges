const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1 loop through array and print out who scored the goals

const playerScored = game.scored;

for (const [i, scored] of playerScored.entries()) {
  console.log(`Goal ${i + 1}, scored by  ${scored}`);
}

// 2 calculate the average odd of each possibility using a loop without destructuring
const avg = Object.values(game.odds);
console.log(avg);
let sum = 0;
for (const realAvg of avg) {
  sum += realAvg;
}
const teamOddAvg = sum / 3;
console.log(teamOddAvg);

// 3
// dont hard code this
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
//

const bayern = game.team1;
const dortmund = game.team2;

const odds2 = Object.entries(game.odds);
for (const [team, odd] of odds2) {
  const teamStr = team === "x" ? "draw" : `${game[team]}`;

  console.log(`Odd of Victory ${teamStr} : ${odd}`);
}
// I had everything except I forgot you can pass a string to an object using bracket notations
