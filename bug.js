const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Here's the bug: Sending a generic 404 without specifying the error
    res.status(404).send();
  }
  res.json(user);
});