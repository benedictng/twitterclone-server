const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

const db = require('./models');

//Routers
const postRouter = require('./routes/posts')
app.use("/posts", postRouter);
const commentsRouter = require('./routes/comments')
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/users");
app.use("/auth", usersRouter);
const likesRouter = require("./routes/likes");
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server running on port 3001")
    })
})
.catch((err) => {
    console.log(err)
});



