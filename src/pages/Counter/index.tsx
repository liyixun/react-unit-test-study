import { Button, InputNumber } from "antd";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { CounterAction } from "../../store/slice/counter";

export default function Counter() {
  const count = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0);

  const addOne = useCallback(() => {
    dispatch(CounterAction.increment());
  }, [dispatch]);

  const reduceOne = useCallback(() => {
    dispatch(CounterAction.decrement());
  }, [dispatch]);

  const add = useCallback(() => {
    dispatch(CounterAction.incrementByMount(amount));
  }, [dispatch, amount]);

  const reduce = useCallback(() => {
    dispatch(CounterAction.decrementByMount(amount));
  }, [dispatch, amount]);

  return (
    <div>
      <Button type="primary" onClick={addOne} data-testid="addOne">
        加一
      </Button>
      <Button type="primary" onClick={reduceOne} data-testid="reduceOne">
        减一
      </Button>
      <InputNumber
        style={{ width: 200 }}
        value={amount}
        onChange={value => setAmount(value)}
      />
      <Button type="primary" onClick={add} data-testid="addResult">
        加结果
      </Button>
      <Button type="primary" onClick={reduce} data-testid="reductResult">
        减结果
      </Button>
      <span>结果：</span>
      <span data-testid="result">{count.value}</span>
    </div>
  );
}
