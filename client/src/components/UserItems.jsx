import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

export default function UserItems({ items }) {
  return (
    <>
      <h1>My Items Online</h1>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
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
};
