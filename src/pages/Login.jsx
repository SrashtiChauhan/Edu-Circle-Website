// import { useState, useEffect } from "react";
// import { apiPost } from "../api";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);

//   const [text, setText] = useState("");
//   const fullText = "Welcome to EduCircle";
//   const typingSpeed = 150;

//   useEffect(() => {
//     let index = 0;
//     let forward = true;
//     const interval = setInterval(() => {
//       if (forward) {
//         setText(fullText.slice(0, index + 1));
//         index++;
//         if (index === fullText.length) forward = false;
//       } else {
//         setText(fullText.slice(0, index - 1));
//         index--;
//         if (index === 0) forward = true;
//       }
//     }, typingSpeed);
//     return () => clearInterval(interval);
//   }, []);

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!username || !password) return alert("Enter username/password");
//     const path = isRegister ? "/register" : "/login";
//     const res = await apiPost(path, { username, password });
//     if (res.success) {
//       onLoginSuccess({ id: res.user_id, username: res.username });
//     } else {
//       alert(res.error || "Error");
//       if (isRegister && res.user_id)
//         onLoginSuccess({ id: res.user_id, username: res.username });
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 opacity-60 animate-bg-move"></div>

//       <div className="relative z-10 w-full max-w-md space-y-6 text-center">
//         <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide mb-6">
//           {text}
//           <span className="inline-block w-1 h-1 bg-white rounded-full ml-2 animate-blink"></span>
//         </h1>

//         <form
//           onSubmit={submit}
//           className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6"
//         >
//           <h2 className="text-xl font-semibold text-white">
//             {isRegister ? "Create Account" : "Login"}
//           </h2>

//           <div className="space-y-4">
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded font-semibold text-white shadow-md"
//           >
//             {isRegister ? "Register" : "Login"}
//           </button>

//           <div className="text-sm text-gray-400">
//             <button
//               type="button"
//               onClick={() => setIsRegister(!isRegister)}
//               className="underline hover:text-blue-400 transition"
//             >
//               {isRegister
//                 ? "Already have an account? Login"
//                 : "New user? Register here"}
//             </button>
//           </div>
//         </form>

//         <div className="text-xs text-gray-300 mt-4">
//           Made by Srashti
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { apiPost } from "../api";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [text, setText] = useState("");
//   const fullText = "Welcome to EduCircle";
//   const typingSpeed = 150;

//   useEffect(() => {
//     let index = 0;
//     let forward = true;
//     const interval = setInterval(() => {
//       if (forward) {
//         setText(fullText.slice(0, index + 1));
//         index++;
//         if (index === fullText.length) forward = false;
//       } else {
//         setText(fullText.slice(0, index - 1));
//         index--;
//         if (index === 0) forward = true;
//       }
//     }, typingSpeed);
//     return () => clearInterval(interval);
//   }, []);

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!username || !password) return alert("Enter username/password");
//     setLoading(true);
//     const path = isRegister ? "/register" : "/login";
//     const res = await apiPost(path, { username, password });
//     setLoading(false);
//     if (res.success) {
//       onLoginSuccess({ id: res.user_id, username: res.username });
//     } else {
//       alert(res.error || "Error");
//       if (isRegister && res.user_id)
//         onLoginSuccess({ id: res.user_id, username: res.username });
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 overflow-hidden animate-fadeIn">
//       {/* Background animated gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 opacity-80 animate-bg-move"></div>

//       <div className="relative z-10 w-full max-w-md space-y-12 text-center">
//         <h1 className="text-blue-900 text-4xl md:text-6xl font-extrabold tracking-wide select-none mb-10">
//           {text}
//           <span className="inline-block w-3 h-3 bg-blue-900 rounded-full ml-3 animate-blink"></span>
//         </h1>

//         <form
//           onSubmit={submit}
//           className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-xl space-y-8"
//         >
//           <h2 className="text-2xl font-semibold text-blue-900">
//             {isRegister ? "Create Account" : "Login"}
//           </h2>

//           <div className="space-y-6">
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="w-full p-4 border-2 border-blue-300 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-300"
//               autoComplete="username"
//             />
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               className="w-full p-4 border-2 border-blue-300 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-300"
//               autoComplete="current-password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
//               loading ? "pointer-events-none" : ""
//             }`}
//           >
//             {loading ? "Processing..." : isRegister ? "Register" : "Login"}
//           </button>

//           <div className="text-sm text-blue-700">
//             <button
//               type="button"
//               onClick={() => setIsRegister(!isRegister)}
//               className="underline hover:text-blue-900 transition font-medium"
//             >
//               {isRegister
//                 ? "Already have an account? Login"
//                 : "New user? Register here"}
//             </button>
//           </div>
//         </form>

