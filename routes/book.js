const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
    res.send("Get all books called")
})

router.get("/:id", (req, res, next) => {
    res.send("get book by id called")
})

router.post("/", (req, res, next) => {
    res.send("create book called")
})

router.put("/:id", (req, res, next) => {
    res.send("update book called")
})

router.delete("/:id", (req, res, next) => {
    res.send("delete book called")
})

module.exports = router