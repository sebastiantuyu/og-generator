import { registerRoutes } from "./routes";

const app = require('express')();
const util = require("util");

const {
  SHOW_ROUTES,
  PORT,
  BASE_PATH
} = process.env;
const port = PORT || 3003;

export const initApp = async () => {
  // Register routes
  registerRoutes(app, 'og/image');

  app.listen(port, () => {
    console.clear();
    console.log(
      `[server]: Server started in port: ${port}`
    )
  console.log(BASE_PATH)

    if(SHOW_ROUTES === 'true') {
      console.log(`Routes register: `, util.inspect(app._router.stack, {
        showHidden: false,
        depth: null,
        colors: true
      }))
    }
  });
};

