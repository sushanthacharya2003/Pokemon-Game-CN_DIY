live preview - https://f593jv.csb.app/
DEMO VIDEO - https://shorturl.at/6ZYSO
## 🐉 Pokémon Battle Game (Promise-based)

A simple Pokémon battle game implemented using **vanilla JavaScript**, **fetch()**, and **Promises (no async/await)**.
Each battle randomly selects two Pokémon from the PokéAPI and compares their experience points to determine the winner.

---
screenshot -
<img width="310" height="389" alt="image" src="https://github.com/user-attachments/assets/8cbb1597-8409-4e5b-8cae-ab01cd590fee" />


## 🚀 Features

✅ Fetch Pokémon list from the PokéAPI
✅ Randomly select Pokémon for Player 1 and Player 2
✅ Display Pokémon image, name, XP, and abilities
✅ Compare experience points to determine the winner
✅ Auto-increment score for the winning player
✅ Built using **only Promises** and `Promise.all()`
✅ Clean and minimal UI ready for styling

---

## 🎮 How the Game Works

1. Click **Fight**
2. The game fetches two random Pokémon simultaneously using `Promise.all()`
3. Each Pokémon's details (image, name, XP, abilities) appear in the player card
4. The Pokémon with higher **base_experience** wins the round
5. Winner’s score increments
6. Repeat and enjoy the chaos

---

## 🧠 Technologies Used

* Vanilla JavaScript
* `fetch()` API
* Promises (`then()`, `catch()`, `Promise.all()`)
* PokéAPI ([https://pokeapi.co/](https://pokeapi.co/))
* Basic HTML/CSS

---

## 📦 Code Structure

```
index.html
script.js
```

* **index.html** → Contains UI with player cards
* **script.js** → Game logic, API calls, battle rules

---

## 🔗 API Used

PokéAPI:
`https://pokeapi.co/api/v2/pokemon`

Used for:

* Fetching Pokémon list
* Fetching individual Pokémon data
* Reading images, XP, abilities

---

## 🖼️ Preview

You can add screenshots or demo GIFs here later if you want.

---

## 🏆 Learning Outcomes

By building this project, you learn:

✅ How to use `fetch()` with Promises
✅ How `Promise.all()` handles concurrent API requests
✅ DOM manipulation
✅ Working with external REST APIs
✅ Promise chaining (`then()` sequencing)

---

## 📜 License

Free to use.
Feel free to modify the project as much as you want.

---

