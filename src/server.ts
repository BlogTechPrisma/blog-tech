import app from "./app";
import { handleErrorMiddleware } from "./middleware/handleerror.middleware";
// const PORT = process.env.PORT || 3001
app.use(handleErrorMiddleware);
app.listen(3000, () => {
  console.log("Servidor executando");
});
