import CustomCategory from "../components/CustomCategory";
import CustomTitleTag from "../components/CustomTitleTag";
import { useStore } from "../store/store";

const HomePage = () => {

  const { state, dispatch } = useStore();

  const frontend = state.data?.filter((video) => video.category === "frontend");
  const backend = state.data?.filter((video) => video.category === "backend");
  const innovation = state.data?.filter((video) => video.category === "innovation_and_management");
  
  return (
    <div className="home-page__container">

      <section className="home-page__banner">
        <img src="/bg-banner.png" alt="banner" className="banner__img" />
        <div className="banner__content">
          <div className="banner__text">
            <h1>FRONT END</h1>
            <p>Challenge React</p>
            <small>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
              en la resolución de un problema para poder aplicar todos los conocimientos adquiridos
              en la formación React.
            </small>
          </div>
          <div className="banner__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ov7vA5HFe6w?si=JjjYnuKInPfWS2ih"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="home-page__categories">
        <CustomCategory videos={frontend}>
          <CustomTitleTag title="FRONT END" color="primary" />
        </CustomCategory>
        <CustomCategory videos={backend}>
          <CustomTitleTag title="BACK END" color="secondary" />
        </CustomCategory>
        <CustomCategory videos={innovation}>
          <CustomTitleTag title="INNOVACIÓN Y GESTIÓN" color="tertiary" />
        </CustomCategory>
      </section>
    </div>
  );
};

export default HomePage;
