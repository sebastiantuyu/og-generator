import { renderCanvas } from "../../../engine";
const router = require("express").Router();

router.get("/generate", async (req: any, res: any) => {
  let body = "";
  try {
    body = JSON.parse(
      JSON.stringify(req.query)
    ).title.replace(/\\\\/g, '\\').split(/\r?\n|\r/g)[0];
  } catch { }

  const opImage = await renderCanvas(1200, 630, body ?? '');
  res.end(opImage);
})



export const engineRoutes = router;
