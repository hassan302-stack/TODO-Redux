const initialState={text:[],edit:{value:'',index:'',status:false}}

const TodoFeatures =(state=initialState,action)=>{
    switch(action.type){
        case "AddNote": return { ...state,text:[...state.text,action.payload] }
        case "delete": return  { ...state,text:state.text.filter((n,i)=> action.payload!==i )};
        case "edit": return { text:[...state.text],edit:action.payload};
        case "updated": 
        if(state.edit.status){
            let newVal=state.text.map((val,i)=>i===state.edit.id?action.payload:val)
            return { text:newVal,edit:{value:'',index:'',status:false} }
        }
        else return state
        case "clearAll": return  { text:[],edit:{value:'',index:'',status:false }};
        default : return state
    }


}
export default TodoFeatures 