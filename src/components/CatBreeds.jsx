import PropTypes from "prop-types";

const CatBreeds = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[43px] pl-11 box-border max-w-full mq725:pl-[22px] mq725:pr-[21px] mq725:box-border ${className}`}
    >
      <div className="flex-1 grid flex-row items-start justify-start gap-[60px] max-w-full grid-cols-[repeat(4,_minmax(217px,_1fr))] mq725:gap-[30px] mq725:grid-cols-[minmax(217px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(217px,_377px))]">
        <img
          className="relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover mq725:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className="h-[218px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-14@2x.png"
          />
        </div>
        <img
          className="relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover mq725:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="relative rounded-4xs max-w-full overflow-hidden max-h-full object-cover mq725:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-12@2x.png"
        />
      </div>
    </footer>
  );
};

CatBreeds.propTypes = {
  className: PropTypes.string,
};

export default CatBreeds;
