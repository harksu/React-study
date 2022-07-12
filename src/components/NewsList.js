import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Newsitem from "./Newsitem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const dataUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=63a64895209249d58ed818090188daba`; //이거 나중에 전역 처리

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언,

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(dataUrl);
        console.log(response); //이건 내 디버깅용
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>대기 중 ...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles?.map((article) => (
        <Newsitem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
