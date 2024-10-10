import axios from "axios";

export function getItems() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export async function addItems({ request }) {
  try {
    const formData = await request.formData();
    const item = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      publication_date: formData.get("publication_date"),
      picture_1: formData.get("picture_1"),
      picture_2: formData.get("picture_2"),
      picture_3: formData.get("picture_3"),
      picture_4: formData.get("picture_4"),
      user_id: formData.get("user_id"),
    };

    const createdItem = await axios
      .post(`${import.meta.env.VITE_API_URL}/api/`, item)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
      });

    if (createdItem.status === 201) {
      return createdItem;
    }
    return null;
  } catch (error) {
    console.error(error);
  }
  return null;
}
