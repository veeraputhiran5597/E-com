import {useEffect,useState} from 'react';
import axios from 'axios';
import './Container.css';
import Banercarousel from "./BanerCarousel";
/* import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; */
import Slider  from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';







const Container=()=>
{



    const[groceriesarr,setgroceriesarr]=useState([])

    const[Homecategoryarr,setHomecategoryarr]=useState([])

    const[Electronicscategoryarr,setElectronicscategoryarr]=useState([])

    const[Kitchencategoryarr,setKitchencategory]=useState([])

    const[Mobilecategoryarr,setMobilecategoryarr]=useState([])

    const[Fashioncategoryarr,setFashioncategoryarr]=useState([])
    
    
   
    
    /* console.log(noOfImgToShow) */

    

    const Grocerycategory = async () => {
        await axios
          .get(" http://localhost:3000/Groceries_productcategory")
          .then((response) => setgroceriesarr(response.data))
          .catch((err) => console.log(err));
      };

      const Homecategory = async () => {
        await axios
          .get("http://localhost:3000/Home_productcategory")
          .then((response) => setHomecategoryarr(response.data))
          .catch((err) => console.log(err));
      };

      const Electronicscategory = async () => {
        await axios
          .get("http://localhost:3000/Electronics_productcategory")
          .then((response) => setElectronicscategoryarr(response.data))
          .catch((err) => console.log(err));
      };

      const Kitchencategory = async () => {
        await axios
          .get("http://localhost:3000/Kitchen_productcategory")
          .then((response) => setKitchencategory(response.data))
          .catch((err) => console.log(err));
      };

      const Mobilecategory = async () => {
        await axios
          .get("http://localhost:3000/Mobile_productcategory")
          .then((response) => setMobilecategoryarr(response.data))
          .catch((err) => console.log(err));
      };

      const Fashioncategory = async () => {
        await axios
          .get("http://localhost:3000/Fashion_productcategory")
          .then((response) => setFashioncategoryarr(response.data))
          .catch((err) => console.log(err));
      };

    
    
      useEffect(() => {
        Grocerycategory();
        Homecategory();
        Electronicscategory();
        Kitchencategory();
        Mobilecategory();
        Fashioncategory();
      }, []);


      /* console.log(Allarr)  */

      const Valuedispatch=useDispatch();

      const navigate = useNavigate();

      const Grocerycatpagechange=(productcategory)=>
      {
        navigate("/Groserypath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})    
      }

      const Homecatpagechange=(productcategory)=>
      {
        navigate("/Homeapplaincepath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})    
      }

      const Electronicscatpagechange=(productcategory)=>
      {
        navigate("/Electronicspath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})    
      }

      const Kitchencatpagechange=(productcategory)=>
      {
        navigate("/Kitchenapplincespath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})    
      }

      const Mobilecatpagechange=(productcategory)=>
      {
        navigate("/mobiespath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})    
      }

      const Fashioncatpagechange=(productcategory,Supcategory)=>
      {
        navigate("/Fashionpath")
        Valuedispatch({type:'up_Cat_Name',value:productcategory})  
        Valuedispatch({type:'Sup_up_Cat_Name',value:Supcategory})  
      }

      


 const Grocerycategoryview=()=>
     {
        return(
            <>            
            <div className='Catmainplace'>

            <div className='catheadwordplace'>
            <p className='catname'>Category Of <br/>Grocery</p>
            </div>
            
            <div className='catsubcontainer'>   
            <Slider slidesToShow={5} slidesToScroll={3} infinite={false} >   
               {groceriesarr.map((ele,ind)=>{
                return(
                    <>
                     <div className='categorybox' onClick={(e) => Grocerycatpagechange(ele.productcategory)} key={ind}>
                    
                    <div className='catimgplace'>
                    <img className='catcontainerimgs' src={ele.image} />
                    </div>

                    <div className='catdescription'>{ele.productcategory}</div>

                 </div>
                 </>                
                )
               }) 
               }
            </Slider>
            </div>
            </div>
            </>
        )  
    }

        const Homecategoryview=()=>
        {
           return(
               <>
               
               <div className='Catmainplace'>
               <div className='catheadwordplace'>
               <p className='catname'>Category Of <br/>HomeAppliances</p>
               </div>
               
               <div className='catsubcontainer'>   
               <Slider slidesToShow={5} slidesToScroll={3} infinite={false} >   
                  {Homecategoryarr.map((ele,ind)=>{
                   return(
                       <>
                        <div className='categorybox' onClick={(e) => Homecatpagechange(ele.productcategory)} key={ind}>
   
                       <div className='catimgplace'>
                       <img className='catcontainerimgs' src={ele.image} />
                       </div>
   
                       <div className='catdescription'>{ele.productcategory}</div>
   
                    </div>
                    </>                
                   )
                  }) 
                  
                  }
   
               </Slider>
               </div>
               </div>
               </>
           )  }



    const Electronicscategoryview=()=>
     {
        return(
            <>            
            <div className='Catmainplace'>

            <div className='catheadwordplace'>
            <p className='catname'>Category Of <br/>Electronics</p>
            </div>
            
            <div className='catsubcontainer'>   
            <Slider slidesToShow={5} slidesToScroll={3} infinite={false} >   
               {Electronicscategoryarr.map((ele,ind)=>{
                return(
                    <>
                     <div className='categorybox' onClick={(e) =>Electronicscatpagechange(ele.productcategory)} key={ind}>
                    
                    <div className='catimgplace'>
                    <img className='catcontainerimgs' src={ele.image} />
                    </div>

                    <div className='catdescription'>{ele.productcategory}</div>

                 </div>
                 </>                
                )
               }) 
               }
            </Slider>
            </div>
            </div>
            </>
        )  
    }

    const Kitchencategoryview=()=>
     {
        return(
            <>            
            <div className='Catmainplace'>

            <div className='catheadwordplace'>
            <p className='catname'>Category Of <br/>KitchenAppliances</p>
            </div>
            
            <div className='catsubcontainer'>   
            <Slider slidesToShow={5} slidesToScroll={3} infinite={false} >   
               {Kitchencategoryarr.map((ele,ind)=>{
                return(
                    <>
                     <div className='categorybox' onClick={(e) =>Kitchencatpagechange(ele.productcategory)} key={ind}>
                    
                    <div className='catimgplace'>
                    <img className='catcontainerimgs' src={ele.image} />
                    </div>

                    <div className='catdescription'>{ele.productcategory}</div>

                 </div>
                 </>                
                )
               }) 
               }
            </Slider>
            </div>
            </div>
            </>
        )  
    }

    const Mobilecategoryview=()=>
     {
        return(
            <>            
            <div className='Catmainplace'>

            <div className='catheadwordplace'>
            <p className='catname'>Branded Of <br/>Mobiles</p>
            </div>
            
            <div className='catsubcontainer'>   
            <Slider slidesToShow={5} slidesToScroll={3} infinite={false} >   
               {Mobilecategoryarr.map((ele,ind)=>{
                return(
                    <>
                     <div className='categorybox' onClick={(e) =>Mobilecatpagechange(ele.productcategory)} key={ind}>
                    
                    <div className='catimgplace'>
                    <img className='catcontainerimgs' src={ele.image} />
                    </div>

                    <div className='catdescription'>{ele.productcategory}</div>

                 </div>
                 </>                
                )
               }) 
               }
            </Slider>
            </div>
            </div>
            </>
        )  
    }

    const Fashioncategoryview=()=>
     {
        return(
            <>            
            <div className='Catmainplace'>

            <div className='catheadwordplace'>
            <p className='catname'>Category Of <br/>Fashion</p>
            </div>
            
            <div className='catsubcontainer'>   
            <Slider slidesToShow={5} slidesToScroll={3} infinite={false} >   
               {Fashioncategoryarr.map((ele,ind)=>{
                return(
                    <>
                     <div className='categorybox' onClick={(e) =>Fashioncatpagechange(ele.productcategory,ele.Supcategory)} key={ind}>
                    
                    <div className='catimgplace'>
                    <img className='catcontainerimgs' src={ele.image} />
                    </div>

                    <div className='catdescription'>{ele.Supcategory}</div>

                 </div>
                 </>                
                )
               }) 
               }
            </Slider>
            </div>
            </div>
            </>
        )  
    }




    return(
        <>
        
        <div>
            <Banercarousel/>
        </div>
       
         <div className='catMaincont'> 
         
         <div>
         {Grocerycategoryview()} 
         </div> 

         <div>
         {Homecategoryview()} 
         </div> 

        <div>
        {Electronicscategoryview()}
        </div>

        <div>
            {Kitchencategoryview()}
        </div>

        <div>
            {Mobilecategoryview()}
        </div>

        <div>
            {Fashioncategoryview()}
        </div>
        </div>

        </>
    )

    
}

export default Container;