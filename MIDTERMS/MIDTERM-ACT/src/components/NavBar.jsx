import {Link} from 'react-router'
const NavBar=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/StudentDetails">Student Details</Link>
        <Link to="/StudentPage">Student Page</Link>
        </>
    );
}
export default NavBar;