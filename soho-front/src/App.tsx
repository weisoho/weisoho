import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './views/Home';
import { useAuth } from './contexts/AuthContext';
import Login from './views/Login';
import Register from './views/Register';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    // 可以继续添加更多的路由
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;