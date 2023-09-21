const Form = ({ setCount, count }) => {
  return (
    <>
      <input value={count}></input>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </>
  );
};

export default Form;
