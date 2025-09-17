// import { useEffect, useState } from "react";
// import NoteForm from "../components/NoteForm";
// import NoteList from "../components/NoteList";
// import ChatBox from "../components/ChatBox";
// import { apiGet, apiPost, apiDelete } from "../api";

// export default function GroupNotes({ groupCode, user, onBack, onGroupUpdated }) {
//   const [group, setGroup] = useState(null);
//   const [notes, setNotes] = useState([]);
//   const [links, setLinks] = useState([]);
//   const [activeTab, setActiveTab] = useState("notes"); // notes | chat | members

//   const loadGroup = async () => {
//     const res = await apiGet(`/groups/${groupCode}/detail`);
//     if (res.group) {
//       setGroup(res.group);
//       setNotes(res.notes || []);
//       setLinks(res.links || []);
//     } else alert(res.error || "Could not load group");
//   };

//   useEffect(() => {
//     loadGroup();
//   }, [groupCode]);

//   const onAdded = (newItem) => {
//     if (newItem) {
//       if (newItem.kind === "link") setLinks((prev) => [newItem, ...prev]);
//       else setNotes((prev) => [newItem, ...prev]);
//     }
//     if (onGroupUpdated) onGroupUpdated();
//   };

//   const deleteNote = async (noteId) => {
//     const res = await apiDelete(`/groups/${groupCode}/notes/${noteId}`, {});
//     if (res.success) setNotes((n) => n.filter((x) => x._id !== noteId));
//     else alert(res.error || "Delete failed");
//     if (onGroupUpdated) onGroupUpdated();
//   };

//   const deleteLink = async (linkId) => {
//     const res = await apiDelete(`/groups/${groupCode}/links/${linkId}`, {});
//     if (res.success) setLinks((l) => l.filter((x) => x._id !== linkId));
//     else alert(res.error || "Delete failed");
//     if (onGroupUpdated) onGroupUpdated();
//   };

//   const removeMember = async (memberId) => {
//     const res = await apiPost(`/groups/${groupCode}/remove-member`, { user_id: user.id, member_id: memberId });
//     if (res.success) loadGroup();
//     else alert(res.error || "Remove failed");
//   };

//   const deleteGroup = async () => {
//     if (!confirm("Delete this group? This cannot be undone.")) return;
//     const res = await apiDelete(`/groups/${groupCode}`, { user_id: user.id });
//     if (res.success) {
//       if (onGroupUpdated) onGroupUpdated();
//       onBack();
//     } else alert(res.error || "Delete failed");
//   };

//   if (!group) return <div className="p-6">Loading group...</div>;

//   return (
//     <div className="p-6">
//       <button
//         onClick={onBack}
//         className="mb-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
//       >
//         ⬅ Back
//       </button>

//       <h1 className="text-2xl font-bold">
//         {group.name}{" "}
//         <span className="text-sm text-gray-500">({group.code})</span>
//       </h1>
//       <p className="mb-6">{group.description}</p>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6 border-b">
//         {["notes", "chat", "members"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 font-semibold ${
//               activeTab === tab
//                 ? "border-b-2 border-blue-600 text-blue-600"
//                 : "text-gray-600 hover:text-blue-600"
//             }`}
//           >
//             {tab === "notes"
//               ? "Notes & Links"
//               : tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       {activeTab === "notes" && (
//         <div>
//           <NoteForm groupCode={group.code} onAdded={onAdded} />
//           <NoteList
//             notes={[...notes, ...links]}
//             onDeleteNote={(id) => {
//               const note = notes.find((n) => n._id === id);
//               if (note) deleteNote(id);
//               else deleteLink(id);
//             }}
//           />
//         </div>
//       )}

//       {activeTab === "chat" && (
//         <div>
//           <ChatBox groupCode={group.code} user={user} />
//         </div>
//       )}

//       {activeTab === "members" && (
//         <div className="p-4 border rounded space-y-2">
//           <h3 className="font-semibold mb-3">Members</h3>
//           {group.members.map((m, index) => (
//             <div
//               key={m._id ?? m.username ?? index}
//               className="flex justify-between items-center py-2 border-b"
//             >
//               <div>
//                 {m.username}
//                 {String(m._id) === String(group.ownerId) && " (Owner)"}
//               </div>
//               {String(group.ownerId) === String(user.id) &&
//                 String(m._id) !== String(user.id) && (
//                   <button
//                     onClick={() => removeMember(m._id)}
//                     className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                   >
//                     Remove
//                   </button>
//                 )}
//             </div>
//           ))}
//           {String(group.ownerId) === String(user.id) && (
//             <div className="mt-3">
//               <button
//                 onClick={deleteGroup}
//                 className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
//               >
//                 Delete Group
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import ChatBox from "../components/ChatBox";
import { apiGet, apiPost, apiDelete } from "../api";

