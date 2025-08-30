# Mosaic Generator

Mosaic Generator is a tiny experiment that repurposes a password generator into a visual randomizer. Rather than characters, it picks image tiles and lays them out in a grid to create a weird late-80s look.

I aimed for the simplest, beginner-friendly code: a gallery grid, a small image catalog, and a loop to populate cells.  
Future idea: create a token (or seed) so users can regenerate or save their pattern. ChatGPT helped me reason through the grid display and the loop that strings images together.

## Live Demo
👉 [View on GitHub Pages]https://coco-la-guera.github.io/mosaic-password/
## How it works
- Uses a **CSS Grid gallery**: 512 px wide, `height: auto`
- Each tile is **64×64 px**, filling an 8-tile row
- A simple **image catalog** (array of objects) holds tile sources
- A `for` loop picks random tiles and fills the grid row
- Clicking **Generate Randomness** refreshes the pattern

## Why
I wanted to turn a password generator into a **visual randomizer**, creating a weird late-80s design feel. The code is kept simple and beginner-friendly: one grid, one loop.

## Roadmap
- Generate a **token/seed** so users can save or share their pattern
- Add “Regenerate” / “Copy link” buttons
- Explore additional tile sets for different themes

## Tech
HTML • CSS • JavaScript

## Credits
ChatGPT helped me figure out the gallery grid and the loop to string images instead of characters.
