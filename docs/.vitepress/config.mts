import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Lxy-Vue-Admin',
  titleTemplate: ':title | Lxy-Vue-Admin 文档',
  description: '基于 Vben Admin 5 和 Ant Design Vue Next 的企业级中后台管理系统文档，提供完整的前端解决方案',
  
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#1890ff' }],
    ['meta', { name: 'author', content: 'Lxy-Vue-Admin Team' }],
    ['meta', { name: 'keywords', content: 'Vue,Admin,Vben,Ant Design,TypeScript,中后台管理系统,企业级前端框架' }],
    ['link', { rel: 'icon', href: '/images/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.svg' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Lxy-Vue-Admin' }],
    ['meta', { name: 'og:title', content: 'Lxy-Vue-Admin - 企业级中后台管理系统' }],
    ['meta', { name: 'og:description', content: '基于 Vben Admin 5 和 Ant Design Vue Next 的企业级中后台管理系统文档' }],
    ['meta', { name: 'og:image', content: '/images/logo.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Lxy-Vue-Admin - 企业级中后台管理系统' }],
    ['meta', { name: 'twitter:description', content: '基于 Vben Admin 5 和 Ant Design Vue Next 的企业级中后台管理系统文档' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
  ],
  
  sitemap: {
    hostname: 'https://lxy-vue-admin.example.com',
    lastmodDateOnly: true,
  },
  
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'Lxy-Vue-Admin',
    
    editLink: {
      pattern: 'https://gitee.com/my_spaces/lxy-vue-admin/edit/main/docs/:path',
      text: '在 Gitee 上编辑此页',
    },
    
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '开发指南', 
        items: [
          { text: '项目概述', link: '/scripts/guide/01-项目概述' },
          { text: '环境配置', link: '/scripts/guide/02-环境配置指南' },
          { text: '架构设计', link: '/scripts/guide/03-架构设计说明' },
          { text: '核心模块', link: '/scripts/guide/04-核心模块功能详解' },
          { text: '开发规范', link: '/scripts/guide/06-开发规范' },
          { text: '常见问题', link: '/scripts/guide/07-常见问题解决方案' },
        ]
      },
      { 
        text: 'API 文档', 
        link: '/scripts/api/05-API接口文档' 
      },
      { 
        text: '组件文档',
        items: [
          { text: '组件介绍', link: '/scripts/components/introduction' },
          { text: '通用组件', link: '/scripts/components/common-ui/vben-form' },
          { text: '布局组件', link: '/scripts/components/layout-ui/page' },
        ]
      },
      { 
        text: '开发文档',
        items: [
          { text: '文档索引', link: '/scripts/README' },
          { text: '开发流程', link: '/scripts/development/README' },
          { text: '部署指南', link: '/scripts/deployment/README' },
          { text: '维护指南', link: '/scripts/maintenance/README' },
        ]
      },
      { text: '分析文档', link: '/scripts/analysis/开发文档' },
      { text: '变更日志', link: '/scripts/changelog/CHANGELOG' },
    ],
    
    sidebar: {
      '/scripts/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '项目概述', link: '/scripts/guide/01-项目概述' },
            { text: '环境配置指南', link: '/scripts/guide/02-环境配置指南' },
            { text: '架构设计说明', link: '/scripts/guide/03-架构设计说明' },
            { text: '核心模块功能详解', link: '/scripts/guide/04-核心模块功能详解' },
            { text: '开发规范', link: '/scripts/guide/06-开发规范' },
            { text: '常见问题解决方案', link: '/scripts/guide/07-常见问题解决方案' },
          ]
        }
      ],
      '/scripts/api/': [
        {
          text: 'API 文档',
          items: [
            { text: 'API 接口文档', link: '/scripts/api/05-API接口文档' },
          ]
        }
      ],
      '/scripts/components/': [
        {
          text: '组件文档',
          items: [
            { text: '介绍', link: '/scripts/components/introduction' },
          ]
        },
        {
          text: '通用组件',
          collapsed: false,
          items: [
            { text: 'Alert 警告', link: '/scripts/components/common-ui/vben-alert' },
            { text: 'API 组件', link: '/scripts/components/common-ui/vben-api-component' },
            { text: '数字动画', link: '/scripts/components/common-ui/vben-count-to-animator' },
            { text: 'Drawer 抽屉', link: '/scripts/components/common-ui/vben-drawer' },
            { text: '省略文本', link: '/scripts/components/common-ui/vben-ellipsis-text' },
            { text: 'Form 表单', link: '/scripts/components/common-ui/vben-form' },
            { text: 'Modal 模态框', link: '/scripts/components/common-ui/vben-modal' },
            { text: 'VxeTable 表格', link: '/scripts/components/common-ui/vben-vxe-table' },
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: 'Page 页面', link: '/scripts/components/layout-ui/page' },
          ]
        }
      ],
      '/scripts/analysis/': [
        {
          text: '分析文档',
          items: [
            { text: '开发文档', link: '/scripts/analysis/开发文档' },
            { text: '登录页面架构分析', link: '/scripts/analysis/登录页面架构分析' },
            { text: 'package.json 对比分析', link: '/scripts/analysis/package.json 对比分析' },
          ]
        }
      ],
      '/scripts/changelog/': [
        {
          text: '变更日志',
          items: [
            { text: 'CHANGELOG', link: '/scripts/changelog/CHANGELOG' },
          ]
        }
      ],
      '/scripts/development/': [
        {
          text: '开发流程',
          items: [
            { text: '开发流程指南', link: '/scripts/development/README' },
          ]
        }
      ],
      '/scripts/deployment/': [
        {
          text: '部署指南',
          items: [
            { text: '部署指南', link: '/scripts/deployment/README' },
          ]
        }
      ],
      '/scripts/maintenance/': [
        {
          text: '维护指南',
          items: [
            { text: '维护指南', link: '/scripts/maintenance/README' },
          ]
        }
      ],
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/my_spaces/lxy-vue-admin', ariaLabel: 'Gitee' }
    ],
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 Lxy-Vue-Admin Team'
    },
    
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },
    
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    
    externalLinkIcon: true,
  },
  
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
  
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunks/[name]-[hash].js',
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
})
