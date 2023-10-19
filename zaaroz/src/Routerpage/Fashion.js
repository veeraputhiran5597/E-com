import Tophead from "../Frontpage/Header";
import './Routerpage.css';
import {useEffect,useState} from 'react';
import axios from "axios";
import Footer from "../Frontpage/Footer";
import StarIcon from '@mui/icons-material/Star';
import {useSelector } from "react-redux/es/hooks/useSelector";


const Fashion=()=>
{
  const Globleselector=useSelector(state=>state)
  const Globlevalue=Globleselector.Catpage_routing.Cat_Name;
  const Globlesubvalue=Globleselector.Catpage_routing.Sup_Cat_Name;

    const [FashionArr,setfashionArr]=useState([])

    const[filterArray,setFilterarray]=useState([])

    const[fashionCat,setCategories]=useState([])




    const fixArray=async()=>
    {
        await axios
        .get("http://localhost:3000/Fashion")
          .then((response) => setfashionArr(response.data))
          .catch((err) => console.log(err));

    };

    const catArray=async()=>
    {
        await axios
        .get("http://localhost:3000/Fashion_productcategory")
          .then((response) => setCategories(response.data))
          .catch((err) => console.log(err));

    };

    useEffect(() => {
        fixArray();
        catArray();
      }, []);




    const[malealignCategories,malesetalignCategories]=useState("")

    const[femalealignCategories,femalesetalignCategories]=useState("")


    const[alignoffer,setalignoffer]=useState("")

    const[alignprice,setalignprice]=useState("")

    const[alignrating,setalignrating]=useState("")



    const filtersFunctions=()=>
      {
        let Filterarry=FashionArr.map((ele)=>ele);

        if(malealignCategories)
        {
          Filterarry=Filterarry.filter((ele)=>{return ele.productcategory==="Men"})
          .filter((ele)=>{return ele.Supcategory===malealignCategories})
        }

        if(femalealignCategories)
        {
          Filterarry=Filterarry.filter((ele)=>{return ele.productcategory==="Women"})
          .filter((ele)=>{return ele.Supcategory===femalealignCategories})
        }

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

        setFilterarray(Filterarry)
    
      }

      useEffect(()=>{
        filtersFunctions()        
      },[alignoffer,alignprice,alignrating,malealignCategories,femalealignCategories])

      useEffect(()=>{
        if(Globlevalue==="Men")
        {
          malesetalignCategories(Globlesubvalue)
          filtersFunctions()
        }
        if(Globlevalue==="Women")
        {
          femalesetalignCategories(Globlesubvalue)
          filtersFunctions()
        }         
      },[FashionArr])


    const secondlist=()=>
    {
        return(
            <>
            <div className="secondlist">
                <button className="secbtn">Top Offers</button>
                <button className="secbtn">Groceries</button>
                <button className="secbtn">Mobiles</button>
                <button className="secbtn">Electronics</button>
                <button className="secbtn">Home</button>
                <button className="secbtn">Kitchen Applinces</button>
            </div>

            </>
        )
    }

    const clrBtnfn=()=>
      {
        setalignoffer("")

      setalignprice("")

      setalignrating("")

      malesetalignCategories("")

      femalesetalignCategories("")

     }


    const sidefilter=()=>
    {
        return(
            <>
            <div style={{height:"800px"}}>
            <h1>filter</h1>

            <h2>Item Categories:</h2>
            
            <h4>Men</h4>
           
           { fashionCat.filter((ele)=>{return ele.productcategory==="Men"}).map((ele,ind)=>{
            
            return ( <div style={{display:"flex"}} key={"mykey"+ind}>

                    <input type="checkbox" value={ele.Supcategory} checked={malealignCategories===ele.Supcategory}  
                    
                    onChange={(e)=>{femalesetalignCategories("");malesetalignCategories(e.target.value)}}/><div> {ele.Supcategory}</div>   

                    </div>)
                })}

            <h4>Women</h4>
           
           { fashionCat.filter((ele)=>{return ele.productcategory==="Women"}).map((ele,ind)=>{
            
            return ( <div style={{display:"flex"}} key={"mykey"+ind}>

                    <input type="checkbox" value={ele.Supcategory} checked={femalealignCategories===ele.Supcategory}  
                    
                    onChange={(e)=>{malesetalignCategories("");femalesetalignCategories(e.target.value)}}/><div> {ele.Supcategory}</div>   

                    </div>)
                })}    
           
           
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
             <h1>Fashion</h1>
             <div className="Maincont" >
        {(filterArray.length===0?FashionArr:filterArray).map((ele,ind)=>{
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
                    <button className='buynowbtn'>Buy Now</button>  
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
export default Fashion;