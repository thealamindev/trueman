import Flex from "../Flex.jsx";

const Footer = () => {
  return (
    <>
      <div className="max-w-sContainer mx-auto ">
        <div className="bg-bgColor w-[700px] h-[150px] rounded-[10px] ml-[235px] ">
          <Flex className={"justify-between p-[65px]"}>
            <h3 className="text-[#bebbbb] font-poppin font-semibold text-[16px]">
              © 2025 All Rights Reserved.
            </h3>
            <h3 className="text-[#bebbbb] font-poppin font-semibold text-[16px]">
              Developed by:<span className="text-btnColor"> BSLTHEMES</span>
            </h3>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Footer;
