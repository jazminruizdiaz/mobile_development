# react-native-course

## Description

This is a mobile app for searching and managing a movie wishlist, built with React Native and TypeScript. It allows users to explore movies by genre, view details (description, rating, duration, original language, genres, cast), manage a wishlist, check personal statistics, use quick actions, and see favorite genres. The app features dark/light theme support and modern navigation. It consumes the [TMDB API](https://developer.themoviedb.org).

## Demo

[Watch the demo video](https://drive.google.com/file/d/1_Y7ULOhOcdYihcnisn6O9wQy2nWyp-ow/view?usp=drive_link)

## Main Features

- Search movies and filter by genre
- Detail page with description, rating, duration, original language, and cast
- Wishlist: add/remove movies
- Wishlist statistics (e.g., count by wishlist movies)
- Quick actions and favorite genres list
- Dark/light theme support
- Intuitive navigation and modern UI (inspired by [this Figma design](https://www.figma.com/community/file/1126286295256197533/movies-mobile-app-home-light-dark))

## Requirements

- Node.js
- React Native CLI
- iOS/Android emulator or a physical device
- [TMDB account and API Key](https://developer.themoviedb.org)

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/fabriroman/react-native-course.git
cd react-native-course
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create a `.env` file in the root of the project with the following content:

```env
TMDB_ACCESS_TOKEN=your_tmdb_access_token
TMDB_API_KEY=your_tmdb_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3/
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

### 4. Run the project

#### Android

```bash
npm run android
```

#### iOS (macOS only)

```bash
npm run ios
```

#### Metro Bundler

```bash
npm start
```

## Technologies Used

- React Native
- TypeScript
- TMDB API
- React Navigation

## Project Structure

```
react-native-course/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   └── types/
├── .env
├── package.json
└── README.md
```

## Getting Your TMDB API Key

1. Go to https://www.themoviedb.org/
2. Create an account or sign in
3. Go to Settings > API
4. Request an API key
5. Copy your API Key and Access Token
6. Add them to your `.env` file

## Troubleshooting

**Metro bundler issues:**

```bash
npm start -- --reset-cache
```

**Dependencies problems:**

```bash
rm -rf node_modules
npm install
```

**iOS specific (macOS only):**

```bash
cd ios
pod install
cd ..
```

## License

This project is open source and available for educational purposes.
