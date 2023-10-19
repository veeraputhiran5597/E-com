import Tophead from "./Header";
import Footer from "./Footer";
import "./Cartpage.css";
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useSelector } from "react-redux/es/hooks/useSelector";

const Cartpage=()=>
{
    const Globleselector=useSelector(state=>state)
    const Cart_cat_name=Globleselector.Catpage_routing.Cat_Name;
   const Cart_Main_cat=Globleselector.Catpage_routing.Main_cat;
   const Cart_cat_id=Globleselector.Catpage_routing.Cat_Item_id;

    const[alldataArr,setalldataArr]=useState([])

    const[cartviewarr,setcartviewarr]=useState([])

    

    const Alldata = async () => {
        await axios
          .get("http://localhost:3000/all")
          .then((response) => setalldataArr(response.data))
          .catch((err) => console.log(err));
      };

     
      useEffect(() => {
        Alldata()
      }, []);


      

   console.log(Cart_cat_id,Cart_Main_cat,Cart_cat_name)
   console.log("eeeee",cartviewarr)

     const cart_list_get=()=>
     {
        axios.get("http://localhost:3000/Cart_items")
        .then((response) => setcartviewarr(response.data))
            .catch((err) =>console.log(err));
     }

     const cart_list_crate=(cartarr)=>
      {    
    
     cartarr.forEach((obj) => {
     axios.post("http://localhost:3000/Cart_items",obj)
     .then((response) => console.log(response.data))
     .catch((err) => console.log(err));
     })
     
     cart_list_get()
    }

      
    
    const Filterdata_forcart=()=>
      {
        if(cartviewarr.find((ele)=>{return ele.item_id===Cart_cat_id
            && ele.category_name===Cart_Main_cat && ele.productcategory===Cart_cat_name}))
        {
            let pluscart=cartviewarr.filter((ele)=>{return ele.item_id===Cart_cat_id
                && ele.category_name===Cart_Main_cat && ele.productcategory===Cart_cat_name}).filter((ele)=>{return ele.quantity+=1})

                console.log("qan",pluscart)
        }
        else
        {
            let cartarr=alldataArr.filter((ele)=>{return ele.item_id===Cart_cat_id
                && ele.category_name===Cart_Main_cat && ele.productcategory===Cart_cat_name})

                cart_list_crate(cartarr) 

        }

} 


      


      useEffect(()=>
      {
        Filterdata_forcart()
      },[Globleselector])
      

    const Cartcontainer=()=>{

        return(<>
        <div className="Cartcontainer">
          <div className="Carthead">
           <p className="ordrename">Your Orders</p>
          </div>
          <br/>
          <div className="orderviewplace">
      {/*       {Emptycartfn()} */}
            {ordercart()}
          </div>
        </div>
        </>)

    }

    const Emptycartfn=()=>
    {
        return(
            <>
            <div>
                <img className="emtycartimg" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"/>
                <h4 style={{marginTop:"20px"}}>Missing Cart items?</h4>
                <h6 style={{marginTop:"20px"}}>Login to see the items you added previously</h6>
            </div>
            </>
        )
    }

    const ordercart=()=>
    {
        return(
            <>
            <div className="ordercartcont">
                <div className="orderitemplace">
                {
                    cartviewarr.map((ele,ind)=>{
                        return(
                            <>
                            <div style={{display:"flex",height:"75%"}} key={ind}>
                            <div style={{width:"20%"}}>
                                <img src={ele.image} className="cartimgstyle" />
                            </div>
                            <div style={{width:"80%",textAlign:"justify"}}>
                            <div style={{height:"35%"}}>{ele.description}</div>
                            
                            <div style={{display:"flex",height:"20%"}}>
                            <div style={{width:"15%",textDecoration:"line-through",opacity:0.6}}>RS.{ele.old_price}</div>
                            <div style={{width:"10%"}}>RS.{ele.new_price}</div>
                            </div>

                            <div style={{height:"20%"}}>
                                {ele.discount} Off%
                            </div>

                            <div style={{height:"20%"}}>
                                {ele.delivery_type}
                            </div>

                            </div>
                            </div>

                            <div style={{display:"flex",height:"30%",padding:"12px",width:"100%"}}>
                            
                            <div style={{width:"8%"}}>
                            <button className="cartminusbtn">-</button>
                            </div>
                            <div>
                            <div className="countitem">{ele.quantity}</div>
                            </div>
                            <div style={{width:"8%"}}>
                            <button className="cartminusbtn">+</button>
                            </div>
                            <div style={{width:"20%"}}>
                            <div>Remove</div>
                            </div>

                            </div>
                            </>
                        )
                    })
                }
                </div>
                <div className="orderpriceplace">
                    <h3>Total Prise Of Your Cart</h3>

                    <div></div>
                </div>

            </div>
            </>
        )
    }





    return(
    <>
    <div>
        <Tophead/>
        {Cartcontainer()}
        <Footer/>
    </div>
    </>)
}

export default Cartpage;