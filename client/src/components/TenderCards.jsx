import { useEffect } from "react";
import { Link } from "react-router-dom";

const TenderCards = (props) => {
  useEffect(() => {
    // console.log(props.type);
  });
  const etime = new Date(props.endTime * 1000);
  const feTime = etime.toLocaleString();
  return (
    <div className=" flex flex-row flex-wrap justify-evenly ">
      {props.ended ? (
        <div></div>
      ) : (
        <div className="bg-accent  h-[415px] w-[315px] rounded-md p-4 my-7 mx-4 shadow-md hover:bg-opacity-90 flex flex-col text-center ">
          <div className="text-3xl">{props.title}</div>
          <div className="flex flex-col h-full justify-center text-ellipsis overflow-hidden">
            <p>{props.industry}</p>
            <p>{props.desc}</p>
            <p>{feTime}</p>
            <p>{props.id}</p>
          </div>
          <div>
            <Link to={`/bid/${props.id}`} state={{ tdr: { props } }}>
              <button className="btn bg-base-200 m-3 hover:bg-base-100 ">Bid</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderCards;
