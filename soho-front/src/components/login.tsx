import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 验证表单
    const newErrors = {
      username: '',
      password: '',
    };

    if (!formData.username.trim()) {
      newErrors.username = '请输入用户名';
    }
    if (!formData.password.trim()) {
      newErrors.password = '请输入密码';
    }

    setErrors(newErrors);

    // 如果没有错误，则提交表单
    if (!newErrors.username && !newErrors.password) {
      console.log('登录信息:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 当用户开始输入时清除错误提示
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="login-box">
        <div className="form-header">
          <h1>Welcome Back</h1>
          <p>欢迎回来，请登录您的账号</p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className={`input-group ${errors.username ? 'error' : ''}`}>
            <input
              type="text"
              name="username"
              placeholder="用户名"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="input-icon">
              <i className="fas fa-user"></i>
            </div>
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>
          <div className={`input-group ${errors.password ? 'error' : ''}`}>
            <input
              type="password"
              name="password"
              placeholder="密码"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="input-icon">
              <i className="fas fa-lock"></i>
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              <span>记住我</span>
            </label>
            <a href="#" className="forgot-link">忘记密码?</a>
          </div>
          <button type="submit">
            <span>登录</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        <div className="social-login">
          <p>其他登录方式</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-weixin"></i>
            </a>
          </div>
        </div>

        <div className="register-option">
          <p>还没有账号？</p>
          <a href="#" className="register-link">立即注册</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
