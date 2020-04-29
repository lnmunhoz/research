import MeiliSearch from "meilisearch";
import express from "express";
import bodyParser from "body-parser";
import uuid from "uuid/v4";

const app = express();
app.use(bodyParser.json());

const search = new MeiliSearch({
  host: process.env.MEILISEARCH_URL!,
});

app.get("/data", async (req, res) => {
  const index = search.getIndex("books");
  const documents = await index.getDocuments();
  res.json(documents);
});

app.get("/drop", async (req, res) => {
  const index = search.getIndex("books");
  await index.deleteIndex();
  await search.createIndex({ uid: "books" });
  res.json({
    message: "deleted and created",
  });
});

app.post("/data", async (req, res) => {
  const document = req.body;
  const index = search.getIndex("books");

  const response = await index.addDocuments([
    {
      id: uuid(),
      ...document,
    },
  ]);
  return res.json({
    updatedId: response.updateId,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
