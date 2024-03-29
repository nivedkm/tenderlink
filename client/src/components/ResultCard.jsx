import React from "react";

const ResultCard = (props) => {
  return (
    <tr className="text-center h-10 border-t-4 border-base-100 bg-base-200 m-4 rounded-xl ">
      <td>{props.tno}</td>
      <td>{props.tname}</td>
      <td>
        {props.amount.length > 0 && props.amount.length < 30
          ? props.winner
          : "NIL"}
      </td>
      <td>
        {props.amount.length > 0 && props.amount.length < 30
          ? props.amount + " wei"
          : "NIL"}{" "}
      </td>
      {/*  <td>
        <button className="btn">click here</button>
      </td> */}
      <td>
        {props.amount > 0 && props.status}
        {props.amount > 0
          ? props.status == "lost" && <button className="btn">Withdraw</button>
          : "NIL"}
      </td>
    </tr>
  );
};

export default ResultCard;
