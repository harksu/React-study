import React from "react";
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

const sampleAritcle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  const templist = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <NewsListBlock>
      {templist?.map((templist) => (
        <Newsitem article={sampleAritcle} key={templist.value} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
