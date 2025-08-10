import { Container, Row } from "react-bootstrap";
import banner from "../assets/banner.webp"
import img1 from "../assets/img-1.avif"
import img2 from "../assets/img-2.avif"
import img3 from "../assets/img-3.avif"
import "./StaticElement.css"


const StaticElem = () =>{
    return(
        <Container>
            <Row>
                <img src={banner} alt="banner" className="p-0" />
            </Row>
            <Row>
                <div className="images d-flex mt-3 mb-2">
                    <div className="img-1">
                       <img src={img1} alt="img1" className="img ms-1" /> 
                    </div>
                    <div className="img-2">
                       <img src={img2} alt="img2" className="img"/>
                    </div>
                    <div className="img-3">
                        <img src={img3} alt="img3" className="img" />
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default StaticElem ;