const express = require("express");

const app = express();

app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  const { nom, prenom, email } = req.body;

  if (!nom || !prenom || !email) {
    return res.status(400).json({
      success: false,
      message: "Tous les champs sont obligatoires"
    });
  }

  const newUser = {
    id: users.length + 1,
    nom,
    prenom,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "Utilisateur créé avec succès",
    user: newUser
  });
});

app.listen(3000, () => {
  console.log(`serveur en marche`);
});
