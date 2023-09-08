export default function productReducer(state,action) {
switch (action.type) {
    
    case "MY_LOADING":{
    return{
        ...state,
        isLoading:true,
    }}
    case "SET_API_DATA":{
        const featuredData= action.payload?.filter((e)=>{
            return e.featured===true

        })
    return{
        ...state,
        isLoading:false,
        products:action.payload,
        featuredProducts:featuredData,
    }}
    case "MY_ERROR":
        return{
            ...state,
            isLoading:false,
            isError:true,
            
        }

        case "MY_SINGLE_LOADING":
            return{
                ...state,
                isLoading:true,
            }
            case "SET_SINGLE_API_DATA":
               
                
            return{
                ...state,
                isLoading:false,
                singleProductObj:action.payload,
            }
            case "MY_SINGLE_ERROR":
                return{
                    ...state,
                    isLoading:false,
                    isError:true,
                    
                }
       

    default:
        return state;
}

  }