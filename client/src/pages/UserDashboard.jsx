import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import AddItems from "../components/AddItems";
import EditItem from "../components/EditItem";
import UserItems from "../components/UserItems";

import "../styles/dashboard.css";
import addSquare from "../assets/images/Plus_square.png";

export default function UserDashoard() {
  const items = useLoaderData();

  const [currentUrl, setCurrentUrl] = useState("");
  const [selectItem, setSelectItem] = useState({
    name: "",
    description: "",
    price: "",
    picture_1: "",
    picture_2: "",
    picture_3: "",
    picture_4: "",
    lastname: "",
    firstname: "",
  });
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => setCurrentUrl(document.URL), [setCurrentUrl]);

  const navigate = useNavigate();

  const reloadData = () => {
    navigate(0);
  };

  return (
    <>
      <section className="dashboard-header">
        <h2 className="dashboard-title">My Announcements</h2>
        <button
          className="add-button"
          type="button"
          onClick={() => setShowAdd(!showAdd)}
        >
          Add
          <img src={addSquare} alt="button to add an item" />
        </button>
      </section>
      <div className="separator" />
      <UserItems
        items={items}
        currentUrl={currentUrl}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        setShowEdit={setShowEdit}
        reloadData={reloadData}
      />
      <AddItems showAdd={showAdd} setShowAdd={setShowAdd} />
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
