import { AppLayout } from 'app/providers/layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { routerPaths } from 'shared/constants';
import { Forecast } from 'widgets/forecast/ui/Forecast';

import { Weather } from 'widgets/weather';

export const AppRouter = () => {
  const routes = createRoutesFromElements(
    <Route path={routerPaths.MAIN_PATH} element={<AppLayout />}>
      <Route index element={<Weather />} />
      <Route path={routerPaths.FORECAST_PATH} element={<Forecast />} />
    </Route>
  );

  const router = createBrowserRouter(routes, {});

  return <RouterProvider router={router} />;
};
