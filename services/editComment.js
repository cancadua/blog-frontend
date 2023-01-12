import axios from 'axios';

export const editComment = async (articleId, commentId , content) => {

  return axios.put(`/posts/${articleId}/comments/${commentId}`, {
    content
  });
};
