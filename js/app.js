let button = document.getElementById('button');
let id = document.getElementById('id');

const LINK_JIRA = 'https://';

button.onclick = function(element) {
  let action_url = LINK_JIRA + id.value;

  chrome.tabs.create({url: action_url});
};

id.onkeydown = function search(ele) {
  if(event.key === 'Enter') {
    let action_url = LINK_JIRA + id.value;

    chrome.tabs.create({url: action_url});
  }
}