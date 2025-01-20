
import VideoCard from "./VideoCard";

const CustomCategory = ({ children, videos }) => {
  return (
    <div className="category__container">
      <div className="category__title">{children}</div>
      <div className="category__videos">
        {videos?.map((video) => {
          return (
            <VideoCard video={video} key={video.id} />
          );
        })}
      </div>
    </div>
  );
};

export default CustomCategory;
