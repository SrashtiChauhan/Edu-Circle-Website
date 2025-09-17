import React from "react";

export default function Navbar({ user, onLogout, onBack, activeGroupCode }) {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="font-bold text-xl cursor-pointer hover:text-gray-200 transition">
        GroupApp
      </div>

      <div className="flex gap-4 items-center">
        {activeGroupCode && (
          <button
            onClick={onBack}
            className="bg-yellow-400 text-black px-3 py-1 rounded shadow hover:bg-yellow-500 transition"
          >
            Back
          </button>
        )}

        {user && (
          <div className="flex items-center gap-3">
           
            <button
              onClick={onLogout}
              className="bg-red-500 px-3 py-1 rounded shadow hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}


// import React from "react";

// export default function Navbar({ user, onLogout, onBack, activeGroupCode }) {
//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 flex justify-between items-center shadow-lg">
//       <div className="font-extrabold text-2xl cursor-pointer hover:text-blue-100 transition duration-300">
//         GroupApp
//       </div>

//       <div className="flex gap-5 items-center">
//         {activeGroupCode && (
//           <button
//             onClick={onBack}
//             className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 transform hover:scale-105"
//           >
//             Back
//           </button>
//         )}

//         {user && (
//           <button
//             onClick={onLogout}
//             className="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 transform hover:scale-105"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }
