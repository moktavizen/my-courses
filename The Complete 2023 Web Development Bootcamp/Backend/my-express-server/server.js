import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("email me at: moktavizzen@gmail.com");
});

app.get("/about", (req, res) => {
  res.send(
    "Tengen is a very tall, broad-shouldered, and muscular man with lightly-tanned skin and white hair. His hair is of an uneven length, the longest strands reaching his shoulders, and is styled with three more notable, shorter clumps arching up to fall as bangs between his eyes and on either side of his face. He has quite thin, maroon eyes that appear to slant inwards, each with one long eyelash flowing to the far side of his face. He is considered very attractive as noted by many women and even by Zenitsu; this has led him to use his looks as a tool for his missions whenever persuasion is necessary."
  );
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
