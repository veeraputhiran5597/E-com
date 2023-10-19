import Slider  from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect,useState} from 'react';
import axios from 'axios';
import './Banercarousel.css';



const Banercarousel=()=>

      {

        const[banerimgarr,setbanerimgarr]=useState([])



        const Banerimgdata = async () => {
            await axios
              .get(" http://localhost:3000/Banerimg")
              .then((response) => setbanerimgarr(response.data))
              .catch((err) => console.log(err));
          };
        
          useEffect(() => {
            Banerimgdata();
          }, []);
    
      
          return(
            <>
            <div style={{margin:"30px"}}>
            <Slider autoplay={true} autoplaySpeed={2000} dots initialSlide={2}>
                
                    
               {banerimgarr.map((ele,ind)=>{
                return(
                    <>
                    <div key={ind}>
                    <img className='banerimagessize' alt='img1' src={ele.img_src}/>
                   </div>
                    </>
                )
               }) 
               
               }

            </Slider>
            </div>
            </>
        )
      }
      export default Banercarousel;