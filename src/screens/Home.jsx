import Logo from '../components/Home/Logo.jsx'
import Footer from '../components/Home/Footer.jsx'
import Body from '../components/Home/Body.jsx'
import Github from '../components/Home/Github.jsx'

const Home = () => {
    return (
        <div>
            <Logo/>
            <Github/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;