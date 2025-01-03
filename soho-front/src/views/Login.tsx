import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Github, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '@/services/api';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    phone: '',
    password: '',
    general: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)} ${numbers.slice(3, 7)} ${numbers.slice(7, 11)}`;
    }
  };

  const isValidPhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    return /^1[3-9]\d{9}$/.test(numbers);
  };
  const isValidPassword = (password: string) => {
    const passwordC = password.replace(/\D/g, '');
    return passwordC.length > 6;
  };
  const validateForm = () => {
    const newErrors = {
      phone: '',
      password: '',
      general: '',
    };

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入手机号';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = '请输入正确的手机号格式';
    }

    if (!formData.password.trim()) {
      newErrors.password = '请输入密码';
    }

    setErrors(newErrors);
    return !newErrors.phone && !newErrors.password;
  };

  const { login } = useAuth()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await loginAPI.login(formData.phone.replace(/\D/g, ''), formData.password);
        if (response.data.code === 200) {
          login()
          navigate('/');
        } else {
          setErrors(prev => ({ ...prev, general: response.data.message }));
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const serverError = error.response.data;
          setErrors(prev => ({ ...prev, general: serverError.message || '登录失败，请检查您的凭证。' }));
        } else {
          setErrors(prev => ({ ...prev, general: '登录过程中发生错误，请稍后再试。' }));
        }
        console.error('Login error:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: '', general: '' }));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 animate-gradient-x" />

      <Card className={`w-[90%] sm:w-[440px] lg:w-[480px] relative z-10 shadow-xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <CardHeader className="space-y-1 px-6 py-8">
          <CardTitle className="text-2xl lg:text-4xl text-center font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-center text-base lg:text-lg">
            欢迎回来，请登录您的账号
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <Label className="text-sm lg:text-base" htmlFor="phone">
                手机号
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="请输入手机号"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => {
                  if (formData.phone != '' && !isValidPhone(formData.phone)) {
                    setErrors(prev => ({ ...prev, phone: '请输入正确的手机号格式' }));
                  } else {
                    setErrors(prev => ({ ...prev, phone: '' }));
                  }
                }}
                className={`h-11 lg:h-12 transition-all duration-300 ${errors.phone ? 'border-red-500' : ''}`}
                maxLength={14}
              />
              {errors.phone && (
                <p className="animate-customFadeInScale relative bg-red-50 text-red-700 rounded-md shadow-md p-3 text-sm font-medium tracking-wide leading-5 max-w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center w-8 h-full">
                    <AlertCircle className="h-4 w-4" />
                  </span>
                  <span className="pl-8">{errors.phone}</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm lg:text-base" htmlFor="password">
                密码
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="请输入密码"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => {
                  if (formData.password != '' && !isValidPassword(formData.password)) {
                    setErrors(prev => ({ ...prev, password: '密码的长度必须大于6' }));
                  } else {
                    setErrors(prev => ({ ...prev, password: '' }));
                  }
                }}
                className={`h-11 lg:h-12 transition-all duration-300 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <p className="animate-customFadeInScale relative bg-red-50 text-red-700 rounded-md shadow-md p-3 text-sm font-medium tracking-wide leading-5 max-w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center w-8 h-full">
                    <AlertCircle className="h-4 w-4" />
                  </span>
                  <span className="pl-8">{errors.password}</span>
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-gray-300 h-4 w-4 lg:h-5 lg:w-5"
                />
                <Label htmlFor="remember" className="text-sm lg:text-base">记住我</Label>
              </div>
              <Button variant="link" className="px-0 text-sm lg:text-base">忘记密码?</Button>
            </div>

            <Button
              type="submit"
              className="w-full h-11 lg:h-12 text-base lg:text-lg mt-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              登录
            </Button>

            <Button
              variant="link"
              className="w-full h-11 lg:h-12 text-base lg:text-lg mt-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => navigate('/')}
            >
              暂不登录
            </Button>

            {errors.general && (
              <p className="animate-customFadeInScale relative bg-red-50 text-red-700 rounded-md shadow-md p-3 text-sm font-medium tracking-wide leading-5 max-w-full">
                <span className="absolute inset-y-0 left-0 flex items-center justify-center w-8 h-full">
                  <AlertCircle className="h-5 w-5" />
                </span>
                <span className="pl-8">{errors.general}</span>
              </p>
            )}
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 px-6 lg:px-8 pb-8">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs lg:text-sm uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                其他登录方式
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="icon" className="h-11 w-11 lg:h-12 lg:w-12 transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-11 w-11 lg:h-12 lg:w-12 transition-all duration-300 hover:scale-110">
              <Mail className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-11 w-11 lg:h-12 lg:w-12 transition-all duration-300 hover:scale-110">
              <MessageSquare className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>

          <div className="text-center text-sm lg:text-base mt-4">
            还没有账号？
            <Button variant="link" className="pl - 1 text - sm lg:text - base text - center" onClick={() => navigate('/register')}>
              立即注册
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;