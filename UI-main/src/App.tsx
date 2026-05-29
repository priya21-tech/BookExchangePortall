import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';

// Lazy loading could be added here for production, but direct imports are fine for this build size.
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { BookDetails } from './pages/BookDetails';
import { AddBook } from './pages/AddBook';
import { Requests } from './pages/Requests';
import { AdminDashboard } from './pages/AdminDashboard';
import { Landing } from './pages/Landing';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bright pb-20 md:pb-0">
      <Navigation />
      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page mapped to root, without the Navigation layout */}
        <Route path="/" element={<Landing />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard and other tools now mapped properly inside the Nav layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
