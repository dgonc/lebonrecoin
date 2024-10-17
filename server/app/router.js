const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const itemActions = require("./controllers/itemActions");
const userActions = require("./controllers/userActions");

// Route to get a list of items
router.get("/", itemActions.browse);
router.get("/user", userActions.browse);

// Route to get a specific item by ID
router.get("/:id", itemActions.read);
router.get("/items/:search", itemActions.searchItem);

// Route to add a new item
router.post("/", itemActions.add);

// Route to edit an item
router.put("/:id", itemActions.edit);

// Route to delete an item
router.delete("/:id", itemActions.destroy);

/* ************************************************************************* */

module.exports = router;
