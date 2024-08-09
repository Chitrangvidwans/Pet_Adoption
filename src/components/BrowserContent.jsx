import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const BrowserContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1414px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-8xl text-darkred font-inter ${className}`}
    >
      <div className="w-[606px] flex flex-col items-start justify-start gap-[26px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        
          <DropdownButton
            className="w-[172px] flex flex-col gap-[20px] z-[3]"
            as={ButtonGroup}
            style={{ width: "172", height: "100%", backgroundColor: "#e9e9e9" }}
            title="All Pets"
          >
            <Dropdown.Item eventKey="dogs">Dogs</Dropdown.Item>
            <Dropdown.Item eventKey="cats">Cats</Dropdown.Item>
            <Dropdown.Item eventKey="others">Others</Dropdown.Item>
          </DropdownButton>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border min-w-[217px] max-w-full">
            <div className="self-stretch bg-white box-border flex flex-row items-start justify-start py-1.5 px-2.5 max-w-full z-[2] border-[1px] border-solid border-black">
              <div className="h-10 w-[325px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-black" />
              <input
                className="w-[95px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-6 relative leading-[24px] text-darkslategray-300 text-center inline-block p-0 z-[3]"
                placeholder="Search pets..."
                type="text"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-3 bg-black rounded-6xs flex flex-row items-start justify-start gap-[4px] z-[2] hover:bg-darkslategray-200">
            <img
              className="h-6 w-6 relative object-contain min-h-[24px]"
              alt=""
              src="/search@2x.png"
            />
            <b className="relative text-sm leading-[24px] inline-block font-inter text-white text-center min-w-[48px]">
              Search
            </b>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <div className="w-[121px] rounded-2xs bg-gainsboro-100 flex flex-row items-start justify-start pt-2.5 px-[30px] pb-[9.5px] box-border z-[1]">
            <div className="h-[54.3px] w-[121px] relative rounded-2xs bg-gainsboro-100 hidden" />
            <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[60.1px] z-[1] mq450:text-3xl">
              SOS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

BrowserContent.propTypes = {
  className: PropTypes.string,
};

export default BrowserContent;
