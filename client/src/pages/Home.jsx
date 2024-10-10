import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const items = useLoaderData();
  console.info(items);
  return (
    <>
      <h1>Home</h1>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  );
}
