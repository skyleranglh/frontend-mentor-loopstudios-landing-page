const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

const navigationContent = document.querySelector(".navigation__content");

const updateBodyScroll = (mode) => {
  const body = document.querySelector("body");
  const bodyScrollLock = bodyScrollLockUpgrade;

  if (mode === "enable") bodyScrollLock.enableBodyScroll(body);
  if (mode === "disable") bodyScrollLock.disableBodyScroll(body);
};

const handleOpenMenuButtonOnClick = (props) => {
  const { openMenuButton, closeMenuButton, navigationContent } = props.elements;

  openMenuButton.setAttribute("aria-expanded", "true");
  openMenuButton.setAttribute("aria-hidden", "true");

  closeMenuButton.setAttribute("aria-hidden", "false");

  navigationContent.classList.add("active");

  updateBodyScroll("disable");

  closeMenuButton.focus();
};

const handleCloseMenuButtonOnClick = (props) => {
  const { openMenuButton, closeMenuButton, navigationContent } = props.elements;

  openMenuButton.setAttribute("aria-expanded", "false");
  openMenuButton.setAttribute("aria-hidden", "false");

  closeMenuButton.setAttribute("aria-hidden", "true");

  navigationContent.classList.remove("active");

  updateBodyScroll("enable");

  openMenuButton.focus();
};

openMenuButton.addEventListener("click", () =>
  handleOpenMenuButtonOnClick({
    elements: { openMenuButton, closeMenuButton, navigationContent },
  })
);
closeMenuButton.addEventListener("click", () =>
  handleCloseMenuButtonOnClick({
    elements: { openMenuButton, closeMenuButton, navigationContent },
  })
);
