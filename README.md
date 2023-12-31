<h1 align="center">
  <img src="https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/icon.png" alt="icon" style="width: 65px; height: 65px"><br>
  The return of the Clear Chats button
</h1>

![separator](https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/line.png)

## ❓ Info

OpenAI removed the shortcut button to clear all chats. I didn't like this change, so I brought it back, but made _better_ 😄

This userscript also uses **[KudoAI/chatgpt.js](https://github.com/kudoai/chatgpt.js)**, so definitetly go check them out.

<p align="center">
  <a href="https://chatgpt.js.org">
    <picture> 
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png"> 
      <img width=546 alt="chatgpt.js" src="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
    </picture>
  </a>
</p>

![separator](https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/line.png)

## ⚙️ Installation

Install any userscript manager extension in your browser, such as **Tampermonkey**, **Greasemonkey** or **Violentmonkey**, then click the button below for a clean installation of the script.

[![install-button](https://img.shields.io/badge/INSTALL-228B22?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik01LjYyNSAxNUM1LjYyNSAxNC41ODU4IDUuMjg5MjEgMTQuMjUgNC44NzUgMTQuMjVDNC40NjA3OSAxNC4yNSA0LjEyNSAxNC41ODU4IDQuMTI1IDE1SDUuNjI1Wk00Ljg3NSAxNkg0LjEyNUg0Ljg3NVpNMTkuMjc1IDE1QzE5LjI3NSAxNC41ODU4IDE4LjkzOTIgMTQuMjUgMTguNTI1IDE0LjI1QzE4LjExMDggMTQuMjUgMTcuNzc1IDE0LjU4NTggMTcuNzc1IDE1SDE5LjI3NVpNMTEuMTA4NiAxNS41Mzg3QzEwLjg1MzkgMTUuODY1MyAxMC45MTIxIDE2LjMzNjYgMTEuMjM4NyAxNi41OTE0QzExLjU2NTMgMTYuODQ2MSAxMi4wMzY2IDE2Ljc4NzkgMTIuMjkxNCAxNi40NjEzTDExLjEwODYgMTUuNTM4N1pNMTYuMTkxNCAxMS40NjEzQzE2LjQ0NjEgMTEuMTM0NyAxNi4zODc5IDEwLjY2MzQgMTYuMDYxMyAxMC40MDg2QzE1LjczNDcgMTAuMTUzOSAxNS4yNjM0IDEwLjIxMjEgMTUuMDA4NiAxMC41Mzg3TDE2LjE5MTQgMTEuNDYxM1pNMTEuMTA4NiAxNi40NjEzQzExLjM2MzQgMTYuNzg3OSAxMS44MzQ3IDE2Ljg0NjEgMTIuMTYxMyAxNi41OTE0QzEyLjQ4NzkgMTYuMzM2NiAxMi41NDYxIDE1Ljg2NTMgMTIuMjkxNCAxNS41Mzg3TDExLjEwODYgMTYuNDYxM1pNOC4zOTEzOCAxMC41Mzg3QzguMTM2NjIgMTAuMjEyMSA3LjY2NTMzIDEwLjE1MzkgNy4zMzg3MyAxMC40MDg2QzcuMDEyMTIgMTAuNjYzNCA2Ljk1Mzg3IDExLjEzNDcgNy4yMDg2MiAxMS40NjEzTDguMzkxMzggMTAuNTM4N1pNMTAuOTUgMTZDMTAuOTUgMTYuNDE0MiAxMS4yODU4IDE2Ljc1IDExLjcgMTYuNzVDMTIuMTE0MiAxNi43NSAxMi40NSAxNi40MTQyIDEyLjQ1IDE2SDEwLjk1Wk0xMi40NSA1QzEyLjQ1IDQuNTg1NzkgMTIuMTE0MiA0LjI1IDExLjcgNC4yNUMxMS4yODU4IDQuMjUgMTAuOTUgNC41ODU3OSAxMC45NSA1SDEyLjQ1Wk00LjEyNSAxNVYxNkg1LjYyNVYxNUg0LjEyNVpNNC4xMjUgMTZDNC4xMjUgMTguMDUzMSA1Ljc1MjU3IDE5Ljc1IDcuOCAxOS43NVYxOC4yNUM2LjYxNjU3IDE4LjI1IDUuNjI1IDE3LjI2MDcgNS42MjUgMTZINC4xMjVaTTcuOCAxOS43NUgxNS42VjE4LjI1SDcuOFYxOS43NVpNMTUuNiAxOS43NUMxNy42NDc0IDE5Ljc1IDE5LjI3NSAxOC4wNTMxIDE5LjI3NSAxNkgxNy43NzVDMTcuNzc1IDE3LjI2MDcgMTYuNzgzNCAxOC4yNSAxNS42IDE4LjI1VjE5Ljc1Wk0xOS4yNzUgMTZWMTVIMTcuNzc1VjE2SDE5LjI3NVpNMTIuMjkxNCAxNi40NjEzTDE2LjE5MTQgMTEuNDYxM0wxNS4wMDg2IDEwLjUzODdMMTEuMTA4NiAxNS41Mzg3TDEyLjI5MTQgMTYuNDYxM1pNMTIuMjkxNCAxNS41Mzg3TDguMzkxMzggMTAuNTM4N0w3LjIwODYyIDExLjQ2MTNMMTEuMTA4NiAxNi40NjEzTDEyLjI5MTQgMTUuNTM4N1pNMTIuNDUgMTZWNUgxMC45NVYxNkgxMi40NVoiCiAgICAgICAgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+)](https://bit.ly/chatgpt-clear-chats-btn)

![separator](https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/line.png)

## 📷 Screenshots

![screenshot](https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/screenshot.png)

![separator](https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/line.png)

## 📂 Check out my other projects

**[Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)**
> Browser userscript to automatically send DAN messages to ChatGPT.