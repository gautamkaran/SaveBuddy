// --- DOM Element References ---
const titleEl = document.getElementById("title-el");
const urlEl = document.getElementById("url-el");
const saveBtn = document.getElementById("save-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const linkListEl = document.getElementById("link-list");
const confirmModal = document.getElementById("confirm-modal");
const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
const cancelBtn = document.getElementById("cancel-btn");
const messageBox = document.getElementById("message-box");

let myLinks = [];
let messageTimeout;

// --- Core Functions ---
const loadLinksFromStorage = () => {
  const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"));
  console.log(linksFromLocalStorage);
  if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage;
    render(myLinks);
  }
};

const saveLinks = () => {
  localStorage.setItem("myLinks", JSON.stringify(myLinks));
  render(myLinks);
};

const showMessage = (message, type = "success") => {
  clearTimeout(messageTimeout);
  messageBox.textContent = message;
  messageBox.className = `message-box ${type} show`;

  messageTimeout = setTimeout(() => {
    messageBox.classList.remove("show");
  }, 2500);
};

const render = (links) => {
  let listItems = "";
  if (links.length === 0) {
    linkListEl.innerHTML =
      '<li style="text-align: center; color: var(--text-secondary); padding: 20px 0;">No links saved yet.</li>';
    return;
  }
  for (const link of links) {
    const safeTitle = link.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeUrl = link.url.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(link.url)}`;

    listItems += `
            <li class="link-item" data-id="${link.id}">
                <div class="link-content">
                    <img class="favicon" src="${faviconUrl}" alt="">
                    <div class="link-text">
                        <div class="link-title">${safeTitle}</div>
                        <div class="link-url">
                            <a target="_blank" href="${safeUrl}">${safeUrl}</a>
                        </div>
                    </div>
                    <div class="link-actions">
                        <button class="edit-btn" data-id="${link.id}" title="Edit Link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" /></svg>
                        </button>
                        <button class="copy-btn" data-id="${link.id}" title="Copy URL">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-3-3H8.5a1.5 1.5 0 01-1.5-1.5v-1z" /><path d="M4.5 6A1.5 1.5 0 003 7.5v10A1.5 1.5 0 004.5 19h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 7.439A1.5 1.5 0 008.378 7H4.5z" /></svg>
                        </button>
                        <button class="delete-link-btn" data-id="${link.id}" title="Delete Link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.58.22-2.365.468a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
            </li>
        `;
  }
  linkListEl.innerHTML = listItems;

  // --- Add Event Listeners for Dynamic Content ---

  // Favicon error handling to fix CSP issue
  const fallbackIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NkZDVmZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PC9zdmc+";
  document.querySelectorAll(".favicon").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = fallbackIcon;
    });
  });

  // Action buttons
  document
    .querySelectorAll(".edit-btn")
    .forEach((btn) => btn.addEventListener("click", handleEdit));
  document
    .querySelectorAll(".copy-btn")
    .forEach((btn) => btn.addEventListener("click", handleCopy));
  document
    .querySelectorAll(".delete-link-btn")
    .forEach((btn) => btn.addEventListener("click", handleDeleteLink));
};

const generateUniqueId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

// --- Event Handlers ---
const handleSaveLink = () => {
  const title = titleEl.value.trim() || "Untitled Link";
  const url = urlEl.value.trim();
  if (!url) {
    showMessage("URL cannot be empty.", "error");
    return;
  }
  myLinks.unshift({ id: generateUniqueId(), title, url });
  titleEl.value = "";
  urlEl.value = "";
  saveLinks();
  showMessage("Link saved!", "success");
};

const handleSaveTab = () => {
  if (typeof chrome !== "undefined" && chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0]) {
        myLinks.unshift({
          id: generateUniqueId(),
          title: tabs[0].title || tabs[0].url,
          url: tabs[0].url,
        });
        saveLinks();
        showMessage("Current tab saved!", "success");
      }
    });
  } else {
    showMessage(
      "This feature is only available in a Chrome Extension.",
      "error",
    );
  }
};

const handleDeleteAll = () => {
  if (myLinks.length > 0) {
    confirmModal.classList.remove("hidden");
  } else {
    showMessage("There are no links to delete.", "error");
  }
};

const confirmDeleteAll = () => {
  localStorage.clear();
  myLinks = [];
  render(myLinks);
  confirmModal.classList.add("hidden");
  showMessage("All links deleted.", "success");
};

function handleEdit(event) {
  const linkId = event.currentTarget.dataset.id;
  const itemEl = document.querySelector(`.link-item[data-id="${linkId}"]`);
  if (itemEl.querySelector(".edit-input-group")) return;

  const link = myLinks.find((l) => l.id === linkId);
  if (!link) return;

  const originalContent = itemEl.innerHTML;
  itemEl.innerHTML = `
        <div class="edit-input-group">
            <input type="text" value="${link.title}" class="edit-input" placeholder="Edit title">
            <input type="text" value="${link.url}" class="edit-input" placeholder="Edit URL">
        </div>
        <div class="edit-actions">
             <button class="save-edit-btn save-btn">Save</button>
             <button class="cancel-edit-btn cancel-btn">Cancel</button>
        </div>
    `;

  itemEl.querySelector(".save-edit-btn").addEventListener("click", () => {
    const newTitle = itemEl.querySelector("input:first-child").value.trim();
    const newUrl = itemEl.querySelector("input:last-child").value.trim();
    if (newUrl) {
      link.title = newTitle || "Untitled Link";
      link.url = newUrl;
      saveLinks();
      showMessage("Link updated!", "success");
    } else {
      showMessage("URL cannot be empty.", "error");
    }
  });

  itemEl.querySelector(".cancel-edit-btn").addEventListener("click", () => {
    itemEl.innerHTML = originalContent;
    itemEl.querySelector(".edit-btn").addEventListener("click", handleEdit);
    itemEl.querySelector(".copy-btn").addEventListener("click", handleCopy);
    itemEl
      .querySelector(".delete-link-btn")
      .addEventListener("click", handleDeleteLink);
  });
}

function handleCopy(event) {
  const linkId = event.currentTarget.dataset.id;
  const link = myLinks.find((l) => l.id === linkId);
  if (!link) return;

  const dummyEl = document.createElement("textarea");
  dummyEl.value = link.url;
  document.body.appendChild(dummyEl);
  dummyEl.select();
  try {
    document.execCommand("copy");
    showMessage("Link copied to clipboard!", "success");
  } catch (err) {
    console.error("Failed to copy text: ", err);
    showMessage("Failed to copy link.", "error");
  } finally {
    document.body.removeChild(dummyEl);
  }
}

function handleDeleteLink(event) {
  const linkId = event.currentTarget.dataset.id;
  myLinks = myLinks.filter((l) => l.id !== linkId);
  saveLinks();
  showMessage("Link deleted!", "success");
}

// --- Event Listeners ---
saveBtn.addEventListener("click", handleSaveLink);
saveTabBtn.addEventListener("click", handleSaveTab);
deleteAllBtn.addEventListener("click", handleDeleteAll);
confirmDeleteBtn.addEventListener("click", confirmDeleteAll);
cancelBtn.addEventListener("click", () => confirmModal.classList.add("hidden"));
document.addEventListener("DOMContentLoaded", loadLinksFromStorage);
