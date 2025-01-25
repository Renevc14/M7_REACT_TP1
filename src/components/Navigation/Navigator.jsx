import { Link } from "react-router";
const Navigator = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Tarea" className="nav-link">Tarea</Link>

        </nav>
    )
}
export default Navigator;