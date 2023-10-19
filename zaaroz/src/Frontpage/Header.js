import './Header.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PercentIcon from '@mui/icons-material/Percent';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useSelector } from "react-redux/es/hooks/useSelector";

const Tophead=()=>
{
    const Profile_Edit_Obj=useSelector(state=>state)
    const Up_profiledata=Profile_Edit_Obj.Profile_routing.profile_change

    const Profile_value_dispatch=useDispatch()


    const[alldataArr,setalldataArr]=useState([])

/*******************SearchFunc******************************/

    const[Search,setSearch]=useState("")

    const[Updatearr,setUpdatearr]=useState([])

/*******************Log page******************************/

    const[loginpage,setloginpage]=useState("")

    const[LSchange,setLSchange]=useState("")

    const[signnumber,setsignumber]=useState("")

    const[signname,setsignname]=useState("")

    const[signemail,setsignemail]=useState("")

    const[signgender,setsigngender]=useState("-Select-")

    const[signaddress,setsignaddress]=useState("")

    const[custdetailearr,setcustdetailearr]=useState([])

    const[logcustarr,setlogcustarr]=useState([])

    const[lognumber,setlognumber]=useState("")



    const navigate=useNavigate()

    const Valuedispatch=useDispatch();



    
    const Alldata = async () => {
        await axios
          .get("http://localhost:3000/all")
          .then((response) => setalldataArr(response.data))
          .catch((err) => console.log(err));
      };

      const Cutdetaileget = async () => {
        await axios
          .get("http://localhost:3000/customersdata")
          .then((response) => setcustdetailearr(response.data))
          .catch((err) => console.log(err));
      };  

      const onecustomerfn = async () => {
        await axios
          .get("http://localhost:3000/logincustomerdata")
          .then((response) => setlogcustarr(response.data))
          .catch((err) => console.log(err));

          Profile_value_dispatch({type:'up_Profile_change',value:""}) 
      };  

      useEffect(() => {
        Alldata()
        Cutdetaileget()
      }, []);
        
    useEffect(()=>{
        onecustomerfn()
    },[lognumber,custdetailearr,Up_profiledata])

 

      const offerBtn=()=>
      {
          navigate("/offerpath")
      }

 /********************Search functions********************************/

  const unique =Updatearr.filter((value, index, self) => 
  self.findIndex(v => v.id === value.id && v.productcategory === value.productcategory 
  &&v.Supcategory === value.Supcategory) === index);

  const SearchFunc=(category_name,productcategory,Supcategory)=>
  {

    if(category_name==="grocery")
    {
        navigate("/Groserypath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory}) 
    }

    if(category_name==="Home Appliances")
    {
        navigate("/Homeapplaincepath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})
    }

    if(category_name==="Electronics")
    {
        navigate("/Electronicspath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory}) 
    }

    if(category_name==="Kitchen Appliances")
    {
        navigate("/Kitchenapplincespath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory}) 
    }

    if(category_name==="Mobiles")
    {
        navigate("/mobiespath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})  
    }

    if(category_name==="Fashion")
    {
        navigate("/Fashionpath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})  
        Valuedispatch({type:'Sup_up_Cat_Name',value:Supcategory})   
    }

  }


    const Searchplace=()=>
    {
        return(
            <>
            <div className='Searchplace'>
                {unique.map((ele,ind)=>{
                    return(<>
                    <div key={ind}>
                        <div className='seachitemplace'>
                       
                        <div className='searimgplace'>
                            <img src={ele.image} style={{maxHeight:"30px",maxWidth:"30px"}} />
                        </div>

                        <div onClick={(e) => SearchFunc(ele.category_name,ele.productcategory,ele.Supcategory)}>
                        <div className='searmainname'>   
                        {ele.Supcategory ? ele.Supcategory :ele.productcategory}
                        </div>
                        <div className='searsubname'>
                            in {ele.category_name} 
                        </div> 
                        </div> 
                        
                        </div>
                    </div>
                    </>)
                })}
            </div>
            </>
        )
    }

    
    useEffect(()=>{

        let Searchlow =Search.toLowerCase()
      /*   console.log(Searchlow) */
        
        if(Searchlow !== null)
        {
        let filterarr=alldataArr.filter((ele)=>{

           return ele.category_name.toLowerCase().includes(Searchlow)

        })
       /*    */
        setUpdatearr(filterarr)
     }

     

    },[Search])


    const Searchitems=(e)=>
    {
        const name=e.target.value
        setSearch(prevstate=>name); 
    }



/************************login func*********************************/



const Loginaction=()=>
{
    setloginpage("on")
}

const Loginclose=()=>
{
    setloginpage("")
    setlognumber("")
    setsignumber("")
    setsignname("")
    setsignemail("")
    setsigngender("-Select-")
    setsignaddress("")
    setLSchange("login")
}

const Signupplace=()=>
{
  setLSchange("signup")
  setlognumber("")
}

const loginplace=()=>
{
  setLSchange("login") 
  setsignumber("")
  setsignname("")
}



const Custdatafun=()=>
{

if(signname==="")
    {
        alert("Please Enter Your Name")
    }
else if(signnumber==="")
    {
        alert("Please Enter your Mobile Number")
    }
else if(signemail==="") 
    {
        alert("Please Enter your Email Id")
    } 
else if(signgender==="-Select-") 
    {
        alert("Please Enter your Gender")
    }           
else if(signaddress==="") 
    {
        alert("Please Enter your Address")
    }
else if(signname===""||signnumber===""||signemail===""||signgender==="-Select-"||signaddress==="") 
    {
        alert("Please Enter Valid Details")
    }
else if(custdetailearr.find((ele)=>{return (ele.Mobile===signnumber)}))
{
    alert("Alerdy Created Account")
}        
else
    {

   axios.post("http://localhost:3000/customersdata",{Name:signname,Mobile:signnumber,Email:signemail,Gender:signgender,Address:signaddress})
   .then((response)=>
  {
    setsignumber("")
    setsignname("")
    setsignemail("")
    setsigngender("-Select-")
    setsignaddress("")
    setLSchange("login") 
    console.log(response)
  })
   .catch((error)=>console.log(error))

   Cutdetaileget()
   onecustomerfn()
}
}






const intologinpage = ()=>
{    
    if(custdetailearr.find((ele)=>{return (ele.Mobile===lognumber)}))
    {
    let logcust=custdetailearr.find((ele)=>{return (ele.Mobile===lognumber)})

      axios.post("http://localhost:3000/logincustomerdata",logcust)
      .then((response)=>
     {
      setlognumber("")
      console.log(response)
     })
     .catch((error)=>console.log(error))
        
    
        setloginpage("")
    }
    else
    {
        alert("Please Signup your Number")
    }

    
}

const handledelete = async (id) => {
    await axios
    
      .delete(`http://localhost:3000/logincustomerdata/${id}`)
      .then((response) => 
        navigate("/"))
      .catch((err) => console.log(err));

      setlogcustarr([])  
  };

const jumptologpage=()=>
{
     navigate("/Loginpagepath")
}

/* console.log(logcustarr) */
/* console.log(logbtnname)
console.log(lognumber) */


/*****************************************************/

const Cartpagebtn=()=>{
    navigate("/Cartpagepath")

}



const loginPagefun=()=>
{
    return(
        <>
        <div className='modalcontainer'>
        <button className='logpageclsbtn' onClick={Loginclose}><CloseIcon/></button>
        <div className='model'>

        <h2>Hiiii!</h2>
        <div style={{display:"flex",width:"100%",height:"40px",borderBottom:"1px solid black"}}>
        {LSchange==="signup" ?<div className='Newculetter'>Welcome!!</div>:<div className='Newculetter'>New Customer?</div>}   
        {LSchange==="signup" ?<div className='Signletter' onClick={loginplace}>Go to login</div>:<div className='Signletter' onClick={Signupplace}>Sign up</div>}
        </div>

       {LSchange==="signup" ?
        <div>
        <div style={{paddingTop:"20px"}}>
        <h4>Enter Detaile to Sign up</h4>
        <div style={{display:"flex",width:"100%",marginTop:"30px"}}>
        <div className='Moblletter'>Mobile Number:</div>
        <input className='moblinput' type="tel" name='Mobile' value={signnumber} autoComplete="off"  onChange={(e)=>{setsignumber(e.target.value)}} maxLength={10}/>
        </div>
        <div style={{display:"flex",width:"100%",marginTop:"30px"}}>
        <div className='Moblletter'>Name:</div>
        <input className='moblinput'type='text' name='Name'autoComplete="off" value={signname} onChange={(e)=>{setsignname(e.target.value)}} />
        </div>
        <div style={{display:"flex",width:"100%",marginTop:"30px"}}>
        <div className='Moblletter'>Email:</div>
        <input className='moblinput'type='email' name='email'autoComplete="off" value={signemail} onChange={(e)=>{setsignemail(e.target.value)}} />
        </div>
        <div style={{display:"flex",width:"100%",marginTop:"30px"}}>
        <div className='Moblletter'>Genter:</div>
        <select className='moblinput' name="gender" value={signgender} onChange={(e)=>{setsigngender(e.target.value)}} >
        <option>-Select-</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Transgender">Transgender</option>
        </select>
        </div>
        <div style={{display:"flex",width:"100%",marginTop:"30px"}}>
        <div className='Moblletter'>Address:</div>
        <input className='Addressin' type='text' name='address' autoComplete="off" value={signaddress} onChange={(e)=>{setsignaddress(e.target.value)}} />
        </div>
        </div>
        <div style={{display:"flex"}}>
        <button className='signupbtn' onClick={Custdatafun}> Signup </button>
        </div>
        </div>  
         :
        <div>
        <div style={{paddingTop:"20px"}}>
        <h4>Enter Mobile Number To Login</h4>
        <div style={{display:"flex",width:"100%",marginTop:"30px"}}>
        <div className='Moblletter'>Mobile Number:</div>
        <input className='moblinput' type="tel" name='lognumber'autoComplete="off" value={lognumber} onChange={(event)=>{setlognumber(event.target.value)}} maxLength={10} />
        </div>
        </div>
        <div style={{display:"flex"}}>
        <button className='Submitbtn' onClick={intologinpage}> Login </button>
        </div>
        </div>}
        </div>
        </div>
        </>
    )
}


    return(
        <>
        <div className="Firstheader">
            
            <div className='headerplace'>
           
         
            <img className='headImg' src='https://i.pinimg.com/736x/52/be/00/52be002aa8b87751363842f73cee95c1.jpg' />
           
            <div className='Comname'><span className='firstlertte'>Z</span>aaroz</div>
            
            <div>

            <div className='searchbardiv'>
            <input className='searchbox' value={Search} placeholder='Search by only category' onChange={Searchitems}  />
            <div className='serchicon'><img className='schicon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Search_font_awesome.svg/768px-Search_font_awesome.svg.png?20130126205806" />
               <div className='schname'>Search</div></div>
            </div>

            <div>
                {Search.length===0? "" : Searchplace()}
            </div>
            </div>

            <div style={{position:"relative"}}>
            {logcustarr.length===0 ? <div className='loginbtn' onClick={Loginaction}><AccountCircleIcon style={{height:"20px"}} />Login</div>
            :
            
             <div class="dropdown">
            {logcustarr.map((ele)=>{return (<>
                <div className='dropbtn'>{ele.Name}
                
                </div>
            </>)})}
            <div class="dropdown-content">
              <a onClick={jumptologpage} ><AccountCircleIcon style={{height:"20px"}} /><div style={{textAlign:"center"}}>My Profile</div></a>
              {logcustarr.map((ele)=>{return (<><a onClick={()=>handledelete(ele.id)}><LogoutIcon style={{height:"20px"}} /><div style={{textAlign:"center"}}>Logout</div></a></>)})}
            </div>
             </div>        
            }
            {/* {logcustarr.length===0 ?"" : <div class="hovbtn">
            <div>
                <div className='dropdown-logbtns'><div style={{marginTop:"2px",width:"30%"}}><AccountCircleIcon style={{height:"20px"}} /></div>My Profile</div>
            </div>
            <div>
                <div className='dropdown-logbtns'><div style={{marginTop:"2px",width:"30%"}}><LogoutIcon style={{height:"20px"}} /></div>Logout</div>
            </div>
            </div>} */}
            <div>
                {loginpage==="on"?loginPagefun():""}
            </div>
            </div>

            <div className='offerbtn' onClick={offerBtn}><PercentIcon style={{height:"20px"}}/>Offers</div>
            <div className='cartbtn' onClick={Cartpagebtn}><ShoppingCartCheckoutIcon style={{height:"20px"}}/>Cart</div>

            </div>
        </div>
        </>
    )
}
export default Tophead;