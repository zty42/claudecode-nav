# claudecode 中转站集合

基于 Astro 框架的静态导航网站，用于展示 AFF 联盟推广链接。

## 特性

- ✅ **SEO 优化** - 静态生成，搜索引擎友好
- ✅ **分类展示** - 站点按分类自动分组显示
- ✅ **Markdown 配置** - 每个站点一个独立 Markdown 文件，易于维护
- ✅ **详情页面** - 点击查看详情进入独立页面，展示完整介绍
- ✅ **简约设计** - 浅色主题，清晰易读

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

访问 `http://localhost:4321` 查看网站。

### 构建生产版本

```bash
pnpm build
```

构建产物在 `dist/` 目录。

### 预览生产版本

```bash
pnpm preview
```

## 添加新站点

在 `src/content/sites/` 目录下创建新的 Markdown 文件，例如 `my-site.md`：

```yaml
---
title: "站点名称"
category: "分类名称"
affLink: "https://example.com/?ref=xxx"
description: "简短描述，显示在卡片上"
logo: "/logos/my-site.svg"
featured: false
order: 10
---

## 详细介绍

这里写站点的详细 Markdown 内容...
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 站点名称 |
| `category` | ✅ | 分类名称，相同分类会自动分组 |
| `affLink` | ✅ | AFF 推广链接 |
| `description` | ✅ | 简短描述，显示在卡片上 |
| `logo` | ❌ | Logo 图片路径，相对于 `public/` |
| `featured` | ❌ | 是否推荐，默认 `false` |
| `order` | ❌ | 排序权重，数字越小越靠前，默认 `100` |

### 添加 Logo

将 Logo 图片放入 `public/logos/` 目录，支持 PNG、SVG、WebP 等格式。

## 部署

### Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 框架选择 Astro
4. 部署完成

### Cloudflare Pages

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 创建项目
3. 构建命令：`pnpm build`
4. 输出目录：`dist`
5. 部署完成

## 目录结构

```
aff-nav/
├── src/
│   ├── content/
│   │   ├── config.ts         # Content Collections 配置
│   │   └── sites/            # 站点 Markdown 文件
│   ├── components/           # Astro 组件
│   ├── layouts/              # 页面布局
│   ├── pages/                # 页面路由
│   └── styles/               # 样式文件
├── public/
│   ├── logos/                # 站点 Logo
│   └── favicon.svg           # 网站图标
└── astro.config.mjs          # Astro 配置
```

## 自定义

### 修改站点名称

编辑 `src/components/Header.astro` 中的 `siteName` 默认值。

### 修改主题颜色

编辑 `src/styles/global.css` 中的 CSS 变量。

### 修改 SEO 信息

编辑 `astro.config.mjs` 中的 `site` 字段为你的实际域名。

### 配置 Google Analytics

1. 在项目根目录创建 `.env` 文件（可从 `.env.example` 复制）
2. 填入你的 GA4 Measurement ID：

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. 在 Vercel/Cloudflare 部署时，添加同名环境变量

## License

MIT
