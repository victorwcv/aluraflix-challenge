import { useEffect } from "react";
import AppRouter from "./router";
import { useStore } from "./store/store";
import { getAllVideos } from "./services/videos.service";

const App = () => {
  const {state, dispatch } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllVideos();
        console.log(data);
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.log(error); 
      }
    };

    fetchData();
  }, []);

  if (!state.data) {
    return <div className="loading-fullscreen">
      <h1>Cargando...</h1>
    </div>;
  }

  return <AppRouter />;
};

export default App;
