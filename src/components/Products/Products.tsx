import React from "react";
import { useQuery } from "react-query";
import CardProduct from "@/components/CardProduct/CardProduct";
import * as S from "./ProductsStyles";
import SkeletonCard from "@/helper/SkeletonCard";

async function fetchProducts() {
  const response = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC",
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data.products as Product[];
}

const Products = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["products"],
    fetchProducts,
  );

  if (isLoading)
    return (
      <S.Product>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </S.Product>
    );

  if (isError)
    return <S.Error>Ocorreu um erro: {(error as Error).message}.</S.Error>;

  if (!data)
    return <S.EmptyProducts>Nenhum produto encontrado.</S.EmptyProducts>;

  return (
    <S.Product>
      {data.map((product) => (
        <CardProduct key={product.id} {...product} />
      ))}
    </S.Product>
  );
};

export default Products;
