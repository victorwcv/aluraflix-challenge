export const getAllVideos = async () => {
  const response = await fetch('/mock.json');
  const data = await response.json();
  return data;
};