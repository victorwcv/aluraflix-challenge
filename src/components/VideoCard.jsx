import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import EditCardModal from "./EditCardModal";
import { useStore } from "../store/store";
import { deleteVideo } from "../services/videos.service";
import { ToastContainer, toast } from 'react-toastify';

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const { dispatch } = useStore();

  const successNotify = () => toast.success("Video eliminado con exito!");
  const errorNotify = () => toast.error("Error al eliminar el video!");

  const onDelete = async (id) => {
    try {
      const data = await deleteVideo(id);
      dispatch({ type: "DELETE_VIDEO", payload: id });
      console.log(data);
      successNotify();
    } catch (error) {
      console.log(error);
      errorNotify();
    }
  };
  
  return (
    <div className="video__container">

      <ToastContainer autoClose={5000} closeOnClick pauseOnHover />
      
      <iframe
        width="350"
        height="200"
        src={video.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="video__buttons">
        <button className="video__btn" onClick={() => onDelete(video.id)}>
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
