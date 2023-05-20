require('dotenv').config();
require("./db/mongoose");

const express = require('express');
const app = express();
const bcrypt = require("bcrypt");

const Users = require("./model/users");

// CRUD operation for user table

// GET all the users from user collection 
app.get('/api/user', async (req, res) => {
    try {
        let users = await Users.find(req.query);
        res.status(500).send({
            msg: "User details",
            users
        })
    } catch(e) {
        res.status(500).send({
            msg: "Unable to get users",
            error: e
        })
    }
})


// GET a single users from user collection 
app.get('/api/user/:id', async (req, res) => {
    try {
        let users = await Users.findById(req.params.id);
        res.status(500).send({
            msg: "User details",
            users
        })
    } catch(e) {
        res.status(500).send({
            msg: "Unable to get users",
            error: e
        })
    }
})

// Create a single user
app.post("/api/user", async (req, res) => {
    try {
        var user = new Users(req.body);
        await user.save();
        res.status(201).send({
            msg: "User saved sucessfully",
            user
        })
    } catch(e) {
        res.status(201).send({
            msg: "Unable to save user",
            error: e
        })
    }
})

// Update a single user
app.put("/api/user/:id", async (req, res) => {
    try {
        let user = await Users.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({
            msg: "Users updated successfully",
            user
        })
    } catch(e) {
        res.status(500).send({
            msg: "Unable to update the user",
            error: e
        })
    }
})

// Delete a single user
app.delete("/api/user/:id", async (req, res) => {
    try {
        let user = await Users.findByIdAndDelete(req.params.id);
        res.status(200).send({
            msg: "User deleted sucessfully",
            user
        })
    } catch(e) {
        res.status(500).send({
            msg: "Unable to delete the user",
            error: e
        })
    }
})

// User login
app.post("/api/login", async (req, res) => {
    try {
        var user = await Users.findOne({
            email: req.body.email
        })
        
        if (!user) {
            res.status(400).send({
                msg: "Invalid Credentials"
            })
            return;
        }
        var isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            res.status(400).send({
                msg: "Invalid Credentials"
            })
            return;
        }

        var token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "1h"});
        await user.save();

        res.status(200).send({
            msg: "Login Successfully",
            token
        });
    } catch (e) {
        res.status(500).send({
            msg: "Unable to Login"
        });
    }
})

// User Logout
app.get("/api/logout/:id", async (req, res) => {
    try {
        await Users.findByIdAndUpdate(req.params.id, {
            token: ""
        });
        res.status(200).send({
            msg: "Logout successfully"
        })
    } catch(e) {
        res.status(500).send({
            msg: "Unable to logout",
            error: e
        })
    }
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server up on port 3000");
})