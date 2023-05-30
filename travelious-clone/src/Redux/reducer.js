const initialData={
    isLoading:false,
    isAuth:false,
    isError:false,
    productType:"activities",
    products:[],
    singleProduct:{},
    cart:[],
}

export const productReducer = (state=initialData,action)=>{
    if(action.type==="SUCCESS") {
        return {
            ...state,products:action.payload
        }
    }else if(action.type==="FAIL") {
        return {
            ...state,isError:action.payload
        }
    }else if(action.type==="LOADING") {
        return {
            ...state,isLoading:action.payload
        }
    }
    return state;
}
export const singleProductReducer = (state=initialData,action)=>{
    if(action.type==="SINGLE_SUCCESS") {
        return {
            ...state,singleProduct:action.payload
        }
    }else if(action.type==="SINGLE_FAIL") {
        return {
            ...state,isError:action.payload
        }
    }else if(action.type==="SINGLE_LOADING") {
        return {
            ...state,isLoading:action.payload
        }
    }
    return state;
}