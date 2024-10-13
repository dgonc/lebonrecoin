import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const items = useLoaderData();

  return (
    <>
      <h1>LebonRecoin</h1>
      <section className="items-online-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
