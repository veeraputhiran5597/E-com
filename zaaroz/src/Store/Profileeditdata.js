const Initialstate={
      profile_change:""
};

const ProfileEdit_Reducer=(state=Initialstate,action)=>
{
    switch(action.type)
    {
        case 'up_Profile_change':
        return{...state,profile_change:action.value}

        
        default:
            return state;
    }
}

export default ProfileEdit_Reducer;