import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"
import dataArray from "./dataArray";

const MyContext = createContext();
const API = dataArray;
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
            // const apiData = await axios.get(API)
            // const products = await apiData.data
            dispatch({ type: "SET_API_DATA", payload: url })
        } catch (error) {
            dispatch({ type: "MY_ERROR" })

        }
    }

    const getSingleData = async (url) => {
        dispatch({ type: "MY_SINGLE_LOADING" })
        try {
            // const apiData = await axios.get(url)
            const singleData =API?.filter((e)=>{
                console.log(e.id,"url==>",url);
                return e.id.includes(url)

              
            })
            dispatch({ type: "SET_SINGLE_API_DATA", payload: singleData })
        } catch (error) {
            dispatch({ type: "MY_SINGLE_ERROR" })

        }
    }
    useEffect(() => {
        getData(API);
    }, [])
    return <MyContext.Provider value={{ ...state, getSingleData }}>{children}</MyContext.Provider>
};

const useMyContext = () => {
    return (useContext(MyContext))
}
export { useMyContext, MyProvider };