const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <p>Manage your account settings and preferences.</p>
      
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Account Settings</h3>
        <form>
          <div className="form-group">
            <label className="form-label">Email Notifications</label>
            <div>
              <label>
                <input type="checkbox" /> Receive email notifications
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Theme</label>
            <select className="form-input">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
