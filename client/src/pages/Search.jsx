import { useLoaderData } from "react-router-dom";

import ItemCard from "../components/ItemCard";

export default function Search() {
  const searchedItem = useLoaderData();

  return (
    <>
      <div className="separator-home" />
      <section className="items-online-container">
        {searchedItem.map((item) => (
          <div key={item.id} className="item-card-container">
            <ItemCard item={item} />
          </div>
        ))}
      </section>
      <div className="separator" />
    </>
  );
}
