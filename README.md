# Little Lemon Restaurant App

A complete React Native + Expo mobile app for the Little Lemon restaurant concept. The app includes onboarding, home menu browsing, category and search filtering, profile editing with persistence, and logout navigation flow.

## Features

- Onboarding flow with validation for first name, last name and email
- Persistent storage using AsyncStorage
- Home screen with hero section, search, category filtering, and menu list
- Profile screen with editable user details and save functionality
- Logout confirmation flow that clears local profile data
- Responsive mobile-first styling consistent with the Little Lemon design palette

## Project Structure

- `App.js` — app bootstrap and startup state logic
- `screens/Onboarding.js` — onboarding form and validation
- `screens/Home.js` — main menu screen
- `screens/Profile.js` — editable profile screen
- `components/Header.js` — app header with brand and profile button
- `components/Hero.js` — hero section with search input
- `components/CategoryFilter.js` — category filters
- `components/MenuItem.js` — menu item card
- `navigation/AppNavigator.js` — native stack navigation setup
- `data/menuData.js` — menu data
- `assets/` — app images and generated brand assets
- `wireframe/` — wireframe design specification image

## Requirements

- Node.js 18+
- npm
- Expo CLI
- Android Studio or Expo Go (for device testing)

## Installation

```bash
npm install
```

## Run locally

```bash
npm start
```

Then choose one of the following:

- `a` for Android emulator
- `i` for iOS simulator
- `w` for web preview

## Deploy to GitHub Pages

This repository is configured to publish the Expo web build automatically when changes are pushed to `main`.

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push changes to `main`, or run the **Deploy Expo web to GitHub Pages** workflow from the Actions tab.
3. After the workflow succeeds, the web app will be available at:
   `https://sudharshank9390-art.github.io/FOODAPP/`

To build the web export locally:

```bash
npm run build:web
```

## Git commands

```bash
git init
git add .
git commit -m "Initial commit: Little Lemon restaurant app"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

## Wireframe

A wireframe specification image is provided at `wireframe/wireframe-little-lemon.jpg`.

## Notes

This app stores user onboarding/profile information locally in AsyncStorage so the app can restore the right screen after restart.
