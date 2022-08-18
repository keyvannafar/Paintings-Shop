const initstate = {
  Favqty: 0,
  
};

const FavQtyReducer = (state = initstate, action) => {

  if (action.type === "addFavqty") {
        return {
          ...state,
          Favqty: state.Favqty + 1,
        };
     
    }
    if (action.type === "removeFav") {

        return {
          ...state,
          Favqty: state.Favqty - 1,
        
      }
     

    } else {
      return state;
    }

  }
 ;

export default FavQtyReducer;
