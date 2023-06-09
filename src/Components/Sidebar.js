import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import { SubnavData } from './SubnavData'
import { SubnavTwoData } from './SubnavTwoData'

const Sidebar = ({ sidebar }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex1, setActiveIndex1] = useState(null);

    return (
        <div className={sidebar ? "sidebar sidebar-open" : "sidebar"}>
            <ul className='SideBarList'>
                {SidebarData.map((val, key) => {
                    const matchingSubnav = SubnavData.some((item => item.name == val.title));
                    return (
                        <li key={key} className='row'
                            id={window.location.pathname == val.link ? "active" : ""}
                            onMouseEnter={() => {
                                setActiveIndex(key)
                            
                            }}
                            onMouseLeave={() => {
                                setActiveIndex(null)
                            }}
                        >

                            {" "}
                            <div>{val.title}</div>
                            {matchingSubnav && activeIndex === key && (
                                <div className="sidebar2">
                                    <ul className="subnav">
                                        {SubnavData.filter((item) => item.name == val.title).map((val, key) => {
                                            const matchingSubnav2 = SubnavTwoData.some((item) => item.name == val.title);

                                            return (

                                                <li key={key} className='row-2'
                                                    id={window.location.pathname == val.link ? "active-2" : ""}
                                                    onMouseEnter={() => {
                                                        setActiveIndex1(key)
                                            
                                                    }}
                                                    onMouseLeave={() => {
                                                        setActiveIndex1(null)
                                                     
                                                    }}
                                                >
                                                    {" "}
                                                    <div>{val.title}</div>
                                                    {
                                                        matchingSubnav2 && activeIndex1 == key && (
                                                            <div className="sidebar3">
                                                                <ul className='subnav subnav3'>
                                                                    {SubnavTwoData.filter((item) => item.name == val.title).map((val, key) => {
                                                                        return (
                                                                            <li key={key} className='row-3'
                                                                                id={window.location.pathname == val.link ? "active-3" : ""}
                                                                                onClick={() => {
                                                                                  
                                                                                }}
                                                                            >
                                                                                {" "}
                                                                                <div>{val.title}</div>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>

                                                            </div>
                                                        )
                                                    }
                                                </li>
                                            )

                                        })}
                                    </ul>
                                </div>

                            )}
                        </li>
                     
                    )
                })}
            </ul>
          
        </div>
    )
}

export default Sidebar



