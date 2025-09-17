// import { API_BASE } from "../api";

// export default function NoteItem({ note, onDelete }) {
//   const fileUrl = note.fileUrl || (note.filename ? `${API_BASE}/uploads/${note.filename}` : null);

//   return (
//     <div className="p-4 border border-gray-200 rounded-xl shadow-sm mb-4 hover:shadow-md transition">
//       <div className="font-semibold text-gray-800 text-lg mb-1">
//         {note.title || (note.kind === "link" ? note.url : "File")}
//       </div>

//       {note.details && <div className="text-gray-600 text-sm mb-2">{note.details}</div>}

//       {note.kind === "link" && (
//         <a
//           href={note.url}
//           target="_blank"
//           rel="noreferrer"
//           className="text-blue-600 underline hover:text-blue-800 transition"
//         >
//           {note.url}
//         </a>
//       )}

//       {fileUrl && (
//         <div className="mt-1">
//           <a
//             href={fileUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-600 underline hover:text-blue-800 transition"
//           >
//             View file
//           </a>
//         </div>
//       )}

//       <div className="mt-3">
//         <button
//           onClick={onDelete}
//           className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg font-medium transition"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }




import { API_BASE } from "../api";

export default function NoteItem({ note, onDelete }) {
  const fileUrl =
    note.fileUrl || (note.filename ? `${API_BASE}/uploads/${note.filename}` : null);

  return (
    <div className="p-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 border border-blue-300 rounded-2xl shadow-md mb-5 
                    hover:shadow-xl hover:border-blue-400 transition duration-300 transform hover:-translate-y-1 animate-fadeIn">
      {/* Title */}
      <div className="font-extrabold text-blue-900 text-xl mb-2 tracking-wide">
        {note.title || (note.kind === "link" ? note.url : "File")}
      </div>

      {/* Details */}
      {note.details && (
        <div className="text-blue-800 text-sm mb-3 leading-relaxed italic">
          {note.details}
        </div>
      )}

      {/* Link */}
      {note.kind === "link" && (
        <a
          href={note.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-3 py-1 bg-blue-500/90 text-white rounded-lg shadow-sm hover:bg-blue-600 transition 
                     transform hover:scale-105 font-medium"
        >
          🔗 Open Link
        </a>
      )}

      {/* File */}
      {fileUrl && (
        <div className="mt-3">
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-sm 
                       hover:from-blue-500 hover:to-blue-700 transition transform hover:scale-105 font-medium"
          >
            📂 View File
          </a>
        </div>
      )}

      {/* Delete Button */}
      <div className="mt-4">
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white 
                     rounded-xl font-semibold shadow-md transition-transform transform hover:scale-105 focus:outline-none 
                     focus:ring-2 focus:ring-red-300"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
