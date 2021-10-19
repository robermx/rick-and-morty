export const Pagination = ({ prev, next, onPrev, onNext }) => {
  const handlePrev = () => {
    onPrev();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="mt-2">
      {prev ? (
        <button className="btn btn-gray me-1" onClick={handlePrev}>
          Prev
        </button>
      ) : null}
      {next ? (
        <button className="btn btn-gray" onClick={handleNext}>
          Next
        </button>
      ) : null}
    </nav>
  );
};
