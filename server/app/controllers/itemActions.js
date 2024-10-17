// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await tables.item.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const items = await tables.item.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (items == null) {
      res.sendStatus(404);
    } else {
      res.json(items);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const searchItem = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const items = await tables.item.readItem(req.params.search);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format

    if (items == null) {
      res.sendStatus(404);
    } else {
      res.json(items);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const item = { ...req.body, id: req.params.id };
  try {
    const result = await tables.item.update(item);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.item.create(item);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    await tables.item.delete(itemId);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  searchItem,
  edit,
  add,
  destroy,
};
