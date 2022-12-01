import express, { json, NextFunction, Request as ExRequest, Response as ExResponse, urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
import { RegisterRoutes } from "../dist/routes";
import "./digest/DigestController"
import "./digest/DigestFacade"

const app: express.Application = express();
const apiPort = 8081;

app.use(urlencoded({extended: true}))
app.use(json())

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
        swaggerUi.generateHTML(await import("../dist/swagger.json"))
    )
})

RegisterRoutes(app);

// Format error
app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next()
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));