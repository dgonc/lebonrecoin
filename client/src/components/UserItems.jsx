import PropTypes from "prop-types";
import { useState } from "react";

import ItemCard from "./ItemCard";

import "../styles/userItems.css";
import { deleteItem } from "../services/request";
import DeleteModal from "./DeleteModal";

export default function UserItems({
  items,
  currentUrl,
  selectItem,
  setSelectItem,
  setShowEdit,
  reloadData,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSelectItem = (currentItem) => {
    setSelectItem(currentItem);
  };

  const deleteAction = async () => {
    try {
      await deleteItem(selectItem);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>My Items Online</h3>
      <div className="items-online-container">
        {items.map((item) => (
          <div key={item.id}>
            <ItemCard
              item={item}
              currentUrl={currentUrl}
              setSelectItem={setSelectItem}
            />
            <div>
              <button
                type="button"
                onClick={() => {
                  handleSelectItem(item);
                  setShowEdit(true);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSelectItem(item);
                  setShowDeleteModal(!showDeleteModal);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {showDeleteModal ? (
          <DeleteModal
            deleteAction={deleteAction}
            setShowDeleteModal={setShowDeleteModal}
            reloadData={reloadData}
          />
        ) : null}
      </div>
    </>
  );
}

UserItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      picture_1: PropTypes.string,
      lastname: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentUrl: PropTypes.string.isRequired,
  setSelectItem: PropTypes.func.isRequired,
  selectItem: PropTypes.arrayOf.isRequired,
  setShowEdit: PropTypes.func.isRequired,
  reloadData: PropTypes.func.isRequired,
};
