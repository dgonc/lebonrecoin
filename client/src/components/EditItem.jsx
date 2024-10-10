import PropTypes from "prop-types";

import { editItem } from "../services/request";

export default function EditItem({ selectItem }) {
  return (
    <>
      <h2>Edit Item</h2>
      <section className="form-container">
        <label htmlFor="name">Item Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={selectItem.name}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={selectItem.description}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          defaultValue={selectItem.price}
        />
        <label htmlFor="publication_date">Edit Date</label>
        <input
          type="date"
          id="publication_date"
          name="publication_date"
          defaultValue={
            !selectItem.publication_date
              ? ""
              : selectItem.publication_date.slice(0, 10)
          }
        />
        <label htmlFor="picture_1">Picture 1</label>
        <input
          type="text"
          id="picture_1"
          name="picture_1"
          defaultValue={selectItem.picture_1}
        />
        <label htmlFor="picture_2">Picture 2</label>
        <input
          type="text"
          id="picture_2"
          name="picture_2"
          defaultValue={selectItem.picture_2}
        />
        <label htmlFor="picture_3">Picture 3</label>
        <input
          type="text"
          id="picture_3"
          name="picture_3"
          defaultValue={selectItem.picture_3}
        />
        <label htmlFor="picture_4">Picture 4</label>
        <input
          type="text"
          id="picture_4"
          name="picture_4"
          defaultValue={selectItem.picture_4}
        />
        <button type="submit" onClick={editItem}>
          Edit
        </button>
      </section>
    </>
  );
}

EditItem.propTypes = {
  selectItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    publication_date: PropTypes.string,
    picture_1: PropTypes.string,
    picture_2: PropTypes.string,
    picture_3: PropTypes.string,
    picture_4: PropTypes.string,
  }).isRequired,
};
