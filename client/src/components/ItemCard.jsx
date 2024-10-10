import PropTypes from "prop-types";

export default function ItemCard({ item }) {
  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <div>{item.price} €</div>
      <img src={item.picture_1} alt="" />
      <section>
        <p>Vendeur</p>
        <h3>
          {item.lastname} {item.firstname}
        </h3>
      </section>
    </>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture_1: PropTypes.string,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
  }).isRequired,
};
