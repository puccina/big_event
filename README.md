vue3 + element-plus
# Vue3-big-event-admin

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
# big_event

# 文章管理系统

## 简介

文章管理系统是一个基于Vue.js和Element Plus构建的全栈Web应用，旨在提供文章的增删改查、内容编辑、分类管理等功能。系统支持富文本编辑，允许用户以所见即所得的方式创作和发布文章。

## 技术栈

- 前端框架：Vue.js
- UI库：Element Plus
- 富文本编辑器：Vue-Up Quill
- HTTP请求：Axios
- 状态管理：Pinia
- 持久化存储：Pinia Plugin Persistedstate
- 后端API：Node.js/Express 或其他（请根据实际后端技术栈修改）

## 功能特点

- **文章管理**：添加、编辑、发布和管理文章。
- **富文本编辑**：使用Vue-Up Quill实现富文本编辑功能。
- **图片处理**：将网络图片地址转换为File对象，方便上传。
- **分类管理**：添加和编辑文章分类，包括名称和别名的验证。
- **API交互**：与后端API进行数据交互，处理请求和响应。
- **用户界面**：响应式设计，支持多种设备访问。
- **状态管理**：使用Pinia管理应用状态。
- **路由管理**：使用Vue Router管理页面路由和权限。

## 安装指南

### 环境要求

- Node.js
- pnpm

### 安装步骤

1. 克隆项目到本地：

```bash
git clone https://github.com/[你的GitHub用户名]/文章管理系统.git
```

2. 进入项目目录：

```bash
cd 文章管理系统
```

3. 安装依赖：

```bash
pnpm install
```

4. 启动项目：

```bash
pnpm run dev
```

## 使用说明

- 通过浏览器访问 `http://localhost:8080` 即可查看应用。
- 使用预定义的用户凭证登录系统（如果有后端服务和用户认证）。
- 通过UI界面进行文章的增删改查操作。

## 贡献指南

欢迎任何形式的贡献，包括但不限于：

- 报告问题
- 提交修复
- 新功能开发
- 文档改进


