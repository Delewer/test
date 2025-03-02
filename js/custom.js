// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


document.addEventListener("DOMContentLoaded", function () {
  filterSelection("all");
});

function filterSelection(category) {
  const filterDivs = document.querySelectorAll(".filterDiv");
  const buttons = document.querySelectorAll("#myBtnContainer .btn");

  filterDivs.forEach(div => {
    div.classList.remove("show");
    if (category === "all" || div.classList.contains(category)) {
      div.classList.add("show");
    }
  });

  buttons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick").includes(category)) {
      btn.classList.add("active");
    }
  });
}


// Получаем элементы
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.querySelector(".close");

// Открытие модального окна при клике на изображение
document.querySelectorAll(".project-card img").forEach((img) => {
  img.addEventListener("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие, чтобы не сработал клик на родительском .project-card
    const card = this.closest(".project-card"); // Получаем родительскую карточку проекта
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;

    modalImg.src = this.src;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.style.display = "flex";
  });
});

// Закрытие модального окна при клике на крестик
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Закрытие при клике вне модального окна
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}