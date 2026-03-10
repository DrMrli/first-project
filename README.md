# My Vite Project

## 项目名称
- **项目全称**：My Vite Project
- **项目简称**：MVP
- **一句话简介**：基于Vite和Vue 3的前端项目脚手架

## 项目介绍

### 项目概述
My Vite Project是一个基于Vite构建工具和Vue 3框架的前端项目脚手架，旨在提供一个快速、高效的前端开发环境，帮助开发者快速启动新的前端项目。

### 解决问题
- 简化前端项目初始化流程，减少配置时间
- 提供标准化的项目结构和开发规范
- 实现开发/生产环境的差异化配置
- 集成代码格式化工具，确保代码质量

### 核心特点/竞争优势
1. **快速启动**：基于Vite构建工具，提供极快的开发服务器启动速度
2. **环境配置**：支持开发/生产环境的差异化配置，无需修改源代码
3. **代码规范**：集成Prettier代码格式化工具，确保代码风格一致性
4. **现代技术栈**：使用Vue 3 Composition API，支持最新的前端特性
5. **易于扩展**：模块化的项目结构，便于功能扩展和维护

### 应用场景
- 快速启动新的前端项目开发
- 作为前端项目的基础脚手架
- 学习Vue 3和Vite的最佳实践

## 快速开始 / Quick Start

### 环境要求
- **Node.js版本**：v14.17.0+
- **npm版本**：v6.14.0+

