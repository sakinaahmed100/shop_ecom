export default function filterReducer(state, action) {
    switch (action.type) {
        case "MY_LOADING":
            return {
                ...state,
                loading: true
            }

        case "FILTER_DATA":{
            let filtered_product = [...action.payload]
            let all_product = [...action.payload]
            let priceArray = all_product?.map((e) => {
                return e.price
            })
            let maxPrice = Math.max(...priceArray)

            return {
                ...state,
                loading: false,
                all_products: filtered_product,
                filtered_products: filtered_product,
                filters: {
                    ...state.filters,
                    maxPrice: maxPrice,
                    price:maxPrice,
                    minPrice:0,
                
                }
            }}
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "SORT_ON_CLICK":{
            const sortValue = action.payload
            return {
                ...state,
                sorted_value: sortValue,
            }
        }
        case "SORT_WITH_VALUE":{
            const { filtered_products, sorted_value } = state
            const sorted_products = [...filtered_products]

            const SortingProducts = (a, b) => {
                if (sorted_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorted_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
                if (sorted_value === "lowest") {
                    return a.price - b.price
                }
                if (sorted_value === "highest") {
                    return b.price - a.price
                }
            }
            const sortedProducts = sorted_products.sort(SortingProducts)
            return {
                ...state,
                filtered_products: sortedProducts,

            }

        }

        case "SEARCH":{
            const { name, value } = action.payload
            console.log(state.filters.price)
            console.log(value,name)
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }


        }
        case "SEARCH_WITH_VALUE":{
            const { filters, all_products } = state
            let { text, category, company, color, price } = filters
            let tempFilterData = [...all_products]

            if (text) {
                tempFilterData = tempFilterData.filter((item) => {
                    console.log(tempFilterData)
                    return item.name.toLowerCase().includes(text.toLowerCase())

                });
            }
            if (category && category !== "All") {
                console.log("hi", category);
                tempFilterData = tempFilterData.filter((item) =>
                    item.category.toLowerCase() === category.toLowerCase())

            }

            if (company && company !== "All") {
                tempFilterData = tempFilterData.filter((item) => {
                    return item.company.toLowerCase() === company.toLowerCase()
                });
            }
            if (color && color !== "All") {
                tempFilterData = tempFilterData.filter((item) => {
                    console.log(item.colors)
                    return item.colors.includes(color)
                })
            }
            if (price) {
              

                tempFilterData = tempFilterData.filter((item) => {
                    return item.price <= price
                })
            }
            return {
                ...state,
                filtered_products: tempFilterData,
                // filters: {
                //     ...state.filters,
                // }


            }
        }
        case "CLEAR_FILTER":{
            return {
                ...state,
                filters:
                {
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    // maxPrice: state.maxPrice,
                    // minPrice: 0,
                    // price: state.maxPrice,
                },
            }
        }


        default:
            return {
                ...state
            }
    }
}
