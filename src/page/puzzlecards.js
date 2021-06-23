import React, { Component } from 'react';
import { Card ,Button ,Image } from 'antd';


import { connect } from 'dva';
const namespace = 'puzzlecards'

const mapstate2Props =(state)=>{
    const cardList = state[namespace].data 
    return {
        cardList
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        onDidMount: () => {
            dispatch({
              type: `${namespace}/queryInitCards`,
            });
          },
        onClickAdd:(newCard)=>{
            const action={
                type: `${namespace}/addNewCard`,
                payload:newCard 
            };
            dispatch(action);
        }
    }
}

@connect(mapstate2Props,mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
 

    componentDidMount() {
        this.props.onDidMount();
      }
 
  render() {
    return (
        <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.brandName}</div>
                <div style={{display:'flex',alignItems:'center'}}>
                  <strong>A: {card.imgUrl}</strong>
                  <Image
      width={50}
      preview={false}
      style={{marginLeft:140}}
      src={'https://mini.hundun0.com/'+card.imgUrl}
    />
                </div>
              </Card>
            );
          })
        }
        
      </div>
    );
  }
}