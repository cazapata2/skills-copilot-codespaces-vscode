// Create web server for comment
// ---------------------------------

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Comment = require('../models/comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create', async (req, res) => {
    const { name, comment } = req.body;
    const newComment = new Comment({
        name,
        comment
    });
    await newComment.save();
    res.send(newComment);
});

app.get('/get', async (req, res) => {
    const comments = await Comment.find({});
    res.send(comments);
});

app.post('/delete', async (req, res) => {
    const { id } = req.body;
    await Comment.deleteOne({ _id: id });
    res.send('Delete successfully');
});

app.post('/update', async (req, res) => {
    const { id, name, comment } = req.body;
    await Comment.updateOne({ _id: id }, { name, comment });
    res.send('Update successfully');
});

module.exports = app;
