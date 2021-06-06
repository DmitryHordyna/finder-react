import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer 21266258-ed1f1a426d97c1dcb24ced78e';

const featchImages = ({
  searchQuery = 'car',
  currentPage = 1,
  pageSize = 12,
  orientation = 'horizontal',
  imageType = 'photo',
}) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&image_type=${imageType}&orientation=${orientation}&per_page=${pageSize}
`,
    )
    .then(response => response);
};

export default { featchImages };

// const featchArticles = ({
//   searchQuery = '',
//   currentPage = 1,
//   pageSize = 5,
// }) => {
//   return axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
//     )
//     .then(response => response.data.articles);
// };

// export default { featchArticles };
