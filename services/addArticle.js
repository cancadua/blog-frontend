import axios from 'axios';

export const addArticle = async (title, content) => {
  console.log(title, content)

  return axios.post('/posts/new', {
    title,
    content
  });
};
