import axios from 'axios';

export const deleteComment = async (articleId, commentId) => {
  return axios.delete(`/posts/${articleId}/comments/${commentId}`);
};
