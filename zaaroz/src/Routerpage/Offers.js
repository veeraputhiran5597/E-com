import Tophead from "../Frontpage/Header";
import Footer from "../Frontpage/Footer";
import {useEffect,useState} from 'react';
import axios from "axios";
import './Routerpage.css';
import StarIcon from '@mui/icons-material/Star';
import {useDispatch} from 'react-redux';



const Offers=()=>
{
    const Valuedispatch=useDispatch();


    const[offerArr,setOfferarr]=useState([])

    const[filterArray,setFilterarray]=useState([])

    const fixArray=async()=>
    {
        await axios
        .get("http://localhost:3000/all")
          .then((response) => setOfferarr((response.data).filter((ele)=>{return ele.discount>=50})))
          .catch((err) => console.log(err));
    };

    useEffect(() => {
        fixArray();
    }, []);

 

      const[alignoffer,setalignoffer]=useState("")

      const[alignprice,setalignprice]=useState("")

      const[alignrating,setalignrating]=useState("")

      const[aligncategories,setaligncategories]=useState("")

      const filtersFunctions=()=>
      {
        let Filterarry=offerArr.map((ele)=>ele);

        if(alignoffer==="offerlow")
        {
             Filterarry=Filterarry.sort(
                (a, b) => parseFloat(a.discount) - parseFloat(b.discount)
              );
        }

        if(alignoffer==="offerhigh")
        {
             Filterarry=Filterarry.sort(
                (a, b) => parseFloat(b.discount) - parseFloat(a.discount)
              );
        }

        if(alignprice==="pricelow")
        {
             Filterarry=Filterarry.sort(
                (a, b) => parseFloat(a.new_price) - parseFloat(b.new_price)
              );
        }

        if(alignprice==="pricehigh")
        {
             Filterarry=Filterarry.sort(
                (a, b) => parseFloat(b.new_price) - parseFloat(a.new_price)
              );
        }

        if(alignrating==="ratinghigh")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.hidden_stars>=4}).sort((a,b)=>parseFloat(b.hidden_stars)-parseFloat(a.hidden_stars))
        }

        if(alignrating==="ratinglow")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.hidden_stars<4}).sort((a,b)=>parseFloat(b.hidden_stars)-parseFloat(a.hidden_stars))
        }

        if(aligncategories==="filtergrosery")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.category_name=="grocery"}) 
        }

        if(aligncategories==="filtermobiles")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.category_name=="Mobiles"}) 

        }

        if(aligncategories==="filterfashion")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.category_name=="Fashion"}) 
        }
        
        if(aligncategories==="filterelec")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.category_name=="Electronics"}) 

        }
        
        if(aligncategories==="filterhome")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.category_name=="Home Appliances"}) 
        }

        
        if(aligncategories==="filterkichen")
        {
             Filterarry=Filterarry.filter((ele)=>{return ele.category=="appliances"}) 

        }

       

        setFilterarray(Filterarry)
            
      }


     
      useEffect(()=>{
        filtersFunctions()        
      },[alignoffer,alignprice,alignrating,aligncategories])


      const clrBtnfn=()=>
      {
        setalignoffer("")

      setalignprice("")

      setalignrating("")

      setaligncategories("")
     }

     const Addcartproduct=(id,Cname,Pcatname)=>
     {
        Valuedispatch({type:'up_Cat_Name',value:Pcatname})
        Valuedispatch({type:'up_Main_cat',value:Cname})
        Valuedispatch({type:'up_Cat_Item_id',value:id})      

        console.log(id,Cname,Pcatname)
     }



