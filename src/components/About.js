import { Link } from 'react-router-dom';
import abtImg from '../img/bg.jpg'
const About = () =>{
    return (
        <div className="about">
            <img src={abtImg} />
            <div className="abt-cont">
                <h1>Order your favourite food from where you're</h1>
                <p>Choose from a diverse menu featuring a delectable array of restaurents crafted with the finest dishes and culinary expertise. Our mission is to satisfy your craving and elevate your dining at home with delicious meal on time.</p>
                <Link to="/about">View Restaurents</Link>
            </div>
        </div>
    );
}

export default About;