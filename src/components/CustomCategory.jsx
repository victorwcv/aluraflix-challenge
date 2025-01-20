const CustomCategory = ({ children,  videos }) => {
  return (
    <div className="category__container">
      <div className="category__title">{children}</div>
      <div className="category__videos">
        {videos?.map((video) => {
          return (
            <div className="video__container">
              <iframe
                width="560"
                height="315"
                src={video.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <div className="video__buttons">
                <button className="video__btn">Borrar</button>
                <button className="video__btn">Editar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCategory;
