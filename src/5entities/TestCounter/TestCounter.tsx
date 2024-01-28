import { decrement, increment } from './counterSlice';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';

export function TestCounter() {
  const count = useAppSelector((state) => state?.counterSlice.value);

  // The `state` arg is correctly typed as `RootState` already
  const dispatch = useAppDispatch();
  const handlerIncr = () => {
    dispatch(increment());
  };
  const handlerDec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h2>{count}</h2>
      <button style={{ background: 'green' }} onClick={handlerIncr}>
        increment
      </button>
      <button style={{ background: 'red' }} onClick={handlerDec}>
        decrement
      </button>
    </div>
  );
}
