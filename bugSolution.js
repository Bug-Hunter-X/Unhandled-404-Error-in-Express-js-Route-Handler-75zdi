const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(parseInt(userId))){
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Improved error handling: Sending a JSON response with error details
    return res.status(404).json({ error: `User with ID ${userId} not found` });
  }
  res.json(user);
});