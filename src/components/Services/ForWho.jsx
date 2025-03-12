const ForWho = ({ forWho }) => {
  // console.log(forWho);
  return (
    <div>
      <div className="containers">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0">
          <p className="header-text font-bold w-full md:w-1/3">For Who?</p>
          <p className="body-text w-full md:w-2/3">{forWho}</p>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
