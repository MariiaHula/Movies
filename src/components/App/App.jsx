import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('pages/Home/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
const Layout = lazy(() => import('components/Layout/Layout'));
const Movies = lazy(() => import('pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
