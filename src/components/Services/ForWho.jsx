const ForWho = ({ forWho }) => {
  // console.log(forWho);
  return (
    <div>
      <div className="containers">
        <div className="flex">
          <p className="header-text font-bold w-1/3">For Who?</p>
          <p className="body-text w-2/3">{forWho}</p>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
