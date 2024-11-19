const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

const navigationContent = document.querySelector(".navigation__content");

const handleOpenMenuButtonOnClick = (props) => {
  const { openMenuButton, closeMenuButton, navigationContent } = props.elements;

  openMenuButton.setAttribute("aria-expanded", "true");
  openMenuButton.setAttribute("aria-hidden", "true");

  closeMenuButton.setAttribute("aria-hidden", "false");

  navigationContent.classList.add("active");

  closeMenuButton.focus();
};

const handleCloseMenuButtonOnClick = (props) => {
  const { openMenuButton, closeMenuButton, navigationContent } = props.elements;

  openMenuButton.setAttribute("aria-expanded", "false");
  openMenuButton.setAttribute("aria-hidden", "false");

  closeMenuButton.setAttribute("aria-hidden", "true");

  navigationContent.classList.remove("active");

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
