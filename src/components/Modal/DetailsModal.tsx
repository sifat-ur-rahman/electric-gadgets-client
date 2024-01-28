function DetailsModal({ modelData }) {
  return (
    <>
      <input type="checkbox" id="details-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="details-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p>{modelData?.name}</p>
          <h3 className="text-lg font-bold">details-modal </h3>
        </div>
      </div>
    </>
  );
}

export default DetailsModal;
