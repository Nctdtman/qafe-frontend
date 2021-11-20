import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
var date = new Date()
var m:number = date.getMonth()+1;
var d:number = date.getDate();
let month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const toquestion = () => {

}
const Header = () => {
    return(
        <div className='wrapper'>
            <div className="search">
              <span className="progress_icon iconfont">&#xe61f;</span>
                <div className="search_content">
                  <span className="search_icon iconfont">&#xe741;</span>
                  <input className="search_input"
                      type="text"
                    placeholder="搜索题目"/>
                </div>
                <span className="question_icon iconfont">&#xe6a0;</span>
            </div>
            <div className="calendar">
                    <span className="month">{month[m-1]}</span>
                    <span className="day">{d}</span>
                </div>
            <div className="days-question">
               <div className="days-question_info">
                  <span className="days-question_info_dec">每日一题</span>
                  <div className="question-number">1.promise</div>
               </div> 
            </div>
            <Link to='id'><span className="question_forward iconfont">&#xe608;</span></Link>
            
        </div>
    )
}
  
export default Header