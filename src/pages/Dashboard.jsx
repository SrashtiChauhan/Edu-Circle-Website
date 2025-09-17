// import { useState } from "react";

// export default function Dashboard({ user, groups, onJoinGroup, onCreateGroup, onLogout, onOpenGroup }) {
//   const [groupCode, setGroupCode] = useState("");
//   const [groupName, setGroupName] = useState("");
//   const [groupDesc, setGroupDesc] = useState("");
//   const [createdCode, setCreatedCode] = useState(null);

//   const handleCreate = async () => {
//     if (!groupName.trim()) return alert("Enter group name");
//     const newId = await onCreateGroup({ name: groupName, description: groupDesc });
//     if (newId) {
//       setCreatedCode(newId);
//       setGroupName("");
//       setGroupDesc("");
//     }
//   };

//   const handleJoin = async () => {
//     if (!groupCode.trim()) return alert("Enter group code");
//     const ok = await onJoinGroup(groupCode.trim().toUpperCase());
//     if (ok) setGroupCode("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="flex justify-between items-center mb-8 bg-white p-4 rounded shadow-md">
//         <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.username}</h1>
//         <button
//           onClick={onLogout}
//           className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded text-white font-medium"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Create Group</h3>
//           <input
//             placeholder="Group name"
//             value={groupName}
//             onChange={e => setGroupName(e.target.value)}
//             className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//           <textarea
//             placeholder="Description"
//             value={groupDesc}
//             onChange={e => setGroupDesc(e.target.value)}
//             className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
//             rows="3"
//           />
//           <button
//             onClick={handleCreate}
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition"
//           >
//             Create
//           </button>
//           {createdCode && (
//             <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
//               Group created. Code: <strong>{createdCode}</strong>
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Join Group</h3>
//           <input
//             placeholder="Group code"
//             value={groupCode}
//             onChange={e => setGroupCode(e.target.value)}
//             className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={handleJoin}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
//           >
//             Join
//           </button>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold text-gray-700 mb-4">Your Groups</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {groups.length === 0 ? (
//             <div className="text-gray-500">No groups joined yet.</div>
//           ) : (
//             groups.map(g => (
//               <div key={g.code} className="border p-4 rounded hover:shadow-md transition bg-gray-50">
//                 <div className="font-semibold text-gray-800">{g.name}</div>
//                 <div className="text-sm text-gray-600 mb-3">Code: {g.code}</div>
//                 <button
//                   onClick={() => onOpenGroup(g.code)}
//                   className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-medium transition"
//                 >
//                   Open Group
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }






 import { useState } from "react";

