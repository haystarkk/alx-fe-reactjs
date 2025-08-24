import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 React Router Advanced Demo</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
