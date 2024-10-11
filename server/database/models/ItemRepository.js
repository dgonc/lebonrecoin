const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "item" });
  }

  // The C of CRUD - Create operation

  async create(item) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO
    ${this.table} (name, description, price, publication_date, picture_1, picture_2, picture_3, picture_4, user_id) VALUES (?, ?,?, ?, ?, ?, ?,?,?)`,
      [
        item.name,
        item.description,
        item.price,
        item.publication_date,
        item.picture_1,
        item.picture_2,
        item.picture_3,
        item.picture_4,
        item.user_id,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT item.id, item.name, item.description, item.price, item.publication_date, item.picture_1, item.picture_2, item.picture_3, item.picture_4, user.lastname, user.firstname
FROM ${this.table}
    INNER JOIN user ON user_id = user.id
WHERE
    user_id = ?;`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database
      .query(`SELECT item.id, item.name, item.description, item.price, item.picture_1, item.picture_2, item.picture_3, item.picture_4, item.publication_date, user.lastname, user.firstname, user.city, user.phone, user.email
FROM ${this.table}
    INNER JOIN user ON user_id = user.id`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation

  async update(item) {
    const [result] = await this.database.query(
      `UPDATE ${this.table}
      SET
          name = ?,
          description = ?,
          price = ?,
          publication_date = ?,
          picture_1 = ?,
          picture_2 = ?,
          picture_3 = ?,
          picture_4 = ?
      WHERE
          id = ?;`,
      [
        item.name,
        item.description,
        item.price,
        item.publication_date,
        item.picture_1,
        item.picture_2,
        item.picture_3,
        item.picture_4,
        item.id,
      ]
    );

    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?;`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = ItemRepository;