/*      console.log(offerArr)  */
   
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
   

    const sidefilter=()=>
    {
        return(
            <>
            <div style={{height:"800px"}}>
            <h1>filter</h1>
            <div>
            <h3>categories:</h3>
            <div><input type="checkbox" value="filtergrosery" checked={aligncategories==="filtergrosery"} onChange={(e)=>{setaligncategories(e.target.value)}}/> Grosery</div>
            <div><input type="checkbox" value="filtermobiles" checked={aligncategories==="filtermobiles"} onChange={(e)=>{setaligncategories(e.target.value)}}/> Mobiles</div>
            <div><input type="checkbox" value="filterfashion" checked={aligncategories==="filterfashion"} onChange={(e)=>{setaligncategories(e.target.value)}}/> Fashion</div>
            <div><input type="checkbox" value="filterelec" checked={aligncategories==="filterelec"} onChange={(e)=>{setaligncategories(e.target.value)}}/> Electronics</div>
            <div><input type="checkbox" value="filterhome" checked={aligncategories==="filterhome"} onChange={(e)=>{setaligncategories(e.target.value)}}/> Home Applinces</div>
            <div><input type="checkbox" value="filterkichen" checked={aligncategories==="filterkichen"} onChange={(e)=>{setaligncategories(e.target.value)}}/> Kitchen Applinces</div>
            </div>
            <div>
                <h3>Offers:</h3>
                <div><input type="checkbox" value="offerlow" checked={alignoffer==="offerlow"} onChange={(e)=>{setalignoffer(e.target.value)}} /> Low to High </div>
                <div><input type="checkbox" value="offerhigh" checked={alignoffer==="offerhigh"} onChange={(e)=>{setalignoffer(e.target.value)}}/> High to low </div>
            </div>
            <div>
                <h3>Ratings:</h3>
                <div><input type="checkbox" value="ratinghigh" checked={alignrating==="ratinghigh"} onChange={(e)=>{setalignrating(e.target.value)}}/> Above 4 Rating</div>
                <div><input type="checkbox" value="ratinglow" checked={alignrating==="ratinglow"} onChange={(e)=>{setalignrating(e.target.value)}}/> Below 4 Rating</div>
            </div>
            <div>
                <h3>Prise:</h3>
                <div><input type="checkbox" value="pricelow" checked={alignprice==="pricelow"} onChange={(e)=>{setalignprice(e.target.value)}}/> Low to High</div>
                <div><input type="checkbox" value="pricehigh" checked={alignprice==="pricehigh"} onChange={(e)=>{setalignprice(e.target.value)}}/> High to low</div>
            </div>
            <div>
            <button className="clrbtn" onClick={clrBtnfn}>Clear Filters</button>
            </div>
            </div>
            </>
        )
    }
    


    const Mainmenu=()=>
    {
        return(
            <>
             <h1>Top offers</h1>
             <div className="Maincont" >
        {(filterArray.length===0?offerArr:filterArray).map((ele,ind)=>{
           return(
            <>
            <div className='subcontainer' >
                <div className='productbox' key={ind}>
                
                
                
                <div className='imgplace'>
                <img className='containerimgs' src={ele.image} />
                </div>
                
                <div className='displace'>
                
                <div className='descriptionview'>{ele.description}</div>

                <div style={{display:"flex",marginTop:"10px"}}>
                <button className='Ratingpoint'>{ele.hidden_stars}<StarIcon style={{height:"13px",paddingTop:"2px",width:"11px"}} /></button>
                <div className='ratingsview'>({ele.ratings})</div>
                </div>

                <div className='priceview'>
                    <div className='Oldpriceview'>Rs.{ele.old_price}</div>
                    <div className='Newpriceview'>Rs.{ele.new_price}</div>
                    <button className='Offerview'><div>{ele.discount}%off</div></button>
                </div>
                
                </div>
                <button className='buynowbtn' onClick={()=>Addcartproduct(ele.item_id,ele.category_name,ele.productcategory)}>Add Cart</button>  
                </div>
                
            </div>

            </>
        )
        })

        }
        </div>

            </>
        )
    }
   
   
   
   
   
   
    return(
    <>
    <Tophead/>
    {secondlist()}
    <div className="container" >
    
    <div className="sidefilter">
        
        <div>{sidefilter()}</div>
    </div>

    <div className="mainfilter">
       
        <div> {Mainmenu()}</div>
    </div>

    </div>
    <Footer/>
    </>
    )
}
export default Offers;