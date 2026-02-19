import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import Layout from './components/layout/Layout';
import Overview from './pages/Overview';
import SolarHeating from './pages/SolarHeating';
import SolarCells from './pages/SolarCells';
import Hydropower from './pages/Hydropower';
import WindPower from './pages/WindPower';
import Geothermal from './pages/Geothermal';
import Biomass from './pages/Biomass';
import Biofuels from './pages/Biofuels';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Overview,
});

const solarHeatingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solar-heating',
  component: SolarHeating,
});

const solarCellsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solar-cells',
  component: SolarCells,
});

const hydropowerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hydropower',
  component: Hydropower,
});

const windPowerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wind-power',
  component: WindPower,
});

const geothermalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/geothermal',
  component: Geothermal,
});

const biomassRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/biomass',
  component: Biomass,
});

const biofuelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/biofuels',
  component: Biofuels,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz',
  component: Quiz,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  solarHeatingRoute,
  solarCellsRoute,
  hydropowerRoute,
  windPowerRoute,
  geothermalRoute,
  biomassRoute,
  biofuelsRoute,
  contactRoute,
  quizRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
