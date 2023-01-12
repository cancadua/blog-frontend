import axios from 'axios';

export const editArticle = async (articleId, title, content) => {
  return axios.put(`/posts/${articleId}`, {
    title,
    content
  });
};
