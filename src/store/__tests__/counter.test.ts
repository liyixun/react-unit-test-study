import {} from "@testing-library/react";
import { CounterReducer, CounterAction } from '../slice/counter';

describe('测试counter state', () => {
  it('正确返回初始值', () => {
    expect(CounterReducer(undefined, {}).value).toEqual(0);
  });

  it('正确返回设置初始值', () => {
    expect(CounterReducer({ value: 10 }, {}).value).toEqual(10);
  });


  it('正确响应increment方法', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.increment()).value).toEqual(11);
  });

  it('正确响应decrement', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.decrement()).value).toEqual(9);
  });

  it('正确响应incrementByMount方法', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.incrementByMount(10)).value).toEqual(20);
  });

  it('正确响应decrementByMount方法', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.decrementByMount(10)).value).toEqual(0);
  });

});