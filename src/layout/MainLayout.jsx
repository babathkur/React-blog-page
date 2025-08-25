import { Link, Outlet } from 'react-router';
// import logo from '../assets/logo.svg';

const MainLayout = () => {
    return (
        <>
            <nav>
                <h3 style={{
                    color: "white",
                    fontSize: "0px",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "20px 0",
                }}>Blog</h3>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/user/1">User 1</Link>
                    <Link to="/user/2">User 2</Link>
                </div>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}
export default MainLayout;