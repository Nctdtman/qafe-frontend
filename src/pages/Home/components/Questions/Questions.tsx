import React from 'react'
import './Questions.css'

class Questions extends React.Component<any, any> {
    constructor(props:any) {
      super(props);
      this.state = {
        list:[
          {}

        ]
      };
    }
    componentDidMount(){
      fetch("https://www.fastmock.site/mock/8260942b163744df9fe8416f5e54fe4d/question/api/questionList")
      .then(res => res.json())
      .then(data => {
          this.setState({
              list:data
          })
         
      })
  }

    render() {
      return (
        <div>
           {
             this.state.list?.data?.map((element:any,index:number) =>{
                       return(
                         
                        <div className="questionItem" key={index} >
                        <span className="difficulty">{element.diffculty}</span>
                        <span className="question-title">{element.id}.{element.question }</span>
                        <span className={`iconfont check-icon${element.complete === 'true' ? '-active' : ''}` } >&#xe6e6;</span>
                        </div>
                       )
                   })
               }
        </div>
        
      );
    }
  }
export default Questions