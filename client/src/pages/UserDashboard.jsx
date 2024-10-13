import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import AddItems from "../components/AddItems";
import EditItem from "../components/EditItem";
import UserItems from "../components/UserItems";

import "../styles/dashboard.css";

export default function UserDashoard() {
  const items = useLoaderData();

  const [currentUrl, setCurrentUrl] = useState("");
  const [selectItem, setSelectItem] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => setCurrentUrl(document.URL), [setCurrentUrl]);

  const navigate = useNavigate();

  const reloadData = () => {
    navigate(0);
  };

  return (
    <>
      <h2 className="dashboard-title">My Announcements</h2>
      <div className="separator" />
      <UserItems
        items={items}
        currentUrl={currentUrl}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        setShowEdit={setShowEdit}
        reloadData={reloadData}
      />
      <AddItems />
      <EditItem
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        reloadData={reloadData}
      />
      <div className="separator" />
    </>
  );
}
