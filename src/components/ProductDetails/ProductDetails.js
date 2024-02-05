import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { LIST_API } from "../../utils/constants";
import { Shimmer } from "../Shimmer/Shimmer";

const ProductDetails = () => {
    const [details, setDetails] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const data = await fetch(LIST_API + '/' + params.id)
        const json = await data.json();
        setDetails(json);
    }

    return !details ? <Shimmer count={1} /> : (
        <div className="details">
            <div className="title">Product Details</div>
            <div>
                <img
                    className="product-img"
                    src={details?.thumbnail}
                    alt="rest-logo"
                />
                <h3>{details?.title}</h3>
                <h4>{details?.category}</h4>
                <h4>{details?.rating}</h4>
                <h4>${details?.price}</h4>
            </div>
        </div>
    )
}

export default ProductDetails;