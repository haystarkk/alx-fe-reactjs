import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('controlled');

  return (
    <div className="container">
      <header>
        <h1>React Form Handling</h1>
        <p className="subtitle">Comparing Controlled Components and Formik</p>
      </header>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'controlled' ? 'active' : ''}`}
          onClick={() => setActiveTab('controlled')}
        >
          Controlled Components
        </button>
        <button 
          className={`tab ${activeTab === 'formik' ? 'active' : ''}`}
          onClick={() => setActiveTab('formik')}
        >
          Formik
        </button>
      </div>
      
      {activeTab === 'controlled' ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}

export default App;
