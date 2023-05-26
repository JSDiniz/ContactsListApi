import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  const PORT = process.env.PORT || 3000;

  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(PORT, () => console.log("Servidor executando"));
})();