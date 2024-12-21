// import React from "react";
// import user from "../images/user.png";

// const ContactCard = (props) => {
//   const { id, name, email } = props.contact;
//   return (
//     <div className="item">
//       <img className="ui avatar image" src={user} alt="user" />
//       <div className="content">
//         <div className="header">{name}</div>
//         <div>{email}</div>
//       </div>
//       <i
//         className="trash alternate outline icon"
//         style={{ color: "red", marginTop: "7px" }}
//         onClick={() => props.clickHander(id)}
//       ></i>
//     </div>
//   );
// };

// export default ContactCard;


import React from "react";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, mobile } = contact;

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-2">
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>Email: {email}</p>
        <p>Mobile: {mobile}</p>
      </div>
      <button
        onClick={() => clickHandler(id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
