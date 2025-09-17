// import { useState } from "react";
// import { apiPost } from "../api";

// export default function NoteForm({ groupCode, onAdded }) {
//   const [title, setTitle] = useState("");
//   const [details, setDetails] = useState("");
//   const [kind, setKind] = useState("note"); // note | link | file
//   const [url, setUrl] = useState("");
//   const [file, setFile] = useState(null);

//   const upload = async (e) => {
//     e.preventDefault();

//     let body;
//     let isFormData = false;

//     if (kind === "file") {
//       if (!file) return alert("File is required!");
//       body = new FormData();
//       body.append("file", file);
//       body.append("title", title);
//       body.append("details", details);
//       body.append("kind", "file");
//       isFormData = true;
//     } else if (kind === "link") {
//       if (!url) return alert("URL is required!");
//       body = { title, details, kind: "link", url };
//     } else {
//       body = { title, details, kind: "note" };
//     }

//     try {
//       const res = await apiPost(`/groups/${groupCode}/notes/upload`, body, isFormData);
//       if (res.success && res.note) {
//         setTitle(""); 
//         setDetails(""); 
//         setUrl(""); 
//         setFile(null);
//         if (onAdded) onAdded(res.note); // pass newly created note
//       } else {
//         alert(res.error || "Upload failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     }
//   };

//   return (
//     <form onSubmit={upload} className="mb-4 p-4 border rounded">
//       <div className="mb-2">
//         <label className="font-semibold">Title:</label>
//         <input 
//           className="ml-2 border p-1 rounded w-full" 
//           value={title} 
//           onChange={e => setTitle(e.target.value)} 
//           required 
//         />
//       </div>

//       <div className="mb-2">
//         <label className="font-semibold">Details:</label>
//         <textarea 
//           className="ml-2 border p-1 rounded w-full" 
//           value={details} 
//           onChange={e => setDetails(e.target.value)} 
//         />
//       </div>

//       <div className="mb-2">
//         <label className="font-semibold">Type:</label>
//         <select 
//           className="ml-2 border p-1 rounded" 
//           value={kind} 
//           onChange={e => setKind(e.target.value)}
//         >
//           <option value="note">Note</option>
//           <option value="link">Link</option>
//           <option value="file">File</option>
//         </select>
//       </div>

//       {kind === "link" && (
//         <div className="mb-2">
//           <label className="font-semibold">URL:</label>
//           <input 
//             className="ml-2 border p-1 rounded w-full" 
//             value={url} 
//             onChange={e => setUrl(e.target.value)} 
//             required 
//           />
//         </div>
//       )}

//       {kind === "file" && (
//         <div className="mb-2">
//           <input 
//             type="file" 
//             onChange={e => setFile(e.target.files[0])} 
//             required 
//           />
//         </div>
//       )}

//       <button 
//         type="submit" 
//         className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
//       >
//         Upload
//       </button>
//     </form>
//   );
// }



import { useState } from "react";
import { apiPost } from "../api";

export default function NoteForm({ groupCode, onAdded }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [kind, setKind] = useState("note"); // note | link | file
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);

  const upload = async (e) => {
    e.preventDefault();

    let body;
    let isFormData = false;

    if (kind === "file") {
      if (!file) return alert("File is required!");
      body = new FormData();
      body.append("file", file);
      body.append("title", title);
      body.append("details", details);
      body.append("kind", "file");
      isFormData = true;
    } else if (kind === "link") {
      if (!url) return alert("URL is required!");
      body = { title, details, kind: "link", url };
    } else {
      body = { title, details, kind: "note" };
    }

    try {
      const res = await apiPost(`/groups/${groupCode}/notes/upload`, body, isFormData);
      if (res.success && res.note) {
        setTitle("");
        setDetails("");
        setUrl("");
        setFile(null);
        if (onAdded) onAdded(res.note); // pass newly created note
      } else {
        alert(res.error || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <form
      onSubmit={upload}
      className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-6 mt-6 border border-blue-200/20 max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-bold text-blue-900 mb-4">Add a New Note</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block font-semibold text-blue-900 mb-1">Title</label>
        <input
          className="w-full px-4 py-2 rounded-xl border border-blue-300 text-blue-900 placeholder-blue-400 bg-white bg-opacity-70 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition shadow-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter note title"
        />
      </div>

      {/* Details */}
      <div className="mb-4">
        <label className="block font-semibold text-blue-900 mb-1">Details</label>
        <textarea
          className="w-full px-4 py-2 rounded-xl border border-blue-300 text-blue-900 placeholder-blue-400 bg-white bg-opacity-70 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition shadow-sm"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Write details..."
        />
      </div>

      {/* Type */}
      <div className="mb-4">
        <label className="block font-semibold text-blue-900 mb-1">Type</label>
        <select
          className="px-4 py-2 rounded-xl border border-blue-300 text-blue-900 bg-white bg-opacity-70 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition shadow-sm"
          value={kind}
          onChange={(e) => setKind(e.target.value)}
        >
          <option value="note">Note</option>
          <option value="link">Link</option>
          <option value="file">File</option>
        </select>
      </div>

      {/* Conditional fields */}
      {kind === "link" && (
        <div className="mb-4">
          <label className="block font-semibold text-blue-900 mb-1">URL</label>
          <input
            className="w-full px-4 py-2 rounded-xl border border-blue-300 text-blue-900 placeholder-blue-400 bg-white bg-opacity-70 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition shadow-sm"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder="https://example.com"
          />
        </div>
      )}

      {kind === "file" && (
        <div className="mb-4">
          <label className="block font-semibold text-blue-900 mb-1">Upload File</label>
          <input
            type="file"
            className="w-full text-blue-900"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
      )}

      {/* Upload Button */}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
      >
        Upload
      </button>
    </form>
  );
}
