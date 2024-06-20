import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

const Footer= () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
  
    function goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  
    return (
   <Container fluid >
         
       <div className="copyright" color="white" style={{color:'white'}} >&copy; 2024 Corporate. All Right Reserved.</div>

       {
         showTopBtn && (
           <div className="go-top" onClick={goTop}></div>
         )
       }
       
    
     </Container>
  
    );
};

export default Footer;