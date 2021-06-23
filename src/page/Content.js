

import React from 'react';
import ShoppingList from './ShoppingList';
import { Tabs } from 'antd'
import { Tree } from 'antd';

const { TabPane } = Tabs;
const { TreeNode } = Tree



const MyInput = ({ value = '', onChange }) => (
    <input onChange={onChange} value={value}></input>
);


class Content extends React.Component {




    state = {
        text: '',
        activeKey: '1',
        expandedKeys: [],

        
    }


    // 接收原本的展开事件，在 state 中记录 expandedKeys
onExpand = (expandedKeys) => {
    this.setState({ expandedKeys });
  }
  
  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];
  
    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }
    onTabChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    resetInput = () => {
        this.setState(
            {
                text: '',
                activeKey: "2"
            }
        )
    }

    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(event.target.value);
    }

    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div>
                <ShoppingList name="zhanshang"></ShoppingList>
          

             

            </div>
        )
    }
}


export default Content;