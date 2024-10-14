export const reducer = (state, action) => {
    console.log("11 In reduser");
    if(action.type ==='ADD_ITEM')
    {
        const newItem = [...state.people, action.payload];
        return {
            ...state,
            people:newItem,
            modalOpen:true,
            modalContanet:"New Item Added"
        }
    }
    if(action.type ==='NO_ITEM'){
        return {
            ...state,
            modalContanet:"No Item Added"
        }
    }
    if(action.type ==='REMOVE_MODAL'){
        return {...state,modalOpen:false,modalContanet:""};
    }
    if(action.type ==='REMOVE_ITEM'){
        const removeItem = state.people.filter((i) => i.id !== action.payload);
        return {
            ...state,
            people:removeItem,
            modalOpen:true,
            modalContanet:"Item Removed"
        }
    }
};