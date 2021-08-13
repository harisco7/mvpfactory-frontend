import Link from 'next/link';
import { useAppContext } from '../context/app';
import { DECREASE_COUNT, INCREASE_COUNT } from '../context/reducers/movie';

const IndexPage = () => {
  const { state, dispatch } = useAppContext();

  const handleIncrease = () =>
    dispatch({
      type: INCREASE_COUNT,
      payload: 3,
    });
  const handleDecrease = () =>
    dispatch({
      type: DECREASE_COUNT,
      payload: 5,
    });

  return (
    <>
      <h1>HOME</h1>
      <p>Counter: {state.count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};

export default IndexPage;
