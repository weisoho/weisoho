package org.soho.sohoweb.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jetbrains.annotations.NotNull;
import org.soho.sohoweb.po.UserPo;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author wesoho
 * @version 1.0
 * @description: 登录拦截过滤器
 * @date 2024/12/1 21:44
 */
@WebFilter("/*")
public class LoginFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, @NotNull HttpServletResponse response, @NotNull FilterChain filterChain) throws ServletException, IOException {
        if("/login".equals(request.getRequestURI()) || "/logout".equals(request.getRequestURI())||"register".equals(request.getRequestURI())){
            filterChain.doFilter(request, response); 
            return;
        }
        // 已登录就放行
        UserPo user = (UserPo) request.getSession().getAttribute("user");
        if (user != null) {
            filterChain.doFilter(request, response);
            return;
        }
        // 走到这里就代表是其他接口，且没有登录
        // 设置响应数据类型为json（前后端分离）
        response.setContentType("application/json;charset=utf-8");
        PrintWriter out = response.getWriter();
        // 设置响应内容，结束请求
        out.write("请先登录");
        out.flush();
        out.close();
    }
}
