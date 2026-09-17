# MovieExplorer

A responsive React app for browsing, searching, and viewing details of movies/TV shows, built with the [TVMaze API](https://www.tvmaze.com/api).

## Live Demo

[Add your deployed link here after deploying to Vercel/Netlify]

## Features

- **Home page** — navbar, hero section, and footer
- **Movie listing page** — fetches shows from TVMaze and displays them in a responsive grid
- **Search** — live search by title using TVMaze's search endpoint
- **Movie details modal** — poster, rating, release date, genres, and summary in a popup
- **Responsive design** — mobile-first layout with a collapsible navbar menu

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Router
- [TVMaze API](https://www.tvmaze.com/api) for movie/show data
- Lucide React for icons

## API Endpoints Used

- `GET https://api.tvmaze.com/shows` — list all shows
- `GET https://api.tvmaze.com/search/shows?q=:query` — search shows by title

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
```
