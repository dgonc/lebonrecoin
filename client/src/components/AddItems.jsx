import PropTypes from "prop-types";

import { Form, useParams } from "react-router-dom";
// import { notifySuccess, notifyError } from "../services/utils";

export default function AddItems({ showAdd, setShowAdd }) {
  // if (status === 201) {
  //   notifySuccess();
  // } else {
  //   notifyError();
  // }
  const userId = useParams().id;

  if (!showAdd) {
    return null;
  }

  return (
    <Form method="post">
      <section className="form-container">
        <div className="form-input">
          <label htmlFor="name">Item Name</label>
          <input type="text" id="name" className="add-input" name="name" />
        </div>
        <div className="form-input">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="add-input"
            name="description"
          />
        </div>
        <div className="form-input">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" className="add-input" name="price" />
        </div>
        <div className="form-input">
          <label htmlFor="publication_date">Publication Date</label>
          <input
            type="date"
            id="publication_date"
            className="add-input"
            name="publication_date"
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_1">Picture 1</label>
          <input
            type="text"
            id="picture_1"
            className="add-input"
            name="picture_1"
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_2">Picture 2</label>
          <input
            type="text"
            id="picture_2"
            className="add-input"
            name="picture_2"
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_3">Picture 3</label>
          <input
            type="text"
            id="picture_3"
            className="add-input"
            name="picture_3"
          />
        </div>
        <div className="form-input">
          <label htmlFor="picture_4">Picture 4</label>
          <input
            type="text"
            id="picture_4"
            className="add-input"
            name="picture_4"
          />
        </div>
        <input
          type="text"
          id="user_id"
          name="user_id"
          hidden
          defaultValue={userId}
        />
        <div className="form-button">
          <button type="submit">Share</button>
          <button type="button" onClick={() => setShowAdd(!showAdd)}>
            Close
          </button>
        </div>
      </section>
    </Form>
  );
}

AddItems.propTypes = {
  showAdd: PropTypes.bool.isRequired,
  setShowAdd: PropTypes.func.isRequired,
};
