import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    txt: "전체보기",
  },
  {
    name: "business",
    txt: "비즈니스",
  },
  {
    name: "entertainment",
    txt: "엔터테인먼트",
  },
  {
    name: "health",
    txt: "건강",
  },
  {
    name: "science",
    txt: "과학",
  },
  {
    name: "sports",
    txt: "스포츠",
  },
  {
    name: "technology",
    txt: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories?.map((categorie) => (
        <Category
          key={categorie.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={categorie.name === "all" ? "/" : `/${categorie.name}`}
        >
          {categorie.txt}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
