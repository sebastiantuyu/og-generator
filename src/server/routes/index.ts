import { engineRoutes } from "./engine";
import { healthCheckRoutes } from "./health-check";

export function registerRoutes(app: any, BASE_PATH = 'api') {
  [
    engineRoutes
  ].forEach((r) => {
    app.use(`/${BASE_PATH}`, r);
  })

  console.log(BASE_PATH)

  // Root routes for health-checks
  app.use(healthCheckRoutes);
}
