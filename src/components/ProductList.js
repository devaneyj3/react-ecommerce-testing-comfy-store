import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const { all_products } = useFilterContext();
	console.log(all_products);
	return <h4>product list</h4>;
};

export default ProductList;