export default function Dashboard({ user, groups, onJoinGroup, onCreateGroup, onLogout, onOpenGroup }) {
  const [groupCode, setGroupCode] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");
  const [createdCode, setCreatedCode] = useState(null);

  const handleCreate = async () => {
    if (!groupName.trim()) return alert("Enter group name");
    const newId = await onCreateGroup({ name: groupName, description: groupDesc });
    if (newId) {
      setCreatedCode(newId);
      setGroupName("");
      setGroupDesc("");
    }
  };

  const handleJoin = async () => {
    if (!groupCode.trim()) return alert("Enter group code");
    const ok = await onJoinGroup(groupCode.trim().toUpperCase());
    if (ok) setGroupCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8">
      <div className="flex justify-between items-center mb-10 bg-white bg-opacity-90 p-6 rounded-xl shadow-lg border border-blue-300 transition hover:shadow-xl">
        <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">
          Welcome, {user.username}
        </h1>
        <button
          onClick={onLogout}
          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 rounded-lg shadow-md font-semibold transition transform hover:scale-105"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="bg-white p-7 rounded-xl shadow-md border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-700 mb-6">Create Group</h3>
          <input
            placeholder="Group name"
            value={groupName}
            onChange={e => setGroupName(e.target.value)}
            className="w-full p-3 border-2 border-blue-300 rounded-lg mb-5 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
          />
          <textarea
            placeholder="Description"
            value={groupDesc}
            onChange={e => setGroupDesc(e.target.value)}
            rows="3"
            className="w-full p-3 border-2 border-blue-300 rounded-lg mb-5 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
          />
          <button
            onClick={handleCreate}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
          >
            Create
          </button>
          {createdCode && (
            <div className="mt-5 p-3 bg-blue-100 text-blue-800 rounded-lg border border-blue-300 font-medium">
              Group created. Code: <strong>{createdCode}</strong>
            </div>
          )}
        </div>

        <div className="bg-white p-7 rounded-xl shadow-md border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-700 mb-6">Join Group</h3>
          <input
            placeholder="Group code"
            value={groupCode}
            onChange={e => setGroupCode(e.target.value)}
            className="w-full p-3 border-2 border-blue-300 rounded-lg mb-5 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
          />
          <button
            onClick={handleJoin}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
          >
            Join
          </button>
        </div>
      </div>

      <div className="bg-white p-7 rounded-xl shadow-md border border-blue-300">
        <h2 className="text-2xl font-bold text-blue-700 mb-7">Your Groups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.length === 0 ? (
            <div className="text-blue-400 italic">No groups joined yet.</div>
          ) : (
            groups.map(g => (
              <div
                key={g.code}
                className="border-2 border-blue-300 p-5 rounded-lg bg-blue-50 hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="font-semibold text-blue-800 text-lg">{g.name}</div>
                <div className="text-sm text-blue-600 mb-4">Code: {g.code}</div>
                <button
                  onClick={() => onOpenGroup(g.code)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2 rounded-md font-medium shadow-md transition transform hover:scale-105"
                >
                  Open Group
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
 



// import { useState } from "react";

// export default function Dashboard({ user, groups, onJoinGroup, onCreateGroup, onLogout, onOpenGroup }) {
//   const [groupCode, setGroupCode] = useState("");
//   const [groupName, setGroupName] = useState("");
//   const [groupDesc, setGroupDesc] = useState("");
//   const [createdCode, setCreatedCode] = useState(null);

//   const handleCreate = async () => {
//     if (!groupName.trim()) return alert("Enter group name");
//     const newId = await onCreateGroup({ name: groupName, description: groupDesc });
//     if (newId) {
//       setCreatedCode(newId);
//       setGroupName("");
//       setGroupDesc("");
//     }
//   };

//   const handleJoin = async () => {
//     if (!groupCode.trim()) return alert("Enter group code");
//     const ok = await onJoinGroup(groupCode.trim().toUpperCase());
//     if (ok) setGroupCode("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
//       <div className="flex justify-between items-center mb-8 bg-white bg-opacity-90 p-5 rounded-xl shadow-md border border-blue-300 transition hover:shadow-lg">
//         <h1 className="text-3xl font-bold text-blue-800">Welcome, {user.username}</h1>
//         <button
//           onClick={onLogout}
//           className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:scale-105"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         <div className="bg-white p-7 rounded-xl shadow-md border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1">
//           <h3 className="text-xl font-semibold text-blue-700 mb-5">Create Group</h3>
//           <input
//             placeholder="Group name"
//             value={groupName}
//             onChange={e => setGroupName(e.target.value)}
//             className="w-full p-3 border-2 border-blue-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
//           />
//           <textarea
//             placeholder="Description"
//             value={groupDesc}
//             onChange={e => setGroupDesc(e.target.value)}
//             className="w-full p-3 border-2 border-blue-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
//             rows="3"
//           />
//           <button
//             onClick={handleCreate}
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
//           >
//             Create
//           </button>
//           {createdCode && (
//             <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg border border-blue-300">
//               Group created. Code: <strong>{createdCode}</strong>
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-7 rounded-xl shadow-md border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1">
//           <h3 className="text-xl font-semibold text-blue-700 mb-5">Join Group</h3>
//           <input
//             placeholder="Group code"
//             value={groupCode}
//             onChange={e => setGroupCode(e.target.value)}
//             className="w-full p-3 border-2 border-blue-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
//           />
//           <button
//             onClick={handleJoin}
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
//           >
//             Join
//           </button>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-xl shadow-md border border-blue-300">
//         <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Groups</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {groups.length === 0 ? (
//             <div className="text-blue-400">No groups joined yet.</div>
//           ) : (
//             groups.map(g => (
//               <div
//                 key={g.code}
//                 className="border-2 border-blue-300 p-5 rounded-lg bg-blue-50 hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
//                 onClick={() => onOpenGroup(g.code)}
//               >
//                 <div className="font-semibold text-blue-800 text-lg">{g.name}</div>
//                 <div className="text-sm text-blue-600 mb-4">Code: {g.code}</div>
//                 <button
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-md font-medium shadow-md transition transform hover:scale-105"
//                 >
//                   Open Group
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
