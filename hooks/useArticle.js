import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useArticle = () => {
  const [article, setArticle] = useState(null);
  const { query } = useRouter();

  const fetchArticleData = () => {
    axios.get(`/public/posts/${query.index}`)
      .then(({ data }) => setArticle(data));
  }

  useEffect(() => {
    if (query.index !== undefined) {
      fetchArticleData()
    }
  }, [query.index]);

  return { article, fetchArticleData };
};
