import axios from "axios";
import React from 'react'
import MenuWrapper from './../../components/product/MenuWrapper';

function index({ categoryList, productList }) {
    return (
        <React.Fragment>
            <div className="pt-10">
                <MenuWrapper categoryList={categoryList} productList={productList} />
            </div>
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const category = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
    );
    const product = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
    );
    return {
        props: {
            categoryList: category.data ? category.data : [],
            productList: product.data ? product.data : [],
        },
    };
};

export default index