const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png";
  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;