//         {/* Lottie Animation placeholder */}
//         <div className="mx-auto w-32 h-32">
//           {/* Replace this div with your actual Lottie animation component */}
//           <div className="w-full h-full animate-pulse rounded-full bg-gradient-to-tr from-blue-400 to-blue-600"></div>
//         </div>

//         <div className="text-xs text-blue-700 mt-6 select-none">
//           Made by Srashti
//         </div>
//       </div>
//     </div>
//   );
// }







// import { useState, useEffect } from "react";
// import { apiPost } from "../api";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Typing + deleting animation for heading
//   const [text, setText] = useState("");
//   const fullText = "Welcome to EduCircle";
//   const typingSpeed = 150;

//   useEffect(() => {
//     let index = 0;
//     let forward = true;
//     const interval = setInterval(() => {
//       if (forward) {
//         setText(fullText.slice(0, index + 1));
//         index++;
//         if (index === fullText.length) forward = false;
//       } else {
//         setText(fullText.slice(0, index - 1));
//         index--;
//         if (index === 0) forward = true;
//       }
//     }, typingSpeed);
//     return () => clearInterval(interval);
//   }, []);

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!username || !password) return alert("Enter username/password");
//     setLoading(true);
//     const path = isRegister ? "/register" : "/login";
//     const res = await apiPost(path, { username, password });
//     setLoading(false);
//     if (res.success) {
//       onLoginSuccess({ id: res.user_id, username: res.username });
//     } else {
//       alert(res.error || "Error");
//       if (isRegister && res.user_id)
//         onLoginSuccess({ id: res.user_id, username: res.username });
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 animate-fadeIn">
//       {/* Animated Background Blobs */}
//       <div className="absolute w-80 h-80 bg-blue-300 rounded-full -top-24 -left-24 opacity-30 blur-3xl animate-pulse"></div>
//       <div className="absolute w-96 h-96 bg-blue-400 rounded-full -bottom-32 -right-20 opacity-30 blur-2xl animate-pulse"></div>
//       <div className="absolute w-72 h-72 bg-blue-200 rounded-full top-1/2 left-1/3 opacity-20 blur-2xl animate-bounce"></div>

//       {/* Main Card */}
//       <div className="relative z-10 w-full max-w-md space-y-12 text-center">
//         {/* Heading with typing + deleting effect */}
//         <h1 className="text-blue-900 text-4xl md:text-6xl font-extrabold tracking-wide select-none mb-10">
//           {text}
//           <span className="inline-block w-2 h-8 bg-blue-900 ml-1 animate-blink align-middle"></span>
//         </h1>

//         {/* Login/Register Form */}
//         <form
//           onSubmit={submit}
//           className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-xl space-y-8"
//         >
//           <h2 className="text-2xl font-semibold text-blue-900">
//             {isRegister ? "Create Account" : "Login"}
//           </h2>

//           <div className="space-y-6">
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               className="w-full p-4 border-2 border-blue-300 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-300"
//               autoComplete="username"
//             />
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               className="w-full p-4 border-2 border-blue-300 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-300"
//               autoComplete="current-password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
//               loading ? "pointer-events-none" : ""
//             }`}
//           >
//             {loading ? "Processing..." : isRegister ? "Register" : "Login"}
//           </button>

//           <div className="text-sm text-blue-700">
//             <button
//               type="button"
//               onClick={() => setIsRegister(!isRegister)}
//               className="underline hover:text-blue-900 transition font-medium"
//             >
//               {isRegister
//                 ? "Already have an account? Login"
//                 : "New user? Register here"}
//             </button>
//           </div>
//         </form>

//         {/* Bottom Glow Animation */}
//         <div className="mx-auto w-28 h-28 mt-6">
//           <div className="w-full h-full animate-pulse rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 shadow-2xl"></div>
//         </div>

//         <div className="text-xs text-blue-700 mt-6 select-none">
//           Made by Srashti
//         </div>
//       </div>
//     </div>
//   );
// }








