// let loggedIn = loggedIn || false;
const SHOW_LOGIN_PROMPT_AFTER = 2 * 60 * 1000;
function isUserLoggedIn() {
    return loggedIn;
}

function showLoginPrompt() {
    const modal = document.getElementById('loginPromptModal');
    modal.style.display = 'block';
}

function closeLoginPrompt() {
    const modal = document.getElementById('loginPromptModal');
    modal.style.display = 'none';
}
if (!isUserLoggedIn()) {
    setTimeout(showLoginPrompt, SHOW_LOGIN_PROMPT_AFTER);
}