import React, { FunctionComponent } from "react";
import * as S from "./style"

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryList: FunctionComponent<CategoryListProps> = ({
  selectedCategory,
  categoryList
}) => {
  return (
    <S.CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <S.CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </S.CategoryItem>
      ))}
    </S.CategoryListWrapper>
  )
}

export default CategoryList;