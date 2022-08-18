
const initstate ={
    qtyTotal :0
}

const qtyTotalReducer = (state=initstate, action)=>{
    if (action.type === "Increase") {
      return {
        ...state,
        qtyTotal: state.qtyTotal + 1,
      };
    } else if (action.type === "Decrease") {
      return {
        ...state,
        qtyTotal: state.qtyTotal - 1,
      };
    } else{
        return state
    }
}

export default qtyTotalReducer;