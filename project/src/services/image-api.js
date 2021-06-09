const featchImages = ({
  searchQuery = 'ukraine',
  currentPage = 1,
  imageType,
  perPage = 12,
  orientation,
}) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21266258-ed1f1a426d97c1dcb24ced78e&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`,
  ).then(response => {
    if (!response) {
      throw response;
    }
    return response.json();
  });
};

const imagesAPI = { featchImages };

export default imagesAPI;

//не працює
// import axios from 'axios';
// const MY_KEY = '21266258-ed1f1a426d97c1dcb24ced78e';
// const BASE_URL = 'https://pixabay.com/api/';

// const featchImages = ({
//   searchQuery = 'ukraine',
//   currentPage = 1,
//   imageType,
//   perPage = 12,
//   orientation,
// }) => {
//   axios
//     .get(
//       `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${MY_KEY}&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`,
//     )
//     .then(response => response);
// };

// const imagesAPI = {
//   featchImages,
// };
// export default imagesAPI;
