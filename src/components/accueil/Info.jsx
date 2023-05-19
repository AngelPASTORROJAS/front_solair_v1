import layer from "./../../assets/images/Layer.svg"
const Info = () => {
  return (
    <>
      <div className="info">
        <p className="titre1">comment ça marche</p>
        <div className="center-items">
          <div className="info-item">
          <img src={layer} alt="serré de mains" />
          <p>Lorem ipsum dolor sit amet consectetur. Eget adipiscing diam id est semper malesuada mauris. Ac montes cum eget faucibus.</p>
          </div>
          <div className="info-item">
          <img src={layer} alt="serré de mains" />
          <p>Lorem ipsum dolor sit amet consectetur. Eget adipiscing diam id est semper malesuada mauris. Ac montes cum eget faucibus.</p>
          </div>
          <div className="info-item">
          <img src={layer} alt="serré de mains" />
          <p>Lorem ipsum dolor sit amet consectetur. Eget adipiscing diam id est semper malesuada mauris. Ac montes cum eget faucibus.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
