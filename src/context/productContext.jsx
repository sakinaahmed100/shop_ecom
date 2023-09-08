import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer"

const MyContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProductObj: {},

}

const MyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getData = async (url) => {
        dispatch({ type: "MY_LOADING" })
        try {
            const apiData = await axios.get(API)
            const products = await apiData.data
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "MY_ERROR" })

        }
    }

    const getSingleData = async (url) => {
        dispatch({ type: "MY_SINGLE_LOADING" })
        try {
            const apiData = await axios.get(url)
            const singleProduct = await apiData.data
            dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "MY_SINGLE_ERROR" })

        }
    }
    useEffect(() => {
        getData();
    }, [])
    return <MyContext.Provider value={{ ...state, getSingleData }}>{children}</MyContext.Provider>
};

const useMyContext = () => {
    return (useContext(MyContext))
}
export { useMyContext, MyProvider };