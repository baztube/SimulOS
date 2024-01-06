let idx = "";
function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const titleBar = elmnt.querySelector(".window-title");
  let isMaximized = false;

  titleBar.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    idx = Number(idx) + 1;
    e = e || window.event;
    e.preventDefault();
    if (!isMaximized) {
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    elmnt.style.zIndex = idx;
    e = e || window.event;
    e.preventDefault();
    if (!isMaximized) {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // Calculate the new position
      const newTop = elmnt.offsetTop - pos2;
      const newLeft = elmnt.offsetLeft - pos1;

      // Ensure the window stays within the bounds of the viewport
      const maxX = window.innerWidth - elmnt.offsetWidth;
      const maxY = window.innerHeight - elmnt.offsetHeight - 45;

      elmnt.style.top = `${Math.max(0, Math.min(newTop, maxY))}px`;
      elmnt.style.left = `${Math.max(0, Math.min(newLeft, maxX))}px`;
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  const buttonsContainer = elmnt.querySelector(".window-buttons");
  const minimizeButton = buttonsContainer.querySelector(".minimize");

  minimizeButton.onclick = function () {
    elmnt.style.display = "none";
  };

  const closeButton = buttonsContainer.querySelector(".close");
  closeButton.onclick = function () {
    elmnt.style.display = "none";
    removeTaskbarButton(elmnt);
  };

  const maximizeButton = buttonsContainer.querySelector(".maximize");
  maximizeButton.onclick = function () {
    if (isMaximized) {
      elmnt.style.width = "400px";
      elmnt.style.height = "300px";
      elmnt.style.top = "50px"; // Adjust as needed
      elmnt.style.left = "50px"; // Adjust as needed
      isMaximized = false;
    } else {
      idx = Number(idx) + 1;
      elmnt.style.zIndex = idx;
      elmnt.style.width = "100%";
      elmnt.style.height = "100%";
      elmnt.style.top = "0";
      elmnt.style.left = "0";
      isMaximized = true;
    }
  };
}

function addTaskbarButton(elmnt) {
  const taskbar = document.getElementById("taskbar");
  const title = elmnt.querySelector(".window-title").textContent;

  const button = document.createElement("button");
  button.textContent = title;

  button.onclick = function () {
    elmnt.style.display = "block";
  };

  taskbar.appendChild(button);
}

function removeTaskbarButton(elmnt) {
  const taskbar = document.getElementById("taskbar");
  const title = elmnt.querySelector(".window-title").textContent;

  const buttons = taskbar.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === title) {
      taskbar.removeChild(buttons[i]);
      break;
    }
  }
}

function createWindow(name, icon, content) {
  const id = Math.random();
  const decodedContent = decodeURIComponent(atob(content))
  const element =
    `
    <div class="window" id="` +
    id +
    `">
    <div class="window-title">
      <span style="display: flex; justify-content: center; align-items: center; padding: 5px;" class="left">
        <img style="
        height: 24px;
        margin-right: 6px;
        object-fit: cover;
        aspect-ratio: 1/1;" src="` +
    icon +
    `">
        <span id="title">` +
    name +
    `</span>
      </span>
      <div class="window-buttons">
        <button class="close"></button>
        <button class="minimize"></button>
        <button class="maximize"></button>
      </div>
    </div>
    <div class="window-content">
      ` +
    decodedContent +
    `
    </div>
  </div>
    `;
  const body = document.getElementById("body");
  body.insertAdjacentHTML("afterbegin", element);
  const window = document.getElementById(id);
  dragElement(window);
  addTaskbarButton(window);
}

const myWindow = document.getElementById("myWindow");
dragElement(myWindow);
addTaskbarButton(myWindow);
