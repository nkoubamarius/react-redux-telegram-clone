import React from 'react'
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarThread from './SidebarThread';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon"/>
                    <input placeholder="Search" className="sidebar__input" />
                </div>
                <IconButton variant="outlined" id="sidebar__button">
                    <BorderColorOutlinedIcon />
                </IconButton>
               
            </div>
            <div className="sidebar__threads">
                <SidebarThread/>
            </div>
            <div className="sidebar__bottom">
                <Avatar className="sidebar__bottom__avatar"/>
                <IconButton variant="outlined" >
                    <PhoneOutlinedIcon/>
                </IconButton>
                <IconButton variant="outlined" >
                    <QuestionAnswerOutlinedIcon/>
                </IconButton>
                <IconButton variant="outlined" >
                    <SettingsOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
