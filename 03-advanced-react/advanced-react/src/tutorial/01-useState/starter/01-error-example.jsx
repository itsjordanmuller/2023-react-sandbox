const ErrorExample = () => {
  let count = 0;

  const increaseCount = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h2>useState error example</h2>
      <h3>Count: {count}</h3>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
