import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import classes from "../Styles/Search.module.css";
// import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

const Search = ({ setSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    // let { data } = useFetch(
    //     `/api/products?populate=*&filters[title][$contains]=${query}`
    // );
    let data = null;

    if (!query.length) {
        data = null;
    }

    return (
        <div className={classes["search-modal"]}>
            <div className={classes["form-field"]}>
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <CloseIcon
                    className={classes["close-btn"]}
                    onClick={() => setSearch(false)}
                />
            </div>
            <div className={classes["search-result-content"]}>
                {!data?.data?.length && (
                    <div className={classes["start-msg"]}>
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className={classes["search-results"]}>
                    {data?.data?.map((item) => (
                        <div
                            className={classes["search-result-item"]}
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setSearch(false);
                            }}
                        >
                            <div className={classes["image-container"]}>
                                {/* <img
                                    src={
                                        process.env
                                            .REACT_APP_STRIPE_APP_DEV_URL +
                                        item.attributes.image.data[0].attributes
                                            .url
                                    }
                                /> */}
                            </div>
                            <div className={classes["prod-details"]}>
                                <span className={classes["name"]}>
                                    {item.attributes.title}
                                </span>
                                <span className={classes["desc"]}>
                                    {item.attributes.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;