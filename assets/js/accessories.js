//----Search Accessories Section------
//Show more & Shoe less
const toggleBtn = document.getElementById("toggle-items-btn");
//onst currentContainer = document.getElementById("extra-items-container");
const btnText = document.getElementById("btn-text");
const arrowIcon = document.getElementById("arrow-icon");

toggleBtn.addEventListener("click", () => {
  const activePanel = document.querySelector(".tab-panel:not(.hidden)");

  const currentContainer = activePanel.querySelector(".extra-content");

  currentContainer.classList.toggle("is-open");
  const isOpen = currentContainer.classList.contains("is-open");

  if (isOpen) {
    currentContainer.style.maxHeight = currentContainer.scrollHeight + "px";
    currentContainer.style.opacity = "1";
    btnText.innerText = "Show less";
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    currentContainer.style.maxHeight = "0px";
    currentContainer.style.opacity = "0";
    btnText.innerText = "Show more";
    arrowIcon.style.transform = "rotate(0deg)";
  }
});

//Browse by=> Toggle
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1.Edit the style for active btn
    tabButtons.forEach((b) => {
      b.classList.remove("border-black", "font-semibold", "border-b-2");
      b.classList.add("text-gray-500");
    });
    btn.classList.add("border-black", "font-semibold", "border-b-2");
    btn.classList.remove("text-gray-500");

    //2. if the panel ID does not match the target, hide it, otherwise, show it.
    const target = btn.getAttribute("data-target");
    tabPanels.forEach((panel) => {
      panel.classList.toggle("hidden", panel.id !== target);
    });
    resetShowMoreBtn();
  });
});

function resetShowMoreBtn() {
  if (!btnText || !arrowIcon) return;

  btnText.innerText = "Show less";
  arrowIcon.style.transform = "rotate(180deg)";

  const allContainers = document.querySelectorAll(".extra-content");
  allContainers.forEach((container) => {
    container.style.maxHeight = "500px";
    container.style.opacity = "1";
    container.classList.add("is-open");
  });
}

//Search Accessories
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  // 2. Get the spasific panel to search
  const activePanel = document.querySelector(".tab-panel:not(.hidden)");

  // 3. Get all items
  const items = activePanel.querySelectorAll(".flex-col.items-center.group");

  items.forEach((item) => {
    const itemName = item.querySelector("span").innerText.toLowerCase();

    if (itemName.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });

  // // 4. Hidden the Show more button
  const toggleBtn = document.getElementById("toggle-items-btn");
  if (searchTerm.length > 0) {
    toggleBtn.style.display = "none";

    const extra = activePanel.querySelector(".extra-content");
    if (extra) {
      extra.style.maxHeight = "none";
      extra.style.opacity = "1";
    }
  } else {
    toggleBtn.style.display = "flex";
    resetShowMoreBtn();
  }
});

//---- Swipers Accessories ----
const allSwipers = document.querySelectorAll(".mySwiper");

allSwipers.forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    breakpoints: {
      320: {
        spaceBetween: 15,
      },
      1024: {
        spaceBetween: 25,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: false,
    grabCursor: false,
    pagination: {
    },
  });
});
