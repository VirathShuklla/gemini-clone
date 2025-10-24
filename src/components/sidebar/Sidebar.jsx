import './Sidebar.css';
import {assets} from '../../assets/assets';

export default function SideBar(){
    return(
        <div className="sidebar">

            <div className='top'>
                <img src={assets.menu_icon}/>
            </div>

            <div className='bottom'>

            </div>

        </div>
    )
}