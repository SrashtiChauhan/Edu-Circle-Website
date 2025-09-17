// import NoteItem from "./NoteItem";

// export default function NoteList({ notes, onDeleteNote }) {
//   if (!notes || notes.length === 0) return <p>No notes or links yet.</p>;

//   return (
//     <div className="space-y-2">
//       {notes.map((note) => (
//         <NoteItem
//           key={note._id}
//           note={note}
//           onDelete={() => onDeleteNote(note._id)}
//         />
//       ))}
//     </div>
//   );
// }







import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDeleteNote }) {
  if (!notes || notes.length === 0)
    return (
      <p className="text-center text-blue-700 italic p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md">
        No notes or links yet.
      </p>
    );

  return (
    <div
      className="space-y-4 p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 
                 rounded-2xl shadow-lg border border-blue-300 animate-fadeIn"
    >
      <h2 className="text-2xl font-extrabold text-blue-900 tracking-wide mb-4 text-center">
        📘 Your Notes
      </h2>

      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          onDelete={() => onDeleteNote(note._id)}
        />
      ))}
    </div>
  );
}
