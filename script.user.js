// ==UserScript==
// @name            The return of the Clear Chats button
// @icon            https://raw.githubusercontent.com/madkarmaa/chatgpt-clear-chats-btn/main/images/icon.png
// @namespace       aB3Rt8yZuX6sDcV9nMjKq1wSxLpOnH4bUiGtRfEyWqAzXsCvBnMjKlQwPxErT7y
// @source          https://github.com/madkarmaa/chatgpt-clear-chats-btn
// @supportURL      https://github.com/madkarmaa/chatgpt-clear-chats-btn
// @updateURL       https://github.com/madkarmaa/chatgpt-clear-chats-btn/raw/main/script.user.js
// @downloadURL     https://github.com/madkarmaa/chatgpt-clear-chats-btn/raw/main/script.user.js
// @version         1.0.2
// @description     OpenAI removed the shortcut button to clear all chats. I didn't like this change
// @author          mk_
// @match           *://chat.openai.com/*
// @require         https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@315fc8e62d4d3e82276fbb641128774a0d1c5219/dist/chatgpt-2.1.0.min.js
// @grant           GM_addStyle
// @run-at          document-end
// ==/UserScript==

(async () => {
    'use strict';

    function createEl(tag, attrs) {
        const el = document.createElement(tag);
        Object.entries(attrs).forEach(([key, value]) => (el[key] = value));
        return el;
    }

    const CSS = `
.is-awaiting-confirm {
    display: flex;
	align-items: center;
	justify-content: center;
    background-color: #dc143c;
    border: 1px solid hsla(0, 0%, 100%, .2);
    border-radius: .375rem;
    margin: 0 5px;
}

.is-awaiting-confirm:hover {
    background-color: #B91C1C;
}

#trash-bin-svg {
    margin-left: 2px;
}
`;
    GM_addStyle(CSS);
    await chatgpt.isLoaded();

    const menuBtn = document.querySelector('nav button[id*="headless"]');
    const clearButton = createEl('a', {
        id: 'clear-button',
        textContent: 'Clear chats',
    });

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '1em');
    svg.setAttribute('height', '1em');
    svg.setAttribute('viewBox', '0 0 408.483 408.483');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('id', 'trash-bin-svg');

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const innerG = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute(
        'd',
        'M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z'
    );

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute(
        'd',
        'M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z'
    );

    innerG.appendChild(path1);
    innerG.appendChild(path2);
    g.appendChild(innerG);
    svg.appendChild(g);
    clearButton.insertBefore(svg, clearButton.firstChild);

    // Clear chats on click
    clearButton.addEventListener('click', () => {
        if (clearButton.textContent === 'Clear chats') {
            clearButton.textContent = 'Confirm';
            clearButton.classList.add('is-awaiting-confirm');
        } else if (clearButton.textContent === 'Confirm') {
            chatgpt.clearChats();
            menuBtn.click();
        }
    });

    function addElementsToDOM() {
        const optionButtons = document.querySelectorAll('a[role="menuitem"]');
        let separator;

        for (let navLink of optionButtons)
            if (navLink.textContent.match(/.*Settings/)) {
                separator = navLink.nextSibling.cloneNode(true);
                clearButton.setAttribute('class', navLink.classList);
                break;
            }

        const headlessNav = optionButtons[0].parentNode;

        if (!headlessNav.contains(clearButton) && separator)
            try {
                headlessNav.insertBefore(clearButton, headlessNav.querySelector('a'));
                headlessNav.insertBefore(separator, headlessNav.querySelector(`a:not(#${clearButton.id})`));
            } catch (error) {
                console.error(error);
            }
    }

    // Add the button to the headless navigator when opened
    menuBtn.addEventListener('click', () => {
        if (clearButton.textContent === 'Confirm') {
            clearButton.textContent = 'Clear chats';
            clearButton.insertBefore(svg, clearButton.firstChild);
            clearButton.classList.remove('is-awaiting-confirm');
        }
        setTimeout(addElementsToDOM, 25);
    });
})();
