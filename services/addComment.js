import axios from 'axios';

export const addComment = async (articleId, content) => {

  return axios.post(`/posts/${articleId}/comments`, {
    content
  });
};
