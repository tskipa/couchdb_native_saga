import * as Types from './action_types';

export const onAsyncRequest = () => {
  return {type: Types.ASYNC_REQUEST}
}

export const onDecrement = () => {
  return {type: Types.DECREMENT}
}

export const onIncrement = () => {
  return {type: Types.INCREMENT}
}

export const onIncrementAsync = () => {
  return {type: Types.INCREMENT_ASYNC}
}
