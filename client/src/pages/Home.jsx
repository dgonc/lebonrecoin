import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const items = useLoaderData();

  console.info("depuis Home", items);

  return (
    <>
      <div className="separator-home" />
      <section className="items-online-container">
        {items.map((item) => (
          <div key={item.id} className="item-card-container">
            <ItemCard item={item} />
          </div>
        ))}
      </section>
      <div className="separator" />
    </>
  );
}
