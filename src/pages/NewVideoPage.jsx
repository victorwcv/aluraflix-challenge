import { useForm } from "react-hook-form";

const NewVideoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="new-video__container">
      <h2>NUEVO VIDEO</h2>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>

      <h3>Crear Tarjeta</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="new-video__form">
        <div className="form-field__container new-video">
          <label htmlFor="title">Titulo</label>
          <input
            {...register("title", { required: "Campo requerido" })}
            type="text"
            placeholder="Ejm: Que es React"
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="form-field__container new-video">
          <label htmlFor="category">Categoria</label>
          <select
            {...register("category", { required: "Campo requerido" })}
            type="text"
            placeholder="Ejm: Frontend"
          >
            <option value="">Seleccione una categoria</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovation_and_management">Innovación y Gestión</option>
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <div className="form-field__container new-video">
          <label htmlFor="image">Imagen</label>
          <input {...register("image")} type="text" placeholder="Ejm: https://i.ytimg.com/..." />
        </div>
        <div className="form-field__container new-video">
          <label htmlFor="video">Video</label>
          <input
            {...register("video", { required: "Campo requerido" })}
            type="text"
            placeholder="Ejm: https://www.youtube.com/..."
          />
          {errors.video && <p>{errors.video.message}</p>}
        </div>
        <div className="form-field__container new-video">
          <label htmlFor="description">Descripcion</label>
          <textarea
            {...register("description", { required: "Campo requerido" })}
            type="text"
            placeholder="Ejm: Este es el video de React..."
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className="form-btn__container new-video">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideoPage;
