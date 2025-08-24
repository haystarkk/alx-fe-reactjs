const Contact = () => {
  return (
    <div className="card">
      <h1 className="page-title">Contact Us</h1>
      <p>Have questions about React Router? Reach out to us!</p>
      <form>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea className="form-input" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