import { useState, useEffect } from "react";
import { apiPost } from "../api";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  // Typing + deleting animation for heading
  const [text, setText] = useState("");
  const fullText = "Welcome to EduCircle";
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) forward = false;
      } else {
        setText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) forward = true;
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!username || !password) return alert("Enter username/password");
    setLoading(true);
    const path = isRegister ? "/register" : "/login";
    const res = await apiPost(path, { username, password });
    setLoading(false);
    if (res.success) {
      onLoginSuccess({ id: res.user_id, username: res.username });
    } else {
      alert(res.error || "Error");
      if (isRegister && res.user_id)
        onLoginSuccess({ id: res.user_id, username: res.username });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 animate-fadeIn">
      {/* Animated Background Blobs */}
      <div className="absolute w-80 h-80 bg-blue-300 rounded-full -top-24 -left-24 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full -bottom-32 -right-20 opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-200 rounded-full top-1/2 left-1/3 opacity-20 blur-2xl animate-bounce"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md space-y-12 text-center">
        {/* Heading with typing + deleting effect */}
        <h1 className="text-blue-900 text-3xl md:text-5xl font-semibold tracking-wide select-none mb-10 whitespace-nowrap">
          {text}
          <span className="inline-block w-2 h-8 bg-blue-900 ml-1 animate-blink align-middle"></span>
        </h1>

        {/* Login/Register Form */}
        <form
          onSubmit={submit}
          className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-xl space-y-8"
        >
          <h2 className="text-2xl font-semibold text-blue-900">
            {isRegister ? "Create Account" : "Login"}
          </h2>

          <div className="space-y-6">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-4 border-2 border-blue-300 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-300"
              autoComplete="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-4 border-2 border-blue-300 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition duration-300"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
              loading ? "pointer-events-none" : ""
            }`}
          >
            {loading ? "Processing..." : isRegister ? "Register" : "Login"}
          </button>

          <div className="text-sm text-blue-700">
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="underline hover:text-blue-900 transition font-medium"
            >
              {isRegister
                ? "Already have an account? Login"
                : "New user? Register here"}
            </button>
          </div>
        </form>

        {/* Bottom Glow Animation */}
        <div className="mx-auto w-28 h-28 mt-6">
          <div className="w-full h-full animate-pulse rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 shadow-2xl"></div>
        </div>

        <div className="text-xs text-blue-700 mt-6 select-none">
          Made by Srashti
        </div>
      </div>
    </div>
  );
}







// import { useState, useEffect } from "react";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);

//   const [text, setText] = useState("");
//   const fullText = "Welcome to EduCircle";
//   const typingSpeed = 150;

//   useEffect(() => {
//     let index = 0;
//     let forward = true;
//     const interval = setInterval(() => {
//       if (forward) {
//         setText(fullText.slice(0, index + 1));
//         index++;
//         if (index === fullText.length) forward = false;
//       } else {
//         setText(fullText.slice(0, index - 1));
//         index--;
//         if (index === 0) forward = true;
//       }
//     }, typingSpeed);
//     return () => clearInterval(interval);
//   }, []);

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!username || !password) return alert("Enter username/password");
//     const path = isRegister ? "/register" : "/login";
//     // Your apiPost function call here
//     // const res = await apiPost(path, { username, password });
//     // For demo, mock response:
//     const res = { success: true, user_id: "123", username: username };
//     if (res.success) {
//       onLoginSuccess({ id: res.user_id, username: res.username });
//     } else {
//       alert(res.error || "Error");
//       if (isRegister && res.user_id)
//         onLoginSuccess({ id: res.user_id, username: res.username });
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400 overflow-hidden">
//       {/* Animated background shapes */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-tr from-blue-400 to-blue-200 rounded-full opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-tr from-blue-300 to-blue-100 rounded-full opacity-60 animate-blob animation-delay-4000"></div>
//         <div className="absolute bottom-10 left-20 w-64 h-64 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full opacity-50 animate-blob animation-delay-6000"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-md space-y-6 text-center bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-8 shadow-xl animate-fade-in">
//         <h1 className="text-blue-800 text-4xl font-extrabold tracking-wide mb-6">
//           {text}
//           <span className="inline-block w-2 h-2 bg-blue-800 rounded-full ml-2 animate-blink"></span>
//         </h1>

//         <form onSubmit={submit} className="space-y-6">
//           <h2 className="text-2xl font-semibold text-blue-700">
//             {isRegister ? "Create Account" : "Login"}
//           </h2>

//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             className="w-full p-3 border-2 border-blue-300 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border-2 border-blue-300 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition"
//           />

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-transform"
//           >
//             {isRegister ? "Register" : "Login"}
//           </button>

//           <button
//             type="button"
//             onClick={() => setIsRegister(!isRegister)}
//             className="text-blue-700 underline hover:text-blue-900 transition"
//           >
//             {isRegister
//               ? "Already have an account? Login"
//               : "New user? Register here"}
//           </button>
//         </form>

//         <div className="text-sm text-blue-600 mt-4">Made by Srashti</div>
//       </div>
//     </div>
//   );
// }
