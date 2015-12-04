import {handleActions} from 'redux-actions';
import Immutable, {OrderedMap} from 'immutable';
import {ActionTypes} from '../constants';

export default handleActions({
  [ActionTypes.DATA]: state => {
      return {
        ...state,
        loading: true
      }
  },
  [ActionTypes.DATA_SUCCESS]: (state, action) => {
    console.log('ads')
    console.log(action.result)
    return {
    ...state,
    loading: false,
    loaded: true,
    data: action.result
  }},
  [ActionTypes.DATA_FAILED]: state => {
    console.log('ads')
    return {
    ...state,
    loading: false,
    loaded: false
  }}

  // ,
  // [ActionTypes.DEHYDRATE]: state => {
  //   console.log('ads')
  //   return {
  //   store: state.store.valueSeq().toJS()
  // }}
  // ,
  //
  // [ActionTypes.ASD]: (state, action) => {
  //   console.log('adsd')
  //   console.log(action)
  //   console.log(state)
  //   return {
  //     ...state,
  //     store: state.store.set('asd', {'hell': 'yeah'})
  // }},
  //
  // [ActionTypes.REHYDRATE]: state => ({
  //   store: new OrderedMap().withMutations(store => {
  //     state.store.forEach(item => {
  //       store.set(item.id, Immutable.fromJS(item));
  //     });
  //   })
  // }),
  //
  // [ActionTypes.GET_USER]: (state, action) => {
  //   if (!action.payload || action.error) return state;
  //
  //   const {payload} = action;
  //
  //   return {
  //     ...state,
  //     store: state.store.set(payload.login, Immutable.fromJS(payload))
  //   };
  // }
}, {
});