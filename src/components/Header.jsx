import React from 'react'
// import PropTypes from 'prop-types'
import style from"./header.module.scss"
import { IoCalendarSharp } from "react-icons/io5"; /*місяць*/
import { FaCalendarDays } from "react-icons/fa6"; /*тиждень*/
import { FaCalendarDay } from "react-icons/fa6";/*день*/ 


function Header(props) {
  return (
    <header className={style.wrapper}>
        <div className={style.iconBar}>
            <IoCalendarSharp/>
            <h3>My Calendar</h3>

        </div>
        <nav>
            <a href="" className= {style.link}>Main</a>
            <a href="" className= {style.link}><IoCalendarSharp/>Month</a>
            <a href="" className= {style.link}><FaCalendarDays/>Week</a>
            <a href="" className= {style.link}><FaCalendarDay/>Day</a>
        </nav>

    </header>
  )
}

// Header.propTypes = {}

export default Header
