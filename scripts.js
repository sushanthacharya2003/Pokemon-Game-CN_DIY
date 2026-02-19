let p1Score = 0;
let p2Score = 0;
let fightCount = 0;

const fightBtn = document.getElementById("fight");
const replayBtn = document.getElementById("replay");

const welcomeBox = document.getElementById("welcomeBox");
const victoryMsg = document.getElementById("victoryMessage");

// Player 1 elements
const p1Name = document.getElementById("p1_name");
const p1ScoreSpan = document.getElementById("p1_score");
const p1Img = document.querySelector("#player1 #img");
const p1PokemonName = document.querySelector("#player1 #name");
const p1Exp = document.querySelector("#player1 #experience");
const p1Abilities = document.querySelector("#player1 #abilities");

// Player 2 elements
const p2Name = document.getElementById("p2_name");
const p2ScoreSpan = document.getElementById("p2_score");
const p2Img = document.querySelector("#player2 #img");
const p2PokemonName = document.querySelector("#player2 #name");
const p2Exp = document.querySelector("#player2 #experience");
const p2Abilities = document.querySelector("#player2 #abilities");

// ✅ Fetch list of Pokémon (first 200)
// function getPokemonList() {
//   return fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
//     .then(res => {
//       if (!res.ok) throw new Error("Failed to load Pokémon list");
//       return res.json();
//     })
//     .then(data => data.results);
// }

// fetching using async and await

async function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
  const data = await response.json();
  return data.results;  // this is the actual list of pokemon
}


// function getRandomPokemon(list) {
//   const randomIndex = Math.floor(Math.random() * list.length);
//   return fetch(list[randomIndex].url).then(res => res.json());
// }

// ✅ Fetch one random Pokémon from list
async function getRandomPokemon(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  const response= await fetch(list[randomIndex].url);
  return response.json();
}

// ✅ Display Pokémon card
function displayPokemon(player, poke) {
  player.img.innerHTML = `<img src="${poke.sprites.front_default}" width="120">`;
  player.name.textContent = poke.name.toUpperCase();
  player.exp.textContent = `XP: ${poke.base_experience}`;

  player.abilities.innerHTML = "Abilities:";
  poke.abilities.forEach(ab => {
    let li = document.createElement("li");
    li.textContent = ab.ability.name;
    player.abilities.appendChild(li);
  });



}

// ✅ Check winner after 10 fights
function checkFinalWinner() {
  if (fightCount < 10) return;

  fightBtn.style.display = "none";
  replayBtn.style.display = "inline-block";

  if (p1Score > p2Score) {
    victoryMsg.textContent = `🎉 Player 1 Wins the Game! FINAL SCORE: ${p1Score} - ${p2Score}`;
  } else if (p2Score > p1Score) {
    victoryMsg.textContent = `🔥 Player 2 Wins the Game! FINAL SCORE: ${p2Score} - ${p1Score}`;
  } else {
    victoryMsg.textContent = `🤝 It's a Draw! FINAL SCORE: ${p1Score} - ${p2Score}`;
  }
}

// ✅ Main fight function
function fight() {
  welcomeBox.style.display = "none"; // Hide welcome message on first click

  getPokemonList()
    .then(list => Promise.all([
      getRandomPokemon(list),
      getRandomPokemon(list)
    ]))
    .then(([p1, p2]) => {

      displayPokemon(
        { img: p1Img, name: p1PokemonName, exp: p1Exp, abilities: p1Abilities },
        p1
      );

      displayPokemon(
        { img: p2Img, name: p2PokemonName, exp: p2Exp, abilities: p2Abilities },
        p2
      );

      p1Name.textContent = "Player 1";
      p2Name.textContent = "Player 2";

      if (p1.base_experience > p2.base_experience) p1Score++;
      else if (p2.base_experience > p1.base_experience) p2Score++;

      p1ScoreSpan.textContent = p1Score;
      p2ScoreSpan.textContent = p2Score;

      fightCount++;
      checkFinalWinner();
    })
    .catch(err => console.error(err));
}

// ✅ Replay function
function replayGame() {
  p1Score = 0;
  p2Score = 0;
  fightCount = 0;

  p1ScoreSpan.textContent = "0";
  p2ScoreSpan.textContent = "0";

  victoryMsg.textContent = "";
  welcomeBox.style.display = "block";

  fightBtn.style.display = "inline-block";
  replayBtn.style.display = "none";
}

fightBtn.addEventListener("click", fight);
replayBtn.addEventListener("click", replayGame);
