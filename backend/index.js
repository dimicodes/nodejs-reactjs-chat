const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users",
        {username: username, secret: username, first_name: username},
        {headers: {"PRIVATE-KEY": "b08b7c83-718f-4c9d-8db9-d178173a8571"}}
    );
    return res.status(r.status).json(r.data);

  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});



app.listen(3001);