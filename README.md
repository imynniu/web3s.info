## web3s.info

> Dapp connecting the world

详情请访问 web3s.info

使用技术

| 技术        | 简介             | 文档                                      |
| ----------- | ---------------- | ----------------------------------------- |
| react       | 前端框架         | https://react.zcopy.site/                 |
| tailwindcss | 组件样式         | https://tailwind.nodejs.cn/               |
| ethers.js   | 于区块链交互     | https://docs.ethers.org/v6/               |
| solidity    | 智能合约编写语言 | https://solidity-cn.readthedocs.io/       |
| vite        | 前端脚手架       | https://ptymt.cn/                         |
| web3modal   | 集成钱包         | https://docs.walletconnect.com/quickstart |
|             |                  |                                           |



### 项目流程

1 使用vite创建react项目

```js
npm init vite@latest
```

2 安装tailwindcss

```js
npm install -D tailwindcss
npx tailwindcss init
```

3 安装web3modal

我们正在使用 web3Modal、wagmi 和 viem 实现多个钱包

- • **wagmi**：它是 React Hooks 的集合，包含开始使用以太坊所需的一切，您可以将其与其他 React Web3 框架（如 web3-react）进行比较。[1]查看文档[2]以获取更多信息。
- • **viem**：它是以太坊的 TypeScript 接口，提供用于与以太坊交互的低级无状态原语。出于明显的包大小原因[3]，我们使用 viem 作为 ethers.js 的替代品。
- • **web3Modal**：Web3Modal SDK 允许您轻松地将 Web3 dapp 与钱包连接。它为 dapp 提供了一个简单直观的界面来请求操作，例如签署交易以及与区块链上的智能合约交互。查看文档[4]以获取更多信息。

