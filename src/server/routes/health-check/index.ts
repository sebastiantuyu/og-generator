import { renderCanvas } from "../../../engine";

const router = require("express").Router();

router.get("/", async (req: any, res: any) => {
  res.status(200).json({
    message: "ok",
    timeup: process.uptime()
  })
})



export const healthCheckRoutes = router;
