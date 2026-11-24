# IRONHOLD — The Last Bastion

Public runtime build for [IRONHOLD](https://nomoshkar.github.io/island-tower-defense-web/).

This repository contains only the deployable web runtime. Source, tests, development tooling, and validation reports are maintained separately in the private project repository.

## Play

Open the GitHub Pages URL on a desktop browser, tablet, or phone. The game supports keyboard/mouse and touch controls, adaptive quality, and offline play after the first successful visit.

## Controls

- **Move:** click/tap the ground, WASD/arrows, or the touch joystick.
- **Build:** choose a tower, then tap a glowing pad or use Build.
- **Abilities:** Space / Nova and G / Rally.
- **Speed:** F or the speed button.
- **Pause:** Esc / P or the pause button.
- **Zoom:** mouse wheel or pinch.

## Deployment

GitHub Pages serves this repository from `main` / root. Runtime assets use relative paths and are content-hashed; the service worker manages offline caching and updates.
