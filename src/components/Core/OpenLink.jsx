import githubLogo from '../../assets/Github.svg';


const OpenLink = ({ redirectURL, logoImage }) => {
    return (
        <>
            <a href={redirectURL} target="_blank">
            <img src={logoImage} className="logo" alt="Github logo" />
            </a>
        </>
    );
};

export default OpenLink;