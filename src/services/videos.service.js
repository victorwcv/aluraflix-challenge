const url = 'http://localhost:3333';

export const getAllVideos = async () => {
  try {
    const response = await fetch(`${url}/videos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error || 'Error al obtener los videos');
  }
};


export const createVideo = async (video) => {
  try {
    const response = await fetch(`${url}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error || 'Error al crear el video');
  }
};

export const updateVideo = async (id, video) => {
  try {
    const response = await fetch(`${url}/videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error || 'Error al actualizar el video');
  }
};

export const deleteVideo = async (id) => {
  try {
    const response = await fetch(`${url}/videos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error || 'Error al eliminar el video');
  }
};