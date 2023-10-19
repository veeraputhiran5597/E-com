import Tophead from "./Header";
import Footer from "./Footer";
import "./Loginpage.css";
import {useEffect,useState} from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux';


const Loginpage=()=>
{
    const Profile_value_dispatch=useDispatch()
    
    const[custdetailearr,setcustdetailearr]=useState([])

    const[logcustarr,setlogcustarr]=useState([])


    

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
      };  

      useEffect(() => {
        Cutdetaileget()
      }, []);
        
    useEffect(()=>{
        onecustomerfn()
    },[custdetailearr])



    const[LSchange,setLSchange]=useState("")

    const[signnumber,setsignumber]=useState("")

    const[signname,setsignname]=useState("")

    const[signemail,setsignemail]=useState("")

    const[signgender,setsigngender]=useState("-Select-")

    const[signaddress,setsignaddress]=useState("")

   

    const Loginclose=()=>
{
    setsignumber("")
    setsignname("")
    setsignemail("")
    setsigngender("-Select-")
    setsignaddress("")
    setLSchange("")
}



/* const Custdatafun=()=>
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
    setLSchange("") 
    console.log(response)
  })
   .catch((error)=>console.log(error))

   Cutdetaileget()
   onecustomerfn()
}
}
 */


const opentoedit=(ele)=>
{
    setLSchange("on")
    setsignumber(ele.Mobile)
    setsignname(ele.Name)
    setsignemail(ele.Email)
    setsigngender(ele.Gender)
    setsignaddress(ele.Address)

}

const clearinput=()=>
{
    setsignumber("")
    setsignname("")
    setsignemail("")
    setsigngender("-Select-")
    setsignaddress("")
}

const jsonput=(id,updata)=>
    {
        axios.put("http://localhost:3000/customersdata/"+id,updata)
        .then((response)=>{
            console.log(response)
            let updatedtable=custdetailearr.map((ele)=>{
                if(ele.id === id)
                {
                    return{
                        ...ele,
                        ...updata,
                    };
                }
                return ele;
            });
            setcustdetailearr(updatedtable)
            setsignumber("")
            setsignname("")
            setsignemail("")
            setsigngender("-Select-")
            setsignaddress("")
            setLSchange("")
            Fix_logcustarr(id,updata)
            
        })
        .catch((error)=>{console.log(error)})
    }


const Fix_logcustarr=(id,updata)=>
{
    axios.put("http://localhost:3000/logincustomerdata/"+id,updata)
    .then((response)=>{
        console.log(response)
        let updatedtable=custdetailearr.map((ele)=>{
            if(ele.id === id)
            {
                return{
                    ...ele,
                    ...updata,
                };
            }
            return ele;
        });
       
        
    })
    .catch((error)=>{console.log(error)})

    Profile_value_dispatch({type:'up_Profile_change',value:"on"}) 

    onecustomerfn()

}

    const secondlist=()=>
    {
        return(
            <>
            <div className="secondlist">
                <button className="secbtn">Grosery</button>
                <button className="secbtn">Mobiles</button>
                <button className="secbtn">Fashion</button>
                <button className="secbtn">Electronics</button>
                <button className="secbtn">Home</button>
                <button className="secbtn">Kitchen Applinces</button>
            </div>

            </>
        )
    }


    const logpageContainer=()=>
    {
        return(
            <>
            <div className="logpageContainer">
            <div className="logfirstplace">
            <img style={{width:"100%",height:"100%",backgroundColor:"#3d155f"}} src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png"/>
            </div>
            <div className="logsecondplace">
                <h1 style={{textAlign:"center",color:"#3d155f"}}>Welcome To <span className='firstlertte'>Z</span>aaroz</h1>
                

                {logcustarr.map((ele,ind)=>{
                    return(
                        <>
                        <div key={ind+"mykey"}>
                        <h1 style={{textAlign:"center",color:"#df678c"}}>{ele.Name}!!</h1>
                        <br/>
                        <h3>Your Personal Details</h3>
                        <br/>
                        <h2>Gender:{ele.Gender}</h2>
                        <br/>
                        <h2>Address:{ele.Address}</h2>
                        <br/>
                        <h2>Email:{ele.Email}</h2>
                        <br/>
                        <button className="Etidbtn" onClick={()=>opentoedit(ele)}>Edit Profile</button>
                        </div>
                        </>
                    )
                })

                }
               
        
            </div>
            </div>
            </>
        )

    }

    const loginPagefun=()=>
{
    return(
        <>
        <div className='modalcontainer'>
        <button className='profileclsbtn' onClick={Loginclose}><CloseIcon/></button>
        <div className='model'>       
        <div>
        <div style={{paddingTop:"20px"}}>
        <h4>Enter Detaile to Edit Your Profile</h4>
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
        {logcustarr.map((ele)=>{return(<button className='savebtn' onClick={()=>jsonput(ele.id,
          {Name:signname,Mobile:signnumber,Email:signemail,Gender:signgender,Address:signaddress})}>Save Profile</button>)})}
        <button className='savebtn' onClick={clearinput}>Clear</button>
        </div>
        </div>  
        </div>
        </div>
        </>
    )
}




    return(<>
    
       <Tophead/>
   
        {secondlist()}
    
        {logpageContainer()}

       
       {LSchange==="on"?loginPagefun():""}

   
       <Footer/>
    
    </>)
}
export default Loginpage;