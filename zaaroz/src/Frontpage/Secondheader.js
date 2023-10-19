import { useEffect, useState} from 'react';
import axios from 'axios';
import './Secondheader.css';
import {useNavigate} from "react-router-dom";

const Secondheader=()=>
{


   const[Headerimg,setHeaderimg]=useState([])


   const[Navicatdata,setnavicatdata]=useState("")

   const myNavigation=useNavigate()

   useEffect(()=>{

    if(Navicatdata===1)
    {
        myNavigation("/offerpath")
    }
    
    if(Navicatdata===2)
    {
        myNavigation("/Groserypath")
    }

    if(Navicatdata===6)
    {
        myNavigation("/mobiespath")
    }

    if(Navicatdata===7)
    {
        myNavigation("/Fashionpath")
    }

    if(Navicatdata===4)
    {
        myNavigation("/Electronicspath")
    }

    if(Navicatdata===3)
    {
        myNavigation("/Homeapplaincepath")
    }

    if(Navicatdata===5)
    {
        myNavigation("/Kitchenapplincespath")
    }


   },[Navicatdata])



    


    const fetchData = async () => {
        await axios
          .get("http://localhost:3000/Categories")
          .then((response) => setHeaderimg(response.data))
          .catch((err) => console.log(err));
      };
    
      useEffect(() => {
        fetchData();
      }, []);


      /* console.log(Headerimg) */


    return(
        <>
        <div className='Secondheader'>
        {Headerimg.map((ele,ind)=>{
            return(
                <div className='secHeaderimg' key={"myKey"+ind}>
                    <img className='imgclassname' src={ele.category_image} onClick={()=>setnavicatdata(ele.category_id)} />  
                    <div className='imgproname'>{ele.category_name}</div>
                </div>
            )
        })

        }
        
        </div>
        </>
    )
}
export default Secondheader;