import React from 'react'
import './Content.css'
import 'antd/dist/antd.css';
import { Tabs, Radio } from 'antd';
import Questions  from '../Questions/Questions';
import DropContent from '../Dropdown/Dropdown';
const list= ['全部', 'Html', 'Css', 'Js', 'React', 'Vue', 'Node', '面试']
const { TabPane } = Tabs;

class Content extends React.Component {
    constructor(props:any) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <div className="content">
          <Tabs defaultActiveKey="0" tabPosition="top" style={{ height: 400 }}>
            {[...Array.from({ length: 8 }, (v, i) => i)].map(i => (
              <TabPane tab={list[i]} key={i} >
                <div className="Dropbox"><DropContent/></div>
                  <Questions/>
              </TabPane>
            ))}
          </Tabs>
        </div>
      );
    }
  }
export default Content