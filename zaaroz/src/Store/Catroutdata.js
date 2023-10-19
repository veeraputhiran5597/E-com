
const Initialstate={
    Cat_Name:"",
    Sup_Cat_Name:"",
    Main_cat:"",
    Cat_Item_id:null
};

const Cat_Reducer=(state=Initialstate,action)=>
{
    switch(action.type)
    {
        case 'up_Cat_Name':          
        return{...state,Cat_Name:action.value}
        
        case 'Sup_up_Cat_Name':
        return{...state,Sup_Cat_Name:action.value}

        case 'up_Main_cat':
        return{...state,Main_cat:action.value}

        case 'up_Cat_Item_id':
            return{...state,Cat_Item_id:action.value}
        
        default:
            return state;
    }
}

export default Cat_Reducer;