### 安装步骤
1. **获取项目代码**
   ```bash
   git clone https://github.com/DrMrli/first-project.git
   cd my-vite-project
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

### 启动/运行命令
- **开发环境**
  ```bash
  npm run dev
  ```

- **生产环境构建**
  ```bash
  npm run build
  ```

- **生产环境预览**
  ```bash
  npm run preview
  ```

### 访问方式
- **开发环境**：http://localhost:5173/
- **生产环境预览**：http://localhost:4173/

### 验证步骤
1. 启动开发服务器后，访问 http://localhost:5173/
2. 确认页面显示环境配置信息，包括应用标题和API基础地址
3. 执行构建命令后，启动预览服务器并访问 http://localhost:4173/
4. 确认生产环境配置信息正确显示

## 目录结构

```
my-vite-project/
├── public/              # 静态资源目录
│   └── vite.svg        # Vite默认图标
├── src/                # 源代码目录
│   ├── assets/         # 静态资源
│   │   └── vue.svg     # Vue图标
│   ├── components/     # 组件目录
│   │   └── HelloWorld.vue  # 示例组件
│   ├── App.vue         # 根组件
│   ├── main.js         # 入口文件
│   └── style.css       # 全局样式
├── .env.development    # 开发环境配置
├── .env.production     # 生产环境配置
├── .gitignore          # Git忽略文件
├── .prettierignore     # Prettier忽略文件
├── .prettierrc         # Prettier配置
├── README.md           # 项目文档
├── index.html          # HTML模板
├── package.json        # 项目配置和依赖
├── package-lock.json   # 依赖版本锁定
└── vite.config.js      # Vite配置
```

- **public/**：存放静态资源，不会被构建工具处理
- **src/**：源代码目录，包含应用的核心代码
- **src/components/**：组件目录，存放可复用的Vue组件
- **.env.***：环境配置文件，用于不同环境的配置
- **vite.config.js**：Vite构建工具的配置文件

## 功能清单 / 功能介绍

### 环境配置管理
- **环境变量配置**：支持开发和生产环境的差异化配置
- **配置显示**：在页面上清晰展示当前环境的配置信息
- **动态切换**：根据构建命令自动切换环境配置

### 代码格式化
- **Prettier集成**：自动格式化代码，确保代码风格一致性
- **格式化脚本**：提供npm run format命令快速格式化所有文件

### 开发工具集成
- **Vite开发服务器**：提供快速的热更新和开发体验
- **构建优化**：生产环境构建时自动优化代码

## 技术栈

### 前端技术栈
- **核心框架**：Vue 3.5.25+
- **构建工具**：Vite 7.3.1+
- **代码格式化**：Prettier 3.8.1+
- **Vue插件**：@vitejs/plugin-vue 6.0.2+

### 开发工具与环境
- **版本控制**：Git
- **代码质量**：Prettier
- **包管理**：npm

## 配置说明

### 环境变量

| 变量名称 | 说明和用途 | 默认值 | 是否必填 |
|---------|-----------|--------|--------|
| VITE_APP_TITLE | 应用标题 | 开发环境应用名称/生产环境应用名称 | 是 |
| VITE_API_BASE_URL | API基础地址 | http://dev-api.example.com/http://api.example.com | 是 |

### 配置文件
- **.env.development**：开发环境配置文件
- **.env.production**：生产环境配置文件
- **vite.config.js**：Vite构建工具配置
- **.prettierrc**：Prettier代码格式化配置

### 关键配置项
- **VITE_前缀**：所有环境变量必须以VITE_为前缀，确保能被Vite正确识别
- **环境模式**：通过npm run dev启动开发环境，npm run build构建生产环境
- **端口配置**：开发服务器默认端口5173，预览服务器默认端口4173

### API地址与密钥管理
- **API基础地址**：通过VITE_API_BASE_URL环境变量配置
- **敏感信息**：环境配置文件已添加到.gitignore，防止敏感信息提交到代码仓库

## 接口文档（如有）

项目当前阶段未实现后端API接口，仅提供前端环境配置示例。

## 常见问题 / FAQ

### 常见错误
1. **端口被占用**
   - 错误信息：`Error: listen EADDRINUSE: address already in use :::5173`
   - 解决方案：关闭占用端口的进程，或修改Vite配置使用其他端口

2. **环境变量不生效**
   - 错误信息：环境变量值显示为undefined
   - 解决方案：确保环境变量以VITE_为前缀，重启开发服务器

### 性能问题
- **构建速度慢**：Vite的开发服务器启动速度很快，但首次构建可能需要一些时间
- **生产构建优化**：Vite会自动进行代码分割和压缩，优化生产构建结果

### 兼容性问题
- **浏览器支持**：Vue 3和Vite支持所有现代浏览器，IE 11及以下不支持
- **Node.js版本**：建议使用Node.js v14.17.0+，旧版本可能会有兼容性问题

### 注意事项
- **环境配置**：修改环境配置后需要重启开发服务器或重新构建
- **代码格式化**：建议在提交代码前运行npm run format确保代码风格一致
- **依赖管理**：定期更新依赖包以获取最新的功能和安全修复

## 贡献指南（可选）

### Issue贡献
- 提交bug报告或功能建议时，请提供详细的描述和复现步骤
- 使用清晰的标题和标签，便于分类和处理

### 代码贡献
1. Fork项目仓库
2. 创建特性分支（feature/xxx）
3. 提交代码更改
4. 推送分支到远程仓库
5. 创建Pull Request

### 开发环境搭建
1. 克隆项目代码
2. 安装依赖：npm install
3. 启动开发服务器：npm run dev
4. 运行代码格式化：npm run format

### 代码审查标准
- 代码风格一致，通过Prettier格式化
- 功能实现完整，符合需求描述
- 代码结构清晰，易于理解和维护
- 无明显的性能问题或安全隐患

## 许可证 / License

项目使用MIT许可证。

```
MIT License

Copyright (c) 2026 My Vite Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 致谢（可选）

### 主要贡献者
- 项目维护者：libohandeicloud-web

### 感谢使用的开源项目或工具
- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 现代化前端构建工具
- [Prettier](https://prettier.io/) - 代码格式化工具

### 联系方式
- 邮箱：libohandeicloud@icloud.com
- GitHub：[DrMrli/first-project](https://github.com/DrMrli/first-project)
