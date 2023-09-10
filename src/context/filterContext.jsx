import { createContext, useEffect, useReducer, useContext } from "react";
import { useMyContext } from "./productContext";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    loading: false,
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sorted_value: "a-z",
    filters:
    {
        text: "",
        category: "All",
        company: "All",
        color: "All",

    },
}

const FilterContextProvider = ({ children }) => {
    const { products } = useMyContext();
    const [state, dispatch] = useReducer(filterReducer, initialState)

    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" })
    }


    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" })
    }


    useEffect(() => {
        console.log(products)
        dispatch({ type: "MY_LOADING" })

        try {
            dispatch({ type: "FILTER_DATA", payload: products })
            console.log(products)
        }
        catch (error) {
            console.log(error);
        }


    }, [products])

    const removeFilters = () => {
        dispatch({ type: "CLEAR_FILTER" })

    }

    const sort = (e) => {
        let sortValue = e.target.value
        console.log("hi");
        dispatch({ type: "SORT_ON_CLICK", payload: sortValue })

    }
    const Search = (e) => {
        let { name, value } = e.currentTarget
        dispatch({ type: "SEARCH", payload: { name, value, products } })
    }

    useEffect(() => {
        dispatch({ type: "SEARCH_WITH_VALUE" })
    }, [state.filters])

    useEffect(() => {
        dispatch({ type: "SORT_WITH_VALUE", payload: products })

    }, [state.sorted_value, products])

    return (<FilterContext.Provider value={{ ...state, setGridView, setListView, sort, Search, removeFilters }}>{children}</FilterContext.Provider>)
}

const useFilterContext = () => {
    return (useContext(FilterContext))
}
export { useFilterContext, FilterContextProvider }