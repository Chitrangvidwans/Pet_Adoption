import BrowserContent from "../components/BrowserContent";
import AnimalGrid from "../components/AnimalGrid";
import CatBreeds from "../components/CatBreeds";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start pt-[34px] pb-5 pr-[13px] pl-0 box-border gap-[59px] leading-[normal] tracking-[normal] text-left text-sm text-black font-inter mq725:gap-[29px]">
      <header className="self-stretch h-[60px] relative bg-gray hidden" />
      <div className="w-[772px] h-[165px] relative hidden max-w-full" />
      <div className="w-[772px] h-[118px] relative hidden max-w-full" />
      <div className="w-[1414px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1166px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="w-[68px] flex flex-row items-start justify-start gap-[9px]">
            <img
              className="h-8 w-8 relative rounded-6xs overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/untitled-design-1-1.svg"
            />
   CHR         <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <b className="self-stretch relative whitespace-nowrap z-[1]">
                PE
                <span className="tracking-[0.56em]">T</span>
              </b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border max-w-full text-center text-darkslategray-100">
            <div className="flex flex-row items-start justify-start gap-[18px] mq725:hidden">
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[61px] whitespace-nowrap z-[1]">
                About us
              </button>
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[42px] z-[1]">
                Adopt
              </button>
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[49px] z-[1]">
                Donate
              </button>
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[30px] z-[1]">
                SOS
              </button>
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[47px] z-[1]">
                Events
              </button>
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[74px] whitespace-nowrap z-[1]">
                Contact us
              </button>
              <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200  flex flex-row items-start justify-start whitespace-nowrap z-[1] min-w-[42px] z-[1]">
                NGO’s
              </button>
            </div>
          </div>
          <button className="cursor-pointer py-[7px] px-[17px] bg-gainsboro-200 rounded-6xs flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[0.3px] border-solid border-lightgray hover:bg-silver hover:box-border hover:border-[0.3px] hover:border-solid hover:border-darkgray">
            <a className="[text-decoration:none] relative text-sm font-bold font-inter text-black text-left inline-block min-w-[47px]">
              Sign in
            </a>
          </button>
        </div>
      </div>
      <div className="w-[620px] h-[118px] relative hidden max-w-full" />
      <div className="w-[290px] h-[25px] relative hidden" />
      <div className="w-[290px] h-[25px] relative hidden" />
      <div className="w-[290px] h-[25px] relative hidden" />
      <div className="w-[290px] h-[25px] relative hidden" />
      <section className="w-[1414px] flex flex-row items-start justify-center pt-0 px-5 pb-[11px] box-border max-w-full text-center text-[40px] text-black font-inter">
        <div className="w-[834px] flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-black font-inherit inline-block max-w-full z-[1] mq450:text-[24px] mq1000:text-[32px]">
              <span>{`Every Pet Deserves a Loving Home. `}</span>
              <span className="text-goldenrod">Adopt</span>
              <span>{` a Pet Today & Save a Life.`}</span>
            </h1>
          </div>
          <div className="self-stretch relative text-base leading-[24px] text-darkslategray-100 z-[1]">
            <span>{`Browse our available animals and learn more about the adoption process. Together, we can `}</span>
            <b>rescue, rehabilitate, and rehome pets in need.</b>
            <span>
              {" "}
              Thank you for supporting our mission to bring joy to families
              through pet adoption.
            </span>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start gap-[20.7px] max-w-full text-center text-lg text-black font-inter">
        <BrowserContent />
        <AnimalGrid />
        <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-11 pb-0 relative">
          <div className="relative inline-block min-w-[63px]">
            <b>{`Cats `}</b>
            <span className="text-sm text-darkslategray-100">37</span>
          </div>
          <div className="h-full w-[1440px] absolute !m-[0] top-[0px] bottom-[0px] left-[-13px] z-[1]" />
        </div>
        <CatBreeds />
      </section>
    </div>
  );
};

export default Desktop;
