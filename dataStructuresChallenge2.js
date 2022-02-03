// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

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

// 1 creating separate teams
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2); // checking to make sure it's good

// 2 using the rest syntax to separate the goalkeeper from the rest of the teams
const [gk0, ...fieldPlayers0] = players1;
const [gk1, ...fieldPlayers1] = players2;
console.log(gk0, fieldPlayers0); // checking my variables work

// 3 making a group with all the players by spreading the arrays into 1 array
const allPlayers = [...players1, ...players2];

console.log(allPlayers);

//4 adding the substituted players
const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

// 5 destructuring an object
const { team1, team2, x: draw } = game.odds;
console.log(team1, team2, draw);

// 6 using the rest in a function
//pretty sure there is a better way .

// const printGoals = (arrLength, ...arr) => {
//   return `${arr}` + ` ..${arrLength.length}`;
// };

// console.log(printGoals(game.scored, game.scored));

// this is the correct way to take the players out of the array
const printGoals = (...arr) => {
  return `${arr.length} were scored by ${arr}`;
};

console.log(printGoals(...game.scored));

// 7.
team1 < team2 || console.log(`Team 1 is more likely to win`);
