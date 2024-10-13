import PropTypes from "prop-types";

export default function DeleteModal({
  deleteAction,
  setShowDeleteModal,
  reloadData,
}) {
  return (
    <div className="modal-container">
      <section className="content-modal">
        <p>confirm deletion</p>
        <button
          type="button"
          onClick={() => {
            deleteAction();
            setShowDeleteModal();
            reloadData();
          }}
        >
          confirm
        </button>
        <button type="button" onClick={() => setShowDeleteModal()}>
          Abort
        </button>
      </section>
    </div>
  );
}

DeleteModal.propTypes = {
  deleteAction: PropTypes.func.isRequired,
  setShowDeleteModal: PropTypes.func.isRequired,
  reloadData: PropTypes.func.isRequired,
};
