import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { updateVideo } from "../services/videos.service";
import { useStore } from "../store/store";


const EditCardModal = ({ video, setShowModal }) => {

  const { dispatch } = useStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      id: video.id,
      title: video.title,
      category: video.category,
      image: video.image,
      video: video.video,
      description: video.description,
    },
  });

  const onSubmit = async(formValues) => {

    try {
      const data = await updateVideo(formValues.id, formValues);
      dispatch({ type: "UPDATE_VIDEO", payload: data });
      console.log(data);
      handleClearForm();
    } catch (error) {
      console.log(error);
    }
  };

  

  const handleClearForm = () => {
    reset({
      id: video.id,
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  return (
    <div className="edit-card-modal_overlay">
      <div className="edit-card-modal__container">
      <button className="edit-card-modal__close" onClick={() => setShowModal(false)}><FaXmark /></button>
        <h1>Editar Card</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="edit-card-modal__form">
          <div className="form-field__container">
            <label htmlFor="title">Titulo</label>
            <input {...register("title", { required: "Campo requerido" })} type="text" placeholder="Ejm: Que es React"/>
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className="form-field__container">
            <label htmlFor="category">Categoria</label>
            <select {...register("category", { required: "Campo requerido" })} type="text" placeholder="Ejm: Frontend" >
              <option value="">Seleccione una categoria</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovation_and_management">Innovación y Gestión</option>
            </select>
            {errors.category && <p>{errors.category.message}</p>}
          </div>
          <div className="form-field__container">
            <label htmlFor="image">Imagen</label>
            <input {...register("image")} type="text" placeholder="Ejm: https://i.ytimg.com/..." />
          </div>
          <div className="form-field__container">
            <label htmlFor="video">Video</label>
            <input {...register("video", { required: "Campo requerido" })} type="text" placeholder="Ejm: https://www.youtube.com/..." />
            {errors.video && <p>{errors.video.message}</p>}
          </div>
          <div className="form-field__container">
            <label htmlFor="description">Descripcion</label>
            <textarea {...register("description", { required: "Campo requerido" })} type="text" placeholder="Ejm: Este es el video de React..." />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div className="form-btn__container">
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleClearForm}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCardModal;
