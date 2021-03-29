import React  from 'react';
import {useSelector} from 'react-redux'
export default function Homepage()
{
    const userInfo= useSelector(state=>state.user.info);
    const apart=useSelector(state=>state.user.list_apart); 
    console.log(userInfo);
    console.log(apart);
    return(
        <div>Homepageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
    );
}