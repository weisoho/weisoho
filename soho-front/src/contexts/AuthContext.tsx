import { checkAuthApi, loginAPI } from '@/services/api';
import { createContext, useContext, useState, useEffect } from 'react';

// 定义 AuthContext 的类型
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  isLoading:boolean
}

// 创建 Context
const AuthContext = createContext<AuthContextType | null>(null);

// AuthProvider 组件
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 新增的加载状态

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await checkAuthApi.checkAuth();
        if (response.status === 200) {
          console.log("setIsAuthenticated(true):");
          setIsAuthenticated(true);
        } else {
          console.log("setIsAuthenticated(false)");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('验证登录状态出错：', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false); // 检查完成后设置为 false
      }
    };
    checkAuthentication();
  }, []);

  const login = async () => {
    // 登录逻辑...
    // 不要在这里直接调用 setIsAuthenticated(true)
  };

  const logout = async () => {
    try {
      const response = await loginAPI.logout();
      if (response.status === 200) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('登出请求出错：', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
