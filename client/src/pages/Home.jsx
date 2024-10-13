import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const items = useLoaderData();

  return (
    <>
      <h1 className="home-items-container">Home</h1>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  );
}
