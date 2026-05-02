
 # Simon Game 🎮

A web-based version of the classic electronic memory game. The game creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex.


## 🚀 How to Play
1. **Start the Game:** Press enter key on your keyboard to begin.
2. **Watch the Pattern:** The game will highlight a button and play a sound.
3. **Repeat:** Click the buttons in the exact same order.
4. **Level Up:** Each time you get the sequence right, the game adds one more step to the pattern.
5. **Game Over:** If you click the wrong button, the game ends. Press any key to restart!

## 🛠️ Built With
*   **HTML5** - For the structure of the game board.
*   **CSS3** - For the "Simon" styling, button layouts, and press animations.
*   **JavaScript - For game logic, sequence generation, and event handling.

## 🧠 Logic Highlights
This project demonstrates several key programming concepts:
*   **State Management:** Keeping track of the game pattern vs. the user pattern.
*   **DOM Manipulation:** Dynamically updating the `h1` title and applying CSS classes for animations.
*   **Event Listeners:** Capturing user clicks and keyboard presses.
*   **Asynchronous Logic:** Using timeouts to create delays between the game's sequence and the user's turn.

## 📂 Project Structure
```text
.
├── index.html       # The main game page
├── simon.css       # Custom styling and animations
├── simon.js          # The core JavaScript logic
└── resources/          # Audio files for each button (Green, Red, Yellow, Blue, Wrong)
