/* eslint react/prop-types: 0 */
import React from "react";

const NomineeList = (props) => {
  console.log(props.props);
  let listofNominees = [];
  if (props.props) {
    listofNominees = props.props.map((nominee) => {
      return <li key={nominee.imdbID}>{nominee.Title}</li>;
    });
  }

  return (
    <div>
      <p>{listofNominees}</p>
    </div>
  );
};

export default NomineeList;
