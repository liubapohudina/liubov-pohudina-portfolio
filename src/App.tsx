import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Loader } from './components/Loader/Loader';
import { AppLoader } from './components/AppLoader/AppLoader';
import { ScrollToHash } from './components/ScrollToHash/ScrollToHash';

const Home = lazy(() =>
  import('./page/Home/Home').then((module) => ({
    default: module.Home,
  })),
);

const ProjectDetails = lazy(() =>
  import('./page/ProjectDetails/ProjectDetails').then((module) => ({
    default: module.ProjectDetails,
  })),
);
const NotFound = lazy(() =>
  import('./page/NotFound/NotFound').then((module) => ({
    default: module.NotFound,
  })),
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <AppLoader>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppLoader>
    </BrowserRouter>
  );
}

export default App;
