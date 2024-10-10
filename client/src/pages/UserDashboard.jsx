import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

import AddItems from "../components/AddItems";
import EditItem from "../components/EditItem";
import UserItems from "../components/UserItems";

import "../styles/dashboard.css";

export default function UserDashoard() {
  const items = useLoaderData();

  const [currentUrl, setCurrentUrl] = useState("");
  const [selectItem, setSelectItem] = useState([]);

  useEffect(() => setCurrentUrl(document.URL), [setCurrentUrl]);

  return (
    <>
      <h2 className="dashboard-title">My Announcements</h2>
      <div className="separator" />
      <UserItems
        items={items}
        currentUrl={currentUrl}
        setSelectItem={setSelectItem}
      />
      <AddItems />
      <EditItem selectItem={selectItem} />
      <div className="separator" />
    </>
  );
}
