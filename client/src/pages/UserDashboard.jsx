import AddItems from "../components/AddItems";

import "../styles/dashboard.css";

export default function UserDashoard() {
  return (
    <>
      <h2 className="dashboard-title">My Announcements</h2>
      <div className="separator" />
      <AddItems />
      <div className="separator" />
    </>
  );
}
