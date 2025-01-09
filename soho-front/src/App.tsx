import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './views/Home';
import { useAuth } from './contexts/AuthContext';
import Login from './views/Login';
import Register from './views/Register';
import Article from './views/Article';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // 在这里返回一个加载指示器或其他占位符组件
    return <div>Loading...</div>;
  }

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
        // <PrivateRoute>
        <Home />
        // </PrivateRoute>
      ),
    },
    {
      path: '/home',
      element: (
        // <PrivateRoute>
        <Home />
        // </PrivateRoute>
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
    {
      path: '/article',
      element: <Article />,
    },
    // 可以继续添加更多的路由
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;