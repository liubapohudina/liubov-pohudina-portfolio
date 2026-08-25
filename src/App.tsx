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

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <AppLoader>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </AppLoader>
    </BrowserRouter>
  );
}

export default App;
