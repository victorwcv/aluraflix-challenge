import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";


const EditCardModal = ({ video, setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      title: video.title,
      category: video.category,
      image: video.image,
      video: video.link,
      description: video.description,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setShowModal(false);
  };

  const handleClearForm = () => {
    reset({
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
          <div className="edit-card-modal__buttons">
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleClearForm}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCardModal;
