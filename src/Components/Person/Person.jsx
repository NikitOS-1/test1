import "./Person.scss";

const Person = ({ name, position, avatar }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="Avatar" />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{position}</h2>
      </div>
    </div>
  );
};
export default Person;
