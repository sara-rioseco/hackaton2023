import './sidebar.css';
import SideBarUser from '../sidebarUser/sidebar-user';
import SideBarItem from '../sidebarItem/sidebar-item';

export function SideBar({ userName, item1Name, item2Name, item3Name }) {
    return (
        <>
            <div className='sidebarTop'> </div>
            <div className='sidebarContent'>
                <SideBarUser userName={userName} />
                <SideBarItem itemName={item1Name} />
                <SideBarItem itemName={item2Name} />
                <SideBarItem itemName={item3Name} />
            </div>
        </>
    );
}
