import { NavLink , Outlet } from 'react-router-dom';

function NavMenu()
{
    return (
        <>
        <nav>
            <ul>
                <li><NavLink to="/">          Home        </NavLink></li>
                <li><NavLink to="/about">     About       </NavLink></li>
                <li><NavLink to="/articles">  Articles    </NavLink></li>
            </ul>
        </nav>
        <Outlet />
        </>
    );

}
export default NavMenu;