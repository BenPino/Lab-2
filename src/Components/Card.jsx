export default function Card({ image, location, name, rating, price }) {
  const ratingValue = parseFloat(rating);

  const ratingColor = ratingValue >= 4 ? "green" : "red";
  return (
    <div>
      <img src={image} alt="" width="166px" />
      <h2 style={{ color: "black" }}>{location}</h2>
      <h3 style={{ color: "grey" }}>{name}</h3>
      <h4 style={{ color: ratingColor }}>{rating}</h4>
      <p style={{ color: "GrayText" }}>{price}</p>
    </div>
  );
}