export default function GroupNotes({ groupCode, user, onBack, onGroupUpdated }) {
  const [group, setGroup] = useState(null);
  const [notes, setNotes] = useState([]);
  const [links, setLinks] = useState([]);
  const [activeTab, setActiveTab] = useState("notes"); // notes | chat | members

  const loadGroup = async () => {
    const res = await apiGet(`/groups/${groupCode}/detail`);
    if (res.group) {
      setGroup(res.group);
      setNotes(res.notes || []);
      setLinks(res.links || []);
    } else alert(res.error || "Could not load group");
  };

  useEffect(() => {
    loadGroup();
  }, [groupCode]);

  const onAdded = (newItem) => {
    if (newItem) {
      if (newItem.kind === "link") setLinks((prev) => [newItem, ...prev]);
      else setNotes((prev) => [newItem, ...prev]);
    }
    if (onGroupUpdated) onGroupUpdated();
  };

  const deleteNote = async (noteId) => {
    const res = await apiDelete(`/groups/${groupCode}/notes/${noteId}`, {});
    if (res.success) setNotes((n) => n.filter((x) => x._id !== noteId));
    else alert(res.error || "Delete failed");
    if (onGroupUpdated) onGroupUpdated();
  };

  const deleteLink = async (linkId) => {
    const res = await apiDelete(`/groups/${groupCode}/links/${linkId}`, {});
    if (res.success) setLinks((l) => l.filter((x) => x._id !== linkId));
    else alert(res.error || "Delete failed");
    if (onGroupUpdated) onGroupUpdated();
  };

  const removeMember = async (memberId) => {
    const res = await apiPost(`/groups/${groupCode}/remove-member`, { user_id: user.id, member_id: memberId });
    if (res.success) loadGroup();
    else alert(res.error || "Remove failed");
  };

  const deleteGroup = async () => {
    if (!confirm("Delete this group? This cannot be undone.")) return;
    const res = await apiDelete(`/groups/${groupCode}`, { user_id: user.id });
    if (res.success) {
      if (onGroupUpdated) onGroupUpdated();
      onBack();
    } else alert(res.error || "Delete failed");
  };

  if (!group) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-gray-600 text-lg animate-pulse">Loading group...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex justify-center px-6 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition text-gray-700 font-medium shadow-sm"
        >
          ⬅ Back
        </button>

        {/* Group Info */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {group.name}{" "}
          <span className="text-sm text-gray-500">({group.code})</span>
        </h1>
        <p className="text-gray-600 mb-8">{group.description}</p>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b">
          {["notes", "chat", "members"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold transition ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab === "notes"
                ? "Notes & Links"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            <NoteForm groupCode={group.code} onAdded={onAdded} />
            <NoteList
              notes={[...notes, ...links]}
              onDeleteNote={(id) => {
                const note = notes.find((n) => n._id === id);
                if (note) deleteNote(id);
                else deleteLink(id);
              }}
            />
          </div>
        )}

        {activeTab === "chat" && (
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <ChatBox groupCode={group.code} user={user} />
          </div>
        )}

        {activeTab === "members" && (
          <div className="p-6 bg-gray-50 border rounded-xl shadow-md space-y-3">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Members</h3>
            {group.members.map((m, index) => (
              <div
                key={m._id ?? m.username ?? index}
                className="flex justify-between items-center py-3 border-b last:border-none"
              >
                <div className="text-gray-700">
                  {m.username}
                  {String(m._id) === String(group.ownerId) && (
                    <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      Owner
                    </span>
                  )}
                </div>
                {String(group.ownerId) === String(user.id) &&
                  String(m._id) !== String(user.id) && (
                    <button
                      onClick={() => removeMember(m._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm"
                    >
                      Remove
                    </button>
                  )}
              </div>
            ))}
            {String(group.ownerId) === String(user.id) && (
              <div className="pt-4">
                <button
                  onClick={deleteGroup}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium shadow"
                >
                  Delete Group
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
