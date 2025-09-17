// import { useEffect, useState } from "react";
// import { apiGet, apiPost } from "../api";

// export default function ChatBox({ groupCode, user }) {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   const load = async () => {
//     const res = await apiGet(`/groups/${groupCode}/chat`);
//     if (res.chat) setMessages(res.chat);
//   };

//   useEffect(() => {
//     load();
//     const iv = setInterval(load, 3000);
//     return () => clearInterval(iv);
//   }, [groupCode]);

//   const send = async (e) => {
//     e.preventDefault();
//     if (!text.trim()) return;
//     const res = await apiPost(`/groups/${groupCode}/chat`, {
//       user_id: user.id,
//       message: text.trim(),
//     });
//     if (res.success) {
//       setText("");
//       load();
//     } else {
//       alert(res.error || "Send failed");
//     }
//   };

//   return (
//     <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-md p-4 mt-6 max-w-lg mx-auto w-full">
//       <h3 className="text-lg font-bold text-white mb-3 border-b border-gray-700 pb-2">
//         Group Chat
//       </h3>
//       <div className="h-64 overflow-y-auto bg-gray-900 rounded p-3 space-y-3 mb-4">
//         {messages.length === 0 ? (
//           <div className="text-gray-400 text-center text-sm">No messages yet.</div>
//         ) : (
//           messages.map((m) => (
//             <div key={m._id} className="space-y-1">
//               <div className="flex items-center justify-between text-xs text-gray-500">
//                 <span className="font-semibold text-gray-200">{m.username}</span>
//                 <span>{new Date(m.createdAt).toLocaleTimeString()}</span>
//               </div>
//               <div className="bg-gray-700 text-white p-2 rounded">{m.message}</div>
//             </div>
//           ))
//         )}
//       </div>
//       <form onSubmit={send} className="flex gap-2">
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 p-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }








import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../api";

export default function ChatBox({ groupCode, user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const load = async () => {
    const res = await apiGet(`/groups/${groupCode}/chat`);
    if (res.chat) setMessages(res.chat);
  };

  useEffect(() => {
    load();
    const iv = setInterval(load, 3000);
    return () => clearInterval(iv);
  }, [groupCode]);

  const send = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const res = await apiPost(`/groups/${groupCode}/chat`, {
      user_id: user.id,
      message: text.trim(),
    });
    if (res.success) {
      setText("");
      load();
    } else {
      alert(res.error || "Send failed");
    }
  };

  return (
    <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-6 mt-10 max-w-2xl mx-auto w-full border border-blue-200/20">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-300/30 pb-2 tracking-wide">
        Group Chat
      </h3>

      {/* Messages Area */}
      <div className="h-72 overflow-y-auto bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-xl p-4 space-y-4 shadow-inner border border-blue-200/20">
        {messages.length === 0 ? (
          <div className="text-blue-800/70 text-center text-sm italic animate-pulse">
            No messages yet. Start the conversation ✨
          </div>
        ) : (
          messages.map((m) => (
            <div key={m._id} className="space-y-1">
              <div className="flex items-center justify-between text-xs text-blue-700/70">
                <span className="font-semibold text-blue-900">{m.username}</span>
                <span>{new Date(m.createdAt).toLocaleTimeString()}</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-xl shadow-md animate-fadeIn">
                {m.message}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Box */}
      <form onSubmit={send} className="flex gap-3 mt-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 rounded-xl bg-white bg-opacity-70 border border-blue-300 placeholder-blue-400 text-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition shadow-md"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
  );
}
