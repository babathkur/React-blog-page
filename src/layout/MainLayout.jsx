import { Link, Outlet } from 'react-router';
// import logo from '../assets/logo.svg';

const MainLayout = () => {
    return (
        <>
            <nav>
                <h3>virender</h3>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/author/1">User 1</Link>
                    <Link to="/author/2">User 2</Link>
                </div>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}
export default MainLayout;