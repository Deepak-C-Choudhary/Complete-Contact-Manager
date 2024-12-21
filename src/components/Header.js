// import React from "react";

// const Header = () => {
//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h2>Contact Manager</h2>
//       </div>
//     </div>
//   );
// };

// export default Header;






import React from "react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 shadow-md bg-blue-500">
      <h1 className="text-2xl font-bold text-white text-center flex-grow">
        Contact Manager
      </h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
