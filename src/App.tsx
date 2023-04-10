import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import TodoPage from './pages/TodoPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />,
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
