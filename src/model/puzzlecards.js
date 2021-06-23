
import request  from '../util/request'

export default {
    namespace: 'puzzlecards',
    state:{
        data: [
            
          ],
          counter:0
    },
    effects:{
        *queryInitCards(_,sagaEffects){
            const { call, put } = sagaEffects;
            const endPointURI = 'https://mini.hundun0.com/GetBaseType.aspx'
            const puzzle = yield call(request,endPointURI)
            console.log(puzzle.data)
            yield put({
                type:'cleanData'
            })
            yield put({
                type:'addNewCards',
                payload:puzzle.data
            })
        }
    },
    reducers:{
        cleanData(_,{}){
             return {
                 data: [] ,
                 counter:0
             } 
        },
        addNewCards(state,{payload:newCards}){
            const nextCounter = state.counter + newCards.length;
            const nextData = state.data.concat(newCards);
            return {
              data: nextData,
              counter: nextCounter,
            };
        },
        addNewCard(state,{payload:newCard}){
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
              data: nextData,
              counter: nextCounter,
            };
        }
    }
        
    
  };