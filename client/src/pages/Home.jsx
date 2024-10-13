import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const items = useLoaderData();

  console.info("depuis Home", items);

  return (
    <>
      <h1 className="title">LebonRecoin</h1>
      <section className="items-online-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
