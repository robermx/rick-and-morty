export const CardsRick = ({ char }) => {
  return (
    <>
      {char.map((item) => (
        <div className="card" key={item.id}>
          <img className="rick" src={item.image} alt="Rick" />
          <h2 className="mb-0 mt-1">{item.name}</h2>
          <h3 className="mt-1">{item.species}</h3>
        </div>
      ))}
    </>
  );
};
