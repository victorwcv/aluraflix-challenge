import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const CustomCategory = ({ children, videos }) => {
  return (
    <div className="category__container">
      <div className="category__title">{children}</div>
      <div className="category__videos">
        {videos?.map((video) => {
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
                <button className="video__btn">
                  <FaEdit />
                  Editar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCategory;
