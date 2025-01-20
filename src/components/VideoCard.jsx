import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import EditCardModal from "./EditCardModal";

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="video__container">
      <iframe
        width="350"
        height="200"
        src={video.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="video__buttons">
        <button className="video__btn">
          <FaTrashAlt /> Borrar
        </button>
        <button className="video__btn" onClick={() => setShowModal(true)}>
          <FaEdit />
          Editar
        </button>
      </div>

      {showModal && (
        <EditCardModal video={video} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default VideoCard;
