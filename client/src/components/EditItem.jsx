import PropTypes from "prop-types";

import { useEffect, useState } from "react";

import { editItem } from "../services/request";

export default function EditItem({
  selectItem,
  showEdit,
  setShowEdit,
  reloadData,
}) {
  const [editValues, setEditValues] = useState(selectItem);

  useEffect(() => {
    setEditValues(selectItem);
  }, [selectItem]);

  const handleEditForm = (event) => {
    const { name, value } = event.target;
    const updateItem = { ...editValues, [name]: value };
    setEditValues(updateItem);
  };

  const editAction = async () => {
    try {
      await editItem(editValues);
    } catch (error) {
      console.error(error);
    }
  };

  if (!showEdit) {
    return null;
  }

  return (
    <div>
      <h2>Edit Item</h2>
      <section className="form-container">
        <div className="form-input">
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editValues.name}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-input">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={editValues.description}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-input">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={editValues.price}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_1">Picture 1</label>
          <input
            type="text"
            id="picture_1"
            name="picture_1"
            defaultValue={editValues.picture_1}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_2">Picture 2</label>
          <input
            type="text"
            id="picture_2"
            name="picture_2"
            defaultValue={editValues.picture_2}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_3">Picture 3</label>
          <input
            type="text"
            id="picture_3"
            name="picture_3"
            defaultValue={editValues.picture_3}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_4">Picture 4</label>
          <input
            type="text"
            id="picture_4"
            name="picture_4"
            defaultValue={editValues.picture_4}
            onChange={handleEditForm}
          />
        </div>
        <div className="form-button">
          <button
            type="submit"
            onClick={() => {
              editAction();
              reloadData();
            }}
          >
            Edit
          </button>
          <button type="button" onClick={() => setShowEdit(false)}>
            Close
          </button>
        </div>
      </section>
    </div>
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
  showEdit: PropTypes.bool.isRequired,
  setShowEdit: PropTypes.func.isRequired,
  reloadData: PropTypes.func.isRequired,
};
