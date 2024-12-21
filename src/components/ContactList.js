// import React from "react";
// import ContactCard from "./ContactCard";

// const ContactList = (props) => {
//   console.log(props);

//   const deleteConactHandler = (id) => {
//     props.getContactId(id);
//   };
//   const renderContactList = props.contacts.map((contact) => {
//     return (
//       <ContactCard
//         contact={contact}
//         clickHander={deleteConactHandler}
//         key={contact.id}
//       />
//     );
//   });
//   return <div className="ui celled list">{renderContactList}</div>;
// };

// export default ContactList;




import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Contact List</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={getContactId}
          />
        ))
      ) : (
        <p className="text-gray-500">No contacts available. Please add some.</p>
      )}
    </div>
  );
};

export default ContactList;
