import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
const handleChangeQuestions = () => {
    
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <div onClick={handleChangeQuestions}>仅显示未完成</div>
    </Menu.Item>
  </Menu>
);

class DropContent extends React.Component {
    constructor(props:any) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link iconfont" onClick={e => e.preventDefault()}>
    &#xe877;
    </a>
   

     </Dropdown>
      );
    }
  }
export default DropContent