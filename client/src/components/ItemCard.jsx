import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function ItemCard({ item, currentUrl }) {
  const currentId = useParams();

  return (
    <section className="item-card">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <div>{item.price} €</div>
      <img src={item.picture_1} alt="" />
      {currentUrl === `http://localhost:3000/user/${currentId.id}` ? (
        ""
      ) : (
        <div>
          <p>Vendeur</p>
          <h3>
            {item.lastname} {item.firstname}
          </h3>
        </div>
      )}
    </section>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    picture_1: PropTypes.string,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
  }).isRequired,
  currentUrl: PropTypes.string.isRequired,
};
