window.addEventListener("load", function () {
  // Handle active category propertie
  const category = document.querySelector(".category-wrapper");
  const propertieContainer = document.querySelector(".category-container");
  const categoryBtns = category.querySelectorAll(".category-item");

  const allProperties = `<div class="propertie-wrapper type--ssr">
  ${Array.from(Array(9).keys())
    .map(
      (item) =>
        `<div class="propertie-item">
      <div class="propertie-item__card">
        <div class="propertie-icon">
          <img src="./images/type--ssr.png" />
        </div>
        <div class="propertie-image">
          <img src="./images/propertie-thumnail.png" />
        </div>
      </div>
      <div class="propertie-item__info">
        <div class="info--name">Toà nhà Bitexco</div>
        <div class="info--address">
          2 Hải Triều, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh,
          Việt Nam
        </div>
      </div>
    </div>`
    )
    .join("")}
</div>
<div class="propertie-wrapper type--sr">
  ${Array.from(Array(10).keys())
    .map(
      (item) =>
        `<div class="propertie-item">
      <div class="propertie-item__card">
        <div class="propertie-icon">
          <img src="./images/type--sr.png" />
        </div>
        <div class="propertie-image">
          <img src="./images/propertie-thumnail.png" />
        </div>
      </div>
      <div class="propertie-item__info">
        <div class="info--name">Toà nhà Bitexco</div>
        <div class="info--address">
          2 Hải Triều, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh,
          Việt Nam
        </div>
      </div>
    </div>`
    )
    .join("")}
</div>
<div class="propertie-wrapper type--r">
  ${Array.from(Array(10).keys())
    .map(
      (item) =>
        `<div class="propertie-item">
      <div class="propertie-item__card">
        <div class="propertie-icon">
          <img src="./images/type--r.png" />
        </div>
        <div class="propertie-image">
          <img src="./images/propertie-thumnail.png" />
        </div>
      </div>
      <div class="propertie-item__info">
        <div class="info--name">Toà nhà Bitexco</div>
        <div class="info--address">
          2 Hải Triều, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh,
          Việt Nam
        </div>
      </div>
    </div>`
    )
    .join("")}
</div>`;

  propertieContainer.insertAdjacentHTML("beforeend", allProperties);

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      propertieContainer
        .querySelectorAll(".propertie-wrapper")
        .forEach((propertieWrapper) =>
          propertieWrapper?.parentNode?.removeChild(propertieWrapper)
        );
      const thisType = btn.dataset.propertie;
      categoryBtns.forEach((categoryBtn) =>
        categoryBtn.classList.remove("active")
      );
      btn.classList.add("active");

      propertieContainer.insertAdjacentHTML(
        "beforeend",
        thisType === "type--all"
          ? allProperties
          : `<div class="propertie-wrapper ${thisType}">
        ${Array.from(Array(12).keys())
          .map(
            (item) =>
              `<div class="propertie-item">
            <div class="propertie-item__card">
              <div class="propertie-icon">
                <img src="./images/${thisType}.png" />
              </div>
              <div class="propertie-image">
                <img src="./images/propertie-thumnail.png" />
              </div>
            </div>
            <div class="propertie-item__info">
              <div class="info--name">Toà nhà Bitexco</div>
              <div class="info--address">
                2 Hải Triều, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh,
                Việt Nam
              </div>
            </div>
          </div>`
          )
          .join("")}
      </div>
      `
      );
    });
  });
});
