import './Footer.css';

const Footer=()=>
{
    return(
        <>
       <div className='Footerpage'>
        
        <div className='footercontainers' >
        <h1 className='Footcompname'><span className='firstlerttefooter'>Z</span>aaroz</h1>
        <div className='Address'>Address :</div>
        <div className='Address'>No.12,</div>
        <div className='Address'>Ekattuthangal,</div>
        <div className='Address'>Chennai-600032.</div>
        </div>

        <div className='footercontainers'>
            <div className='Footername'>Get In Touch</div>
            <br/>
            <div className='Address'>+91 9500671850</div>
            <div className='Address'>veeraputhiran5597@gmail.com</div>
        </div>

        <div className='footercontainers'>
            <div className='Footername'>Created By</div>
            <br/>
            <div className='Address'>S.Veeraputhiran</div>
            
        </div>

        <div className='footercontainers'>
           <img className='Footerimgsize' src='https://www.pngall.com/wp-content/uploads/2016/06/Ecommerce-PNG-Pic.png' />            
        </div>
        
       </div>
        </>
    )
}

export default Footer;