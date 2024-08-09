import PropTypes from "prop-types";

const BreedCells = ({ className = "", rectangle8, germanShepherd, prop }) => {
  return (
    <div
      className={`h-[261px] flex flex-col items-start justify-start gap-[12px] text-left text-base text-black font-inter ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle8}
      />
      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
        <div className="relative">
          <p className="m-0">
            <b>{germanShepherd}</b>
          </p>
          <p className="m-0 text-sm text-darkslategray-100">{prop}</p>
        </div>
      </div>
    </div>
  );
};

BreedCells.propTypes = {
  className: PropTypes.string,
  rectangle8: PropTypes.string,
  germanShepherd: PropTypes.string,
  prop: PropTypes.string,
};

export default BreedCells;
