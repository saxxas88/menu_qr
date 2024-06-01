import "../Menu.css";
export default function Portata({ portata, elenco, ...props }) {
  return (
    <>
      <div className="container_portata">
        <p className="title_portata">{portata}</p>
        {elenco ? (
          elenco.map((el, i) => (
            <Pietanza key={`${el.title}${i}`} title={el.title} />
          ))
        ) : (
          <div></div>
        )}
        <div className="separator"></div>
      </div>
    </>
  );
}

const Pietanza = ({ title, ...props }) => {
  return (
    <div className="container_pietanza">
      <p>{title}</p>
    </div>
  );
};
