export const Filter = ({ text, setText }) => {
  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} className="input" type="text" />
      </form>
    </div>
  );
};
