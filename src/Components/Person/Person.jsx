import "./Person.scss";

const Person = ({ name, position, avatar }) => {
  return (
    <div className="container">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="description">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>
    </div>
  );
};
export default Person;
