import Footer from '../components/Home/Footer.jsx'
import Body from '../components/Home/Body.jsx'
import OpenLink from '../components/Core/OpenLink.jsx'

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from '../assets/Github.svg';


const Home = () => {
    return (
        <div>
            <OpenLink redirectURL={"https://vite.dev"} logoImage={viteLogo}/>
            <OpenLink redirectURL={"https://react.dev"} logoImage={reactLogo}/>
            <OpenLink redirectURL={"https://github.com/Renevc14/M7_REACT_TP1"} logoImage={githubLogo}/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;