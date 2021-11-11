import { createStore } from "redux"

function actio (){
   return  {
          type:"add"
    }
}

const initialState= {
    cake : 10
}
function reducer(state=initialState,action){
    switch(action.type){
        case "add" : return {
           cake:state.cake-1
            
        }
        default: 
            return  state
        }
    }

    const  p = createStore(reducer)
    console.log(p.getState() , "current")