import "./MatchCards.css";

export function CardTextElements({ value, color, icons }) {
  return (
    <div className="inline">
      <img className="icons" src={icons} alt={value} />
      <p className={color}>{value}</p>
    </div>
  );
}

export default function MatchCards({
  time,
  date,
  versus,
  img,
  city,
  playersLeft,
  viewMatch,
}) {
  return (
    <div
      onClick={viewMatch}
      onKeyDown={viewMatch}
      role="button"
      tabIndex={0}
      className="match-card"
    >
      <div className="image">
        <img src={img} alt="card-background" className="card-background" />
      </div>

      <div className="text">
        <CardTextElements
          value={city}
          color="white"
          icons="src/img/icons/localisation-white.png"
        />
        <CardTextElements
          value={date}
          color="white"
          icons="src/img/icons/calendar-white.png"
        />
        <CardTextElements
          value={time}
          color="grey"
          icons="src/img/icons/schedule-grey.png"
        />
        <CardTextElements
          value={versus}
          color="grey"
          icons="src/img/icons/versus-grey.png"
        />
        <CardTextElements
          value={`${playersLeft} Players Left`}
          color="grey"
          icons="src/img/icons/players-left-grey.png"
        />
      </div>
    </div>
  );
}
