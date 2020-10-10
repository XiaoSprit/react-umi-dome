import React from 'react';

export const Nav00DataSource = {
    wrapper: { className: 'header0 home-page-wrapper' },
    page: { className: 'home-page' },
    logo: {
      className: 'header0-logo',
      children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    Menu: {
      className: 'header0-menu',
      children: [
        {
          name: 'item0',
          className: 'header0-item',
          children: {
            href: '#',
            children: [{ children: '导航一', name: 'text' }],
          },
          subItem: [
            {
              name: 'sub0',
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'image0',
                    className: 'item-image',
                    children:
                      'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                  },
                  {
                    name: 'title',
                    className: 'item-title',
                    children: 'Ant Design',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '企业级 UI 设计体系',
                  },
                ],
              },
            },
            {
              name: 'sub1',
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'image0',
                    className: 'item-image',
                    children:
                      'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                  },
                  {
                    name: 'title',
                    className: 'item-title',
                    children: 'Ant Design',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '企业级 UI 设计体系',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'item1',
          className: 'header0-item',
          children: {
            href: '/page2',
            children: [{ children: '导航二', name: 'text' }],
          },
        },
        {
          name: 'item2',
          className: 'header0-item',
          children: {
            href: '#',
            children: [{ children: '导航三', name: 'text' }],
          },
        },
        {
          name: 'item3',
          className: 'header0-item',
          children: {
            href: '#',
            children: [{ children: '导航四', name: 'text' }],
          },
        },
      ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
};

export const Footer01DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
  