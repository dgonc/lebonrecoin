import { useLoaderData } from "react-router-dom";

import AddItems from "../components/AddItems";
import EditItem from "../components/EditItem";
import UserItems from "../components/UserItems";

import "../styles/dashboard.css";

export default function UserDashoard() {
  const items = useLoaderData();

  return (
    <>
      <h2 className="dashboard-title">My Announcements</h2>
      <div className="separator" />
      <UserItems items={items} />
      <AddItems />
      <EditItem />
      <div className="separator" />
    </>
  );
}
