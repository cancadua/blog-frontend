import axios from 'axios';

export const deleteArticle = async (articleId) => {
  return axios.delete(`/posts/${articleId}`);
};
