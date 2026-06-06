import "../assets/css/tag.css";

export default function Tag({ name, hasfound, visiblity, posX, posY , onclick , data}) {
  if (posX === undefined || posY === undefined) return null;
  if (!visiblity) return null;
  if (hasfound) return null;
  return (
    <div className="Character_Select">
      <button
        className="Sence_Selector"
        style={{
          position: "absolute",
          top: posY + 20,
          left: posX - 20,
        }}
        onClick={onclick}
        data-user={data}
      >
        {name}
      </button>
    </div>
  );
}
