import { Form, useParams } from "react-router-dom";
// import { notifySuccess, notifyError } from "../services/utils";

export default function AddItems() {
  // if (status === 201) {
  //   notifySuccess();
  // } else {
  //   notifyError();
  // }
  const userId = useParams().id;

  return (
    <Form method="post">
      <section className="form-container">
        <label htmlFor="name">Item Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" />
        <label htmlFor="publication_date">Publication Date</label>
        <input type="date" id="publication_date" name="publication_date" />
        <label htmlFor="picture_1">Picture 1</label>
        <input type="text" id="picture_1" name="picture_1" />
        <label htmlFor="picture_2">Picture 2</label>
        <input type="text" id="picture_2" name="picture_2" />
        <label htmlFor="picture_3">Picture 3</label>
        <input type="text" id="picture_3" name="picture_3" />
        <label htmlFor="picture_4">Picture 4</label>
        <input type="text" id="picture_4" name="picture_4" />
        {/* <label htmlFor="user_id">User</label> */}
        <input
          type="text"
          id="user_id"
          name="user_id"
          hidden
          defaultValue={userId}
        />
        <button type="submit">Share</button>
      </section>
    </Form>
  );
}
