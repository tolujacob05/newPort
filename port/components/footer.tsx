const Footer = () => {
  return (
    <>
      <div className="mt-20 lg:mt-0 relative z-20 flex flex-col items-center justify-center gap-2 pt-6">
        <h5 className="text-xs text-muted">Tolu_Jacob</h5>

        <div className="flex gap-4">
          <div>
            <h5 className="text-xs text-muted-foregroundTwo">
              Tolu_Jacob{" "}
              <span className="border w-0 border-[#0ECF7A] bg-[#0ECF7A] ml-2"></span>
            </h5>
          </div>
          <h5 className="text-xs text-green">Copyright &#169; 2023</h5>
          <h5 className="text-xs text-green">All rights reserved</h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
