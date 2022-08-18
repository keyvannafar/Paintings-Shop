const initstate = {
  Id: 0,
};

function UseId(state = initstate, action) {
    // for(var i=1;i<30;i++){
    //     if(action.type === `ke${i}`){
    //         const keyvan = i;
    //         alert(keyvan)
    //     }
    // }
    
   for (var i = 1; i <= 30; i++) {
    if (action.type === `view`) {
      return {
        ...state,
        Id: (state.Id = i),
      };
    } 
    else {
      return state;
    }
  }
}

export default UseId;
