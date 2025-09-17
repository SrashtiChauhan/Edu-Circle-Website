// import { useState } from "react";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import GroupNotes from "./pages/GroupNotes";
// import { apiGet, apiPost } from "./api";
// import Navbar from "./components/Navbar";

// function App() {
//   const [user, setUser] = useState(null);
//   const [groups, setGroups] = useState([]);
//   const [activeGroupCode, setActiveGroupCode] = useState(null);

//   const onLoginSuccess = async (u) => {
//     setUser(u);
//     const r = await apiGet(`/users/${u.id}/groups`);
//     if (r.groups) setGroups(r.groups);
//   };

//   const handleCreateGroup = async ({ name, description }) => {
//     const res = await apiPost("/groups/create", { user_id: user.id, name, description });
//     if (res.success) {
//       const gRes = await apiGet(`/users/${user.id}/groups`);
//       if (gRes.groups) setGroups(gRes.groups);
//       return res.group_id || null;
//     } else {
//       alert(res.error || "Create failed");
//       return null;
//     }
//   };

//   const handleJoinGroup = async (groupCode) => {
//     const res = await apiPost("/groups/join", { user_id: user.id, group_code: groupCode });
//     if (res.success) {
//       const gRes = await apiGet(`/users/${user.id}/groups`);
//       if (gRes.groups) setGroups(gRes.groups);
//       return true;
//     } else {
//       alert(res.error || "Join failed");
//       return false;
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setGroups([]);
//     setActiveGroupCode(null);
//   };

//   const handleGroupUpdated = async () => {
//     if (!user) return;
//     const r = await apiGet(`/users/${user.id}/groups`);
//     if (r.groups) setGroups(r.groups);
//   };

//   if (!user) return <Login onLoginSuccess={onLoginSuccess} />;

//   return (
//     <div>
//       {/* Navbar har page pe visible hoga */}
//       <Navbar
//         user={user}
//         onLogout={handleLogout}
//         onBack={() => setActiveGroupCode(null)}
//         activeGroupCode={activeGroupCode}
//         onOpenDashboard={() => setActiveGroupCode(null)} // ✅ Dashboard open
//       />

//       {activeGroupCode ? (
//         <GroupNotes
//           groupCode={activeGroupCode}
//           user={user}
//           onBack={() => setActiveGroupCode(null)}
//           onGroupUpdated={handleGroupUpdated}
//         />
//       ) : (
//         <Dashboard
//           user={user}
//           groups={groups}
//           onJoinGroup={handleJoinGroup}
//           onCreateGroup={handleCreateGroup}
//           onLogout={handleLogout}
//           onOpenGroup={(code) => setActiveGroupCode(code)}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GroupNotes from "./pages/GroupNotes";
import { apiGet, apiPost } from "./api";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);
  const [activeGroupCode, setActiveGroupCode] = useState(null);

  const onLoginSuccess = async (u) => {
    setUser(u);
    const r = await apiGet(`/users/${u.id}/groups`);
    if (r.groups) setGroups(r.groups);
  };

  const handleCreateGroup = async ({ name, description }) => {
    const res = await apiPost("/groups/create", { user_id: user.id, name, description });
    if (res.success) {
      const gRes = await apiGet(`/users/${user.id}/groups`);
      if (gRes.groups) setGroups(gRes.groups);
      return res.group_id || null;
    } else {
      alert(res.error || "Create failed");
      return null;
    }
  };

  const handleJoinGroup = async (groupCode) => {
    const res = await apiPost("/groups/join", { user_id: user.id, group_code: groupCode });
    if (res.success) {
      const gRes = await apiGet(`/users/${user.id}/groups`);
      if (gRes.groups) setGroups(gRes.groups);
      return true;
    } else {
      alert(res.error || "Join failed");
      return false;
    }
  };

  // const handleLogout = () => {
  //   setUser(null);
  //   setGroups([]);
  //   setActiveGroupCode(null);
  // };
  // inside handleLogout in App.jsx
const handleLogout = () => {
  localStorage.removeItem("token"); // ✅ Clear token
  setUser(null);
  setGroups([]);
  setActiveGroupCode(null);
};


  const handleGroupUpdated = async () => {
    if (!user) return;
    const r = await apiGet(`/users/${user.id}/groups`);
    if (r.groups) setGroups(r.groups);
  };

  if (!user) return <Login onLoginSuccess={onLoginSuccess} />;

  return (
    <div className="min-h-screen bg-background text-secondary">
      <Navbar
        user={user}
        onLogout={handleLogout}
        onBack={() => setActiveGroupCode(null)}
        activeGroupCode={activeGroupCode}
        onOpenDashboard={() => setActiveGroupCode(null)}
      />

      <div className="p-6">
        {activeGroupCode ? (
          <GroupNotes
            groupCode={activeGroupCode}
            user={user}
            onBack={() => setActiveGroupCode(null)}
            onGroupUpdated={handleGroupUpdated}
          />
        ) : (
          <Dashboard
            user={user}
            groups={groups}
            onJoinGroup={handleJoinGroup}
            onCreateGroup={handleCreateGroup}
            onLogout={handleLogout}
            onOpenGroup={(code) => setActiveGroupCode(code)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
