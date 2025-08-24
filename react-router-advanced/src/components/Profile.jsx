import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileSettings from './Profile/ProfileSettings';

const Profile = () => {
  return (
    <div className="card">
      <h1 className="page-title">User Profile</h1>
      
      <nav className="profile-nav">
        <NavLink 
          to="details" 
          className={({ isActive }) => 
            isActive ? "profile-link active" : "profile-link"
          }
        >
          Details
        </NavLink>
        <NavLink 
          to="settings" 
          className={({ isActive }) => 
            isActive ? "profile-link active" : "profile-link"
          }
        >
          Settings
        </NavLink>
      </nav>
      
      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="*" element={<ProfileDetails />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
