import "./styles.css";

const data = {
  activeCatIdx: 0,
  cats: [
    {
      counter: 0,
      name: "Cat 1",
      picUrl:
        "data:image/jpeg;base64,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"
    },
    {
      counter: 0,
      name: "Cat 2",
      picUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyJlhK6TNI35LthqmUN1WaBvKkKzxo892qA&usqp=CAU"
    }
  ]
};

const octopus = {
  init: function () {
    view.init();
    adminView.init();

    this.setActiveCat(data.activeCatIdx);
  },
  getAllCats: function () {
    return data.cats;
  },
  getActiveCatIdx: function () {
    return data.activeCatIdx;
  },
  getCat: function (idx) {
    return Object.assign({}, data.cats[idx]);
  },
  updateCat: function (idx, newCat) {
    data.cats[idx] = Object.assign({}, newCat);
    this.rerenderAll();
  },
  incrementActiveCat: function () {
    data.cats[data.activeCatIdx].counter++;

    view.renderViewCat(data.activeCatIdx);
    adminView.renderCatFormInputs();
  },
  setActiveCat: function (idx) {
    data.activeCatIdx = idx;
    this.rerenderAll();
  },
  rerenderAll: function () {
    view.renderViewCat(data.activeCatIdx);
    view.renderNavView();
    view.setActiveNavItem(data.activeCatIdx);

    adminView.renderCatFormInputs();
  }
};

const view = {
  init: function () {
    this.createMainView();
    this.createNavView();
  },
  createMainView: function () {
    this.mainViewEl = document.createElement("div");
    this.mainViewEl.classList.add("cat-view");
    document.getElementById("app").appendChild(this.mainViewEl);

    this.addCatViewListeners();
  },
  createNavView: function () {
    this.navEl = document.createElement("div");
    this.navEl.classList.add("cats-nav");
    document.getElementById("app").appendChild(this.navEl);

    this.renderNavView();
    this.addNavListeners();
  },
  renderNavView: function () {
    this.navEl.innerHTML = "";

    octopus.getAllCats().forEach((cat, idx) => {
      const catEl = document.createElement("div");
      catEl.classList.add("cats-nav__item");
      catEl.dataset.idx = idx;
      catEl.innerHTML = `<h4>${cat.name}</h4>`;

      this.navEl.appendChild(catEl);
    });
  },
  addNavListeners: function () {
    this.navEl.addEventListener("click", function (e) {
      const navItemEl = e.target.closest(".cats-nav__item");
      if (!navItemEl) {
        return;
      }

      octopus.setActiveCat(navItemEl.dataset.idx);
    });
  },
  renderViewCat: function (catIdx) {
    const cat = octopus.getCat(catIdx);

    this.mainViewEl.innerHTML = `
      <img src="${cat.picUrl}" />
      <h4>${cat.name}</h4>
      <p>${cat.counter}</p>`;
  },
  addCatViewListeners: function () {
    this.mainViewEl.addEventListener("click", function (e) {
      const catItemEl = e.target.closest(".cat-view");
      if (!catItemEl) {
        return;
      }

      octopus.incrementActiveCat();
    });
  },
  setActiveNavItem: function (activeIdx) {
    const navItems = this.navEl.querySelectorAll(".cats-nav__item");
    navItems.forEach((el) => {
      el.classList.remove("--active");
    });
    navItems[activeIdx].classList.add("--active");
  }
};

const adminView = {
  init: function () {
    this.createAdminToggler();
    this.createAdminCatForm();
  },
  createAdminToggler: function () {
    this.btnToggler = document.createElement("button");
    this.btnToggler.innerText = "Admin";
    document.getElementById("app").appendChild(this.btnToggler);

    const that = this;
    this.btnToggler.addEventListener("click", function () {
      that.catFormEl.classList.toggle("hidden");
    });
  },
  createAdminCatForm: function () {
    this.catFormEl = document.createElement("form");
    this.catFormEl.classList.add("admin-cat-form", "hidden");

    this.renderCatFormInputs();

    document.getElementById("app").appendChild(this.catFormEl);

    this.addCatFormListeners();
  },
  addCatFormListeners: function () {
    this.catFormEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newCat = Object.fromEntries(formData.entries());

      octopus.updateCat(octopus.getActiveCatIdx(), newCat);
    });
  },
  renderCatFormInputs: function () {
    const cat = octopus.getCat(octopus.getActiveCatIdx());

    this.catFormEl.innerHTML = `
      <div class="form-line">
        <label>Name</label>
        <input type="text" value="${cat.name}" name="name" />
      </div>
      <div class="form-line">
        <label>Image URL</label>
        <input type="text" value="${cat.picUrl}" name="picUrl" />
      </div>
      <div class="form-line">
        <label>Clicks</label>
        <input type="text" value="${cat.counter}" name="counter" />
      </div>
      
      <button>Cancel</submit>
      <button type="submit">Save</submit>
    `;
  }
};

octopus.init();
