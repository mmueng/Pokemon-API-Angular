const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tasks_api_mean", { useNewUrlParser: true });

// const TaskSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     compleated: Boolean,
// }, { timestamps: true });

// const TaskApi = mongoose.model("TaskApi", TaskSchema);
const flash = require('express-flash');
app.use(flash());

app.get("/task", (req, res) => {
    tasks.index(req, res)
    // TaskApi.find()
    //     .then(d => res.json({ d }))
    //     .catch(err => res.json({ err }));
});



app.listen(8000, () => console.log("listening on port 8000"));