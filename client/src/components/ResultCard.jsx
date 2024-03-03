import React from "react";

const ResultCard = (props) => {
  return (
    <tr className="text-center">
      <td>{props.tno}</td>
      <td>{props.tname}</td>
      <td>{props.amount > 0 ? props.winner : "NIL"}</td>
      <td>{props.amount > 0 ? props.amount + " wei" : "NIL"} </td>
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
