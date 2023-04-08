import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

function App() {
  return (
    <div className="content">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
