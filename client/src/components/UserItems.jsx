import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

import "../styles/userItems.css";

export default function UserItems({ items, currentUrl, setSelectItem }) {
  const handleSelectItem = (currentItem) => {
    setSelectItem(currentItem);
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
              <button type="button" onClick={() => handleSelectItem(item)}>
                Edit
              </button>
              <button type="button">Delete</button>
            </div>
          </div>
        ))}
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
};
