import BreedCells from "./BreedCells";
import PropTypes from "prop-types";

const AnimalGrid = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22.3px] box-border gap-[22px] max-w-full text-center text-lg text-black font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-11 pb-[3px] relative">
        <div className="h-full w-[1440px] absolute !m-[0] top-[0px] bottom-[0px] left-[-13px]" />
        <div className="relative inline-block min-w-[74px] z-[1]">
          <b>{`Dogs `}</b>
          <span className="text-sm text-darkslategray-100">137</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[51px] pl-11 box-border max-w-full text-left text-base mq725:pl-[22px] mq725:pr-[25px] mq725:box-border">
        <div className="flex-1 grid flex-row items-start justify-start gap-[52px] max-w-full grid-cols-[repeat(4,_minmax(223px,_1fr))] mq725:gap-[26px] mq725:grid-cols-[minmax(223px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(223px,_387px))]">
          <div className="h-[261px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border gap-[12px]">
            <img
              className="self-stretch flex-1 relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className="relative z-[1]">
              <p className="m-0">
                <b>Huskies</b>
              </p>
              <p className="m-0 text-sm text-darkslategray-100">15</p>
            </div>
          </div>
          <div className="h-[261px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border gap-[12px]">
            <img
              className="self-stretch flex-1 relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-7@2x.png"
            />
            <div className="relative">
              <p className="m-0">
                <b>Labrador Retriever</b>
              </p>
              <p className="m-0 text-sm text-darkslategray-100">20</p>
            </div>
          </div>
          <BreedCells
            rectangle8="/rectangle-8@2x.png"
            germanShepherd="German shepherd"
            prop="25"
          />
          <BreedCells
            rectangle8="/rectangle-9@2x.png"
            germanShepherd="Bull Dog"
            prop="2"
          />
        </div>
      </div>
    </div>
  );
};

AnimalGrid.propTypes = {
  className: PropTypes.string,
};

export default AnimalGrid;
