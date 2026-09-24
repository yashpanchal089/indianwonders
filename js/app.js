/**
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Master Universal Application Engine
 * Established 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global Application State
  const state = {
    activeCurrency: localStorage.getItem("iw_currency") || "INR",
    activeSubcategory: "all",
    activeCategory: "all",
    activeTourId: "north-india-culinary",
    searchQuery: {
      keyword: "",
      destination: "all",
      duration: "all",
      sort: "featured"
    },
    architect: {
      step: 1,
      destination: "Royal Rajasthan & Deserts",
      basePrice: 125000,
      style: "Royal Heritage & Palaces",
      styleMultiplier: 1.15,
      tier: "Ancestral 472-Yr Havelis & Planter Estates",
      tierMultiplier: 1.0,
      adults: 2,
      children: 0,
      durationDays: 8,
      month: "",
      guestName: "",
      guestPhone: "",
      guestEmail: "",
      notes: ""
    }
  };

  // Toast Notification Helper
  function showToast(message, isSuccess = true) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    const icon = isSuccess ? "fa-circle-check" : "fa-triangle-exclamation";
    const color = isSuccess ? "#C5A059" : "#E57373";
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: ${color};"></i> <span>${message}</span>`;
    toast.classList.add("active");
    setTimeout(() => {
      toast.classList.remove("active");
    }, 4000);
  }

  // Format Price with Active Currency
  function formatPrice(inrAmount) {
    const currency = (typeof CURRENCY_RATES !== "undefined" && CURRENCY_RATES[state.activeCurrency]) 
      ? CURRENCY_RATES[state.activeCurrency] 
      : { symbol: "₹", rate: 1 };
      
    const converted = inrAmount * currency.rate;
    
    if (state.activeCurrency === "INR") {
      return `${currency.symbol} ${Math.round(converted).toLocaleString("en-IN")}`;
    } else {
      return `${currency.symbol} ${Math.round(converted).toLocaleString("en-US")}`;
    }
  }

  // Currency Selector Sync
  const currencySelects = document.querySelectorAll(".currency-select, #currencySelect");
  currencySelects.forEach(select => {
    select.value = state.activeCurrency;
    select.addEventListener("change", (e) => {
      state.activeCurrency = e.target.value;
      localStorage.setItem("iw_currency", state.activeCurrency);
      
      // Update all currency dropdowns on the page
      currencySelects.forEach(s => s.value = state.activeCurrency);
      
      // Re-render components with new currency
      renderCurrentPageComponents();
      showToast(`Currency switched to ${state.activeCurrency}`);
    });
  });

  // Mobile Navigation Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-active");
      if (navLinks.classList.contains("mobile-active")) {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.right = "0";
        navLinks.style.background = "#FAF7F2";
        navLinks.style.padding = "20px";
        navLinks.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        navLinks.style.borderBottom = "2px solid #C5A059";
      } else {
        navLinks.style.display = "";
      }
    });
  }

  // Sticky Header Scroll Effect
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Parse URL Parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategoryParam = urlParams.get("category") || urlParams.get("subCategory");
  const initialTourIdParam = urlParams.get("id");

  // =========================================================================
  // 1. PACKAGES HUB PAGE (packages.html)
  // =========================================================================
  const packagesGrid = document.getElementById("packagesGrid");
  const subcatTabs = document.querySelectorAll(".subcategory-tab-btn");
  const pkgSearchInput = document.getElementById("pkgSearch");
  const destinationFilter = document.getElementById("destinationFilter");
  const durationFilter = document.getElementById("durationFilter");
  const sortFilter = document.getElementById("sortFilter");
  const subcatBannerTitle = document.getElementById("subcatBannerTitle");
  const subcatBannerDesc = document.getElementById("subcatBannerDesc");

  if (packagesGrid && typeof TOURS_DATA !== "undefined") {
    // Set initial subcategory from URL if present
    if (initialCategoryParam && ["tour", "customised", "homestay", "cruise"].includes(initialCategoryParam.toLowerCase())) {
      state.activeSubcategory = initialCategoryParam.toLowerCase();
    }

    // Update counts on tabs
    updateSubcategoryCounts();

    // Setup tab listeners
    subcatTabs.forEach(tab => {
      const subcat = tab.getAttribute("data-subcat");
      if (subcat === state.activeSubcategory) {
        subcatTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
      }

      tab.addEventListener("click", () => {
        subcatTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        state.activeSubcategory = subcat;
        updateSubcategoryBanner();
        renderPackagesCatalogue();
      });
    });

    // Search and filter listeners
    if (pkgSearchInput) {
      pkgSearchInput.addEventListener("input", (e) => {
        state.searchQuery.keyword = e.target.value.trim().toLowerCase();
        renderPackagesCatalogue();
      });
    }

    if (destinationFilter) {
      destinationFilter.addEventListener("change", (e) => {
        state.searchQuery.destination = e.target.value;
        renderPackagesCatalogue();
      });
    }

    if (durationFilter) {
      durationFilter.addEventListener("change", (e) => {
        state.searchQuery.duration = e.target.value;
        renderPackagesCatalogue();
      });
    }

    if (sortFilter) {
      sortFilter.addEventListener("change", (e) => {
        state.searchQuery.sort = e.target.value;
        renderPackagesCatalogue();
      });
    }

    updateSubcategoryBanner();
    renderPackagesCatalogue();
  }

  function updateSubcategoryCounts() {
    if (typeof TOURS_DATA === "undefined") return;
    const allCount = document.getElementById("count-all");
    const tourCount = document.getElementById("count-tour");
    const customCount = document.getElementById("count-customised");
    const homestayCount = document.getElementById("count-homestay");
    const cruiseCount = document.getElementById("count-cruise");

    if (allCount) allCount.textContent = TOURS_DATA.length;
    if (tourCount) tourCount.textContent = TOURS_DATA.filter(t => t.subCategory === "tour" || t.category === "tour").length;
    if (customCount) customCount.textContent = TOURS_DATA.filter(t => t.subCategory === "customised" || t.category === "customised").length;
    if (homestayCount) homestayCount.textContent = TOURS_DATA.filter(t => t.subCategory === "homestay" || t.category === "homestay").length;
    if (cruiseCount) cruiseCount.textContent = TOURS_DATA.filter(t => t.subCategory === "cruise" || t.category === "cruise").length;
  }

  function updateSubcategoryBanner() {
    if (!subcatBannerTitle || !subcatBannerDesc) return;
    const banners = {
      all: {
        title: "All Curated Travel Portfolios",
        desc: "Complete collection of luxury circuits, noble haveli homestays, custom itineraries, and ocean/backwater cruises."
      },
      tour: {
        title: "Tour Packages — Classic, Culinary & Wildlife Expeditions",
        desc: "Handcrafted guided journeys covering North India culinary trails, Mysore & Coorg coffee highlands, and Jordan antiquity wonders."
      },
      customised: {
        title: "Customised Packages — 100% Tailor-Made Private Journeys",
        desc: "Bespoke royal itineraries shaped around your personal dates, private parties, luxury train connections, and palace upgrades."
      },
      homestay: {
        title: "Home Stay Packages — Living Heritage & Ancestral Havelis",
        desc: "Exclusive stays inside 472-year-old royal havelis in Jodhpur, 110-year-old Coorg coffee planter bungalows, and Kerala backwater tharavadu manors."
      },
      cruise: {
        title: "Cruise Packages — Luxury Oceans & Private Backwaters",
        desc: "Ultra-luxury balcony staterooms in Glacier Bay Alaska, private chartered Alleppey houseboats, and sacred Ganges river expeditions."
      }
    };

    const current = banners[state.activeSubcategory] || banners.all;
    subcatBannerTitle.textContent = current.title;
    subcatBannerDesc.textContent = current.desc;
  }

  function renderPackagesCatalogue() {
    if (!packagesGrid || typeof TOURS_DATA === "undefined") return;

    let filtered = [...TOURS_DATA];

    // Filter by Subcategory
    if (state.activeSubcategory !== "all") {
      filtered = filtered.filter(t => t.subCategory === state.activeSubcategory || t.category === state.activeSubcategory);
    }

    // Filter by Search Keyword
    if (state.searchQuery.keyword) {
      const q = state.searchQuery.keyword;
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q) ||
        t.overview.toLowerCase().includes(q) ||
        t.route.some(r => r.toLowerCase().includes(q))
      );
    }

    // Filter by Destination
    if (state.searchQuery.destination !== "all") {
      filtered = filtered.filter(t => 
        t.destination.toLowerCase().includes(state.searchQuery.destination.toLowerCase()) ||
        t.route.some(r => r.toLowerCase().includes(state.searchQuery.destination.toLowerCase()))
      );
    }

    // Filter by Duration
    if (state.searchQuery.duration !== "all") {
      if (state.searchQuery.duration === "short") {
        filtered = filtered.filter(t => t.durationDays <= 6);
      } else if (state.searchQuery.duration === "medium") {
        filtered = filtered.filter(t => t.durationDays >= 7 && t.durationDays <= 9);
      } else if (state.searchQuery.duration === "long") {
        filtered = filtered.filter(t => t.durationDays >= 10);
      }
    }

    // Sort
    if (state.searchQuery.sort === "price-asc") {
      filtered.sort((a, b) => a.basePriceINR - b.basePriceINR);
    } else if (state.searchQuery.sort === "price-desc") {
      filtered.sort((a, b) => b.basePriceINR - a.basePriceINR);
    } else if (state.searchQuery.sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      packagesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border-radius: 16px; border: 1px dashed #C5A059;">
          <i class="fa-solid fa-compass" style="font-size: 2.5rem; color: #C5A059; margin-bottom: 16px;"></i>
          <h3 style="font-family: var(--font-serif); color: var(--emerald-deep); margin-bottom: 8px;">No Packages Found Matching Filters</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 20px;">We specialize in tailor-made routes. Use our Trip Architect to build a custom itinerary from scratch.</p>
          <a href="custom-tour.html" class="btn-primary">Open Bespoke Trip Architect</a>
        </div>
      `;
      return;
    }

    packagesGrid.innerHTML = filtered.map(pkg => `
      <article class="tour-card" data-id="${pkg.id}">
        <div class="tour-card-image-wrap">
          <img src="${pkg.image}" alt="${pkg.title}" class="tour-card-image" loading="lazy">
          <span class="tour-badge">${pkg.badge}</span>
          <span class="tour-duration-badge"><i class="fa-regular fa-clock"></i> ${pkg.durationDays} Days / ${pkg.durationNights} Nights</span>
        </div>
        <div class="tour-card-body">
          <div class="tour-card-meta">
            <span class="tour-destination-tag">${pkg.subCategoryName || pkg.destination}</span>
            <div class="tour-rating">
              <i class="fa-solid fa-star"></i>
              <span>${pkg.rating}</span>
              <span style="color: var(--text-muted); font-weight: normal;">(${pkg.reviewsCount})</span>
            </div>
          </div>
          <h3 class="tour-card-title">${pkg.title}</h3>
          <p class="tour-card-subtitle">${pkg.subtitle}</p>
          <div class="tour-route-pills">
            ${pkg.route.slice(0, 4).map(stop => `<span class="route-pill"><i class="fa-solid fa-location-dot" style="font-size: 0.65rem; color: #C5A059;"></i> ${stop}</span>`).join("")}
          </div>
          <div class="tour-card-footer">
            <div class="tour-price-block">
              <span class="price-label">Starting From</span>
              <span class="price-value">${formatPrice(pkg.basePriceINR)}</span>
            </div>
            <div class="tour-card-actions">
              <a href="package-detail.html?id=${pkg.id}" class="btn-card-itinerary">
                Explore Day-by-Day
              </a>
              <a href="https://wa.me/919820012345?text=${encodeURIComponent(`Namaste Columbus Travels team, I would like quotation and availability details for the [${pkg.title} - ${pkg.durationDays} Days].`)}" 
                 target="_blank" 
                 class="btn-card-whatsapp" 
                 title="Instant WhatsApp Concierge">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join("");
  }

  // =========================================================================
  // 2. PACKAGE DETAIL PAGE (package-detail.html)
  // =========================================================================
  const pkgTitle = document.getElementById("pkgTitle");
  if (pkgTitle && typeof TOURS_DATA !== "undefined") {
    const selectedTourId = initialTourIdParam || "north-india-culinary";
    const selectedTour = TOURS_DATA.find(t => t.id === selectedTourId || t.slug === selectedTourId) || TOURS_DATA[0];

    if (selectedTour) {
      // Document Title
      document.title = `${selectedTour.title} | Day-by-Day Itinerary | Columbus Travels & Indian Wonders`;

      // Breadcrumbs & Headers
      const breadcrumbCat = document.getElementById("breadcrumbCategory");
      const breadcrumbTitle = document.getElementById("breadcrumbTitle");
      const pkgBadge = document.getElementById("pkgBadge");
      const pkgDuration = document.getElementById("pkgDuration");
      const pkgRating = document.getElementById("pkgRating");
      const pkgReviews = document.getElementById("pkgReviews");
      const pkgSubtitle = document.getElementById("pkgSubtitle");
      const pkgMainImage = document.getElementById("pkgMainImage");
      const pkgGalleryThumbs = document.getElementById("pkgGalleryThumbs");
      const pkgOverview = document.getElementById("pkgOverview");
      const pkgRouteSummary = document.getElementById("pkgRouteSummary");
      const pkgHighlightsList = document.getElementById("pkgHighlightsList");
      const pkgItineraryTimeline = document.getElementById("pkgItineraryTimeline");
      const pkgInclusionsList = document.getElementById("pkgInclusionsList");
      const pkgExclusionsList = document.getElementById("pkgExclusionsList");
      const bookingPriceDisplay = document.getElementById("bookingPriceDisplay");
      const inquiryPackageId = document.getElementById("inquiryPackageId");
      const detailWhatsAppBtn = document.getElementById("detailWhatsAppBtn");

      if (breadcrumbCat) breadcrumbCat.textContent = selectedTour.subCategoryName || "Curated Journeys";
      if (breadcrumbTitle) breadcrumbTitle.textContent = selectedTour.title;
      pkgTitle.textContent = selectedTour.title;
      if (pkgSubtitle) pkgSubtitle.textContent = selectedTour.subtitle;
      if (pkgBadge) pkgBadge.textContent = selectedTour.badge;
      if (pkgDuration) pkgDuration.innerHTML = `<i class="fa-regular fa-clock"></i> ${selectedTour.durationDays} Days / ${selectedTour.durationNights} Nights`;
      if (pkgRating) pkgRating.textContent = selectedTour.rating;
      if (pkgReviews) pkgReviews.textContent = selectedTour.reviewsCount;
      if (inquiryPackageId) inquiryPackageId.value = selectedTour.id;

      // Gallery Images
      if (pkgMainImage) {
        pkgMainImage.src = selectedTour.image;
        pkgMainImage.alt = selectedTour.title;
      }

      if (pkgGalleryThumbs && selectedTour.gallery) {
        pkgGalleryThumbs.innerHTML = selectedTour.gallery.map((imgUrl, idx) => `
          <div class="detail-thumb-item ${idx === 0 ? 'active' : ''}" data-img="${imgUrl}">
            <img src="${imgUrl}" alt="${selectedTour.title} photo ${idx + 1}" loading="lazy">
          </div>
        `).join("");

        pkgGalleryThumbs.querySelectorAll(".detail-thumb-item").forEach(thumb => {
          thumb.addEventListener("click", () => {
            pkgGalleryThumbs.querySelectorAll(".detail-thumb-item").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            if (pkgMainImage) {
              pkgMainImage.src = thumb.getAttribute("data-img");
            }
          });
        });
      }

      // Overview & Route
      if (pkgOverview) pkgOverview.textContent = selectedTour.overview;
      if (pkgRouteSummary) pkgRouteSummary.textContent = selectedTour.routeSummary || selectedTour.route.join(" → ");

      // Highlights
      if (pkgHighlightsList && selectedTour.highlights) {
        pkgHighlightsList.innerHTML = selectedTour.highlights.map(hl => `
          <div class="highlight-bullet">
            <i class="fa-solid fa-star"></i>
            <span>${hl}</span>
          </div>
        `).join("");
      }

      // Itinerary Timeline
      if (pkgItineraryTimeline && selectedTour.itinerary) {
        pkgItineraryTimeline.innerHTML = selectedTour.itinerary.map((day, idx) => `
          <div class="deep-day-card ${idx === 0 ? 'open' : ''}">
            <div class="deep-day-header" onclick="this.parentElement.classList.toggle('open')">
              <div style="display: flex; align-items: center;">
                <span class="deep-day-badge">Day ${day.day}</span>
                <span class="deep-day-title">${day.title}</span>
              </div>
              <i class="fa-solid fa-chevron-down" style="color: var(--accent-gold); transition: transform 0.3s ease;"></i>
            </div>
            <div class="deep-day-body">
              <p class="deep-day-desc">${day.description}</p>
              <div class="deep-day-meta-grid">
                <div class="deep-day-meta-item">
                  <strong><i class="fa-solid fa-hotel" style="color: #C5A059;"></i> Accommodation:</strong>
                  <span>${day.stay || "Luxury 5-Star / Haveli Heritage"}</span>
                </div>
                <div class="deep-day-meta-item">
                  <strong><i class="fa-solid fa-utensils" style="color: #C5A059;"></i> Meals Included:</strong>
                  <span>${day.meals || "Breakfast Included"}</span>
                </div>
                <div class="deep-day-meta-item">
                  <strong><i class="fa-solid fa-car" style="color: #C5A059;"></i> Transit Mode:</strong>
                  <span>${day.transit || "Private Luxury Chauffeur"}</span>
                </div>
              </div>
              ${day.tip ? `
                <div style="margin-top: 14px; background: rgba(197, 160, 89, 0.1); border-left: 3px solid #C5A059; padding: 10px 14px; font-size: 0.82rem; color: #171D1A; border-radius: 0 4px 4px 0;">
                  <strong><i class="fa-solid fa-lightbulb" style="color: #C5A059;"></i> Curator's Insider Tip:</strong> ${day.tip}
                </div>
              ` : ''}
            </div>
          </div>
        `).join("");
      }

      // Inclusions & Exclusions
      if (pkgInclusionsList && selectedTour.inclusions) {
        pkgInclusionsList.innerHTML = selectedTour.inclusions.map(inc => `
          <li><i class="fa-solid fa-check" style="color: #2E7D32; margin-right: 8px;"></i> ${inc}</li>
        `).join("");
      }

      if (pkgExclusionsList && selectedTour.exclusions) {
        pkgExclusionsList.innerHTML = selectedTour.exclusions.map(exc => `
          <li><i class="fa-solid fa-xmark" style="color: #C62828; margin-right: 8px;"></i> ${exc}</li>
        `).join("");
      }

      // Price Display
      if (bookingPriceDisplay) {
        bookingPriceDisplay.textContent = formatPrice(selectedTour.basePriceINR);
      }

      // WhatsApp Button Pre-fill
      if (detailWhatsAppBtn) {
        const msg = encodeURIComponent(`Namaste Indian Wonders team, I am reviewing the [${selectedTour.title} - ${selectedTour.durationDays} Days] on your website and would like to request an official quotation.`);
        detailWhatsAppBtn.href = `https://wa.me/919820012345?text=${msg}`;
      }

      // Booking Form Submission
      const detailInquiryForm = document.getElementById("detailInquiryForm");
      if (detailInquiryForm) {
        detailInquiryForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const submitBtn = detailInquiryForm.querySelector("button[type='submit']");
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
          submitBtn.disabled = true;

          const payload = {
            packageId: selectedTour.id,
            name: document.getElementById("inqName").value,
            email: document.getElementById("inqEmail").value,
            phone: document.getElementById("inqPhone").value,
            travelDate: document.getElementById("inqDate").value,
            guests: document.getElementById("inqGuests").value,
            message: document.getElementById("inqMessage").value,
            currency: state.activeCurrency
          };

          try {
            const res = await fetch("/api/inquiry", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            });
            const data = await res.json();
            
            showToast(`Inquiry Logged! Ref: ${data.referenceId || 'IW-CONFIRMED'}. Our Mumbai concierge will contact you.`);
            detailInquiryForm.reset();
          } catch (err) {
            // Local fallback
            const fallbackRef = "IW-" + Date.now().toString(36).toUpperCase();
            showToast(`Quotation Request Received! Reference: ${fallbackRef}. Thank you!`);
            detailInquiryForm.reset();
          } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }
        });
      }
    }
  }

  // =========================================================================
  // 3. BESPOKE TRIP ARCHITECT PAGE (custom-tour.html)
  // =========================================================================
  const wizardContainer = document.getElementById("wizardStepsContainer");
  const livePriceDisplay = document.getElementById("archLivePriceDisplay");
  const wizardPrevBtn = document.getElementById("wizardPrevBtn");
  const wizardNextBtn = document.getElementById("wizardNextBtn");
  const customArchitectForm = document.getElementById("customArchitectForm");

  if (wizardContainer) {
    function calculateArchitectEstimate() {
      const base = state.architect.basePrice;
      const styleMult = state.architect.styleMultiplier;
      const tierMult = state.architect.tierMultiplier;
      const adults = Number(state.architect.adults) || 2;
      const days = Number(state.architect.durationDays) || 8;
      
      // Calculate realistic package total
      const perGuestDayRate = (base / 7) * styleMult * tierMult;
      const totalINR = Math.round(perGuestDayRate * days * (adults * 0.85));

      if (livePriceDisplay) {
        livePriceDisplay.textContent = formatPrice(totalINR);
      }

      const summaryParty = document.getElementById("summaryParty");
      if (summaryParty) {
        summaryParty.textContent = `${adults} Adults • ${days} Days`;
      }
    }

    // Step 1 Destination selection
    const destCards = document.querySelectorAll("#wizardStep1 .wizard-option-card");
    destCards.forEach(card => {
      card.addEventListener("click", () => {
        destCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        state.architect.destination = card.getAttribute("data-value");
        state.architect.basePrice = Number(card.getAttribute("data-base")) || 125000;
        const summaryDest = document.getElementById("summaryDest");
        if (summaryDest) summaryDest.textContent = state.architect.destination;
        calculateArchitectEstimate();
      });
    });

    // Step 2 Style selection
    const styleCards = document.querySelectorAll("#wizardStep2 .wizard-option-card");
    styleCards.forEach(card => {
      card.addEventListener("click", () => {
        styleCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        state.architect.style = card.getAttribute("data-value");
        state.architect.styleMultiplier = Number(card.getAttribute("data-multiplier")) || 1.1;
        const summaryStyle = document.getElementById("summaryStyle");
        if (summaryStyle) summaryStyle.textContent = state.architect.style;
        calculateArchitectEstimate();
      });
    });

    // Step 3 Tier selection
    const tierCards = document.querySelectorAll("#wizardStep3 .wizard-option-card");
    tierCards.forEach(card => {
      card.addEventListener("click", () => {
        tierCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        state.architect.tier = card.getAttribute("data-value");
        state.architect.tierMultiplier = Number(card.getAttribute("data-tier")) || 1.0;
        const summaryTier = document.getElementById("summaryTier");
        if (summaryTier) summaryTier.textContent = state.architect.tier;
        calculateArchitectEstimate();
      });
    });

    // Step 4 Inputs
    const archAdults = document.getElementById("archAdults");
    const archDuration = document.getElementById("archDuration");
    const archMonth = document.getElementById("archMonth");

    if (archAdults) {
      archAdults.addEventListener("change", (e) => {
        state.architect.adults = e.target.value;
        calculateArchitectEstimate();
      });
    }

    if (archDuration) {
      archDuration.addEventListener("change", (e) => {
        state.architect.durationDays = e.target.value;
        calculateArchitectEstimate();
      });
    }

    if (archMonth) {
      archMonth.addEventListener("change", (e) => {
        state.architect.month = e.target.value;
      });
    }

    // Step Navigation
    function setWizardStep(stepNumber) {
      state.architect.step = stepNumber;
      for (let i = 1; i <= 5; i++) {
        const pane = document.getElementById(`wizardStep${i}`);
        const node = document.getElementById(`node-step-${i}`);
        if (pane) pane.classList.toggle("active", i === stepNumber);
        if (node) {
          node.classList.toggle("active", i === stepNumber);
          node.classList.toggle("completed", i < stepNumber);
        }
      }

      if (wizardPrevBtn) {
        wizardPrevBtn.style.display = stepNumber === 1 ? "none" : "inline-flex";
      }

      if (wizardNextBtn) {
        wizardNextBtn.style.display = stepNumber === 5 ? "none" : "inline-flex";
      }

      calculateArchitectEstimate();
    }

    if (wizardNextBtn) {
      wizardNextBtn.addEventListener("click", () => {
        if (state.architect.step < 5) {
          setWizardStep(state.architect.step + 1);
        }
      });
    }

    if (wizardPrevBtn) {
      wizardPrevBtn.addEventListener("click", () => {
        if (state.architect.step > 1) {
          setWizardStep(state.architect.step - 1);
        }
      });
    }

    // Step Nodes click
    document.querySelectorAll(".wizard-step-node").forEach(node => {
      node.addEventListener("click", () => {
        const step = Number(node.getAttribute("data-step"));
        if (step) setWizardStep(step);
      });
    });

    // Custom Architect Submission
    if (customArchitectForm) {
      customArchitectForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = customArchitectForm.querySelector("button[type='submit']");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Blueprint...`;
        submitBtn.disabled = true;

        const payload = {
          destination: state.architect.destination,
          style: state.architect.style,
          tier: state.architect.tier,
          adults: state.architect.adults,
          children: document.getElementById("archChildren") ? document.getElementById("archChildren").value : 0,
          month: state.architect.month,
          guestName: document.getElementById("archName").value,
          guestPhone: document.getElementById("archPhone").value,
          guestEmail: document.getElementById("archEmail").value,
          notes: document.getElementById("archNotes").value
        };

        try {
          const res = await fetch("/api/custom-trip", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          showToast(`Blueprint Logged! Ref: ${data.referenceId}. Our Senior Architect will draft your itinerary.`);
          customArchitectForm.reset();
        } catch (err) {
          const fallbackRef = "BESPOKE-" + Date.now().toString(36).toUpperCase();
          showToast(`Bespoke Blueprint Received! Reference: ${fallbackRef}. Thank you!`);
          customArchitectForm.reset();
        } finally {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }
      });
    }

    calculateArchitectEstimate();
  }

  // =========================================================================
  // 4. CONTACT PAGE INQUIRY FORM (contact.html)
  // =========================================================================
  const contactPageForm = document.getElementById("contactPageForm");
  if (contactPageForm) {
    contactPageForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactPageForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Transmitting...`;
      submitBtn.disabled = true;

      const payload = {
        packageId: document.getElementById("contactCategory").value,
        name: document.getElementById("contactName").value,
        email: document.getElementById("contactEmail").value,
        phone: document.getElementById("contactPhone").value,
        guests: document.getElementById("contactGuests").value,
        message: document.getElementById("contactMessage").value,
        currency: state.activeCurrency
      };

      try {
        const res = await fetch("/api/inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        showToast(`Message Sent! Reference: ${data.referenceId}. A senior curator will get in touch.`);
        contactPageForm.reset();
      } catch (err) {
        const fallbackRef = "IW-" + Date.now().toString(36).toUpperCase();
        showToast(`Message Logged! Ref: ${fallbackRef}. Thank you for contacting Columbus Travels.`);
        contactPageForm.reset();
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // =========================================================================
  // 5. HOME PAGE (index.html) DYNAMIC HOOKS
  // =========================================================================
  const homeJourneysContainer = document.getElementById("journeysContainer");
  const homeFilterPills = document.querySelectorAll(".filter-pill");
  const quickFinderForm = document.getElementById("quickFinderForm");

  if (homeJourneysContainer && typeof TOURS_DATA !== "undefined") {
    function renderHomeTours() {
      let filtered = TOURS_DATA;

      if (state.activeCategory !== "all") {
        filtered = filtered.filter(t => t.category === state.activeCategory || t.subCategory === state.activeCategory);
      }

      homeJourneysContainer.innerHTML = filtered.slice(0, 6).map(tour => `
        <article class="tour-card" data-id="${tour.id}">
          <div class="tour-card-image-wrap">
            <img src="${tour.image}" alt="${tour.title}" class="tour-card-image" loading="lazy">
            <span class="tour-badge">${tour.badge}</span>
            <span class="tour-duration-badge"><i class="fa-regular fa-clock"></i> ${tour.durationDays} Days / ${tour.durationNights} Nights</span>
          </div>
          <div class="tour-card-body">
            <div class="tour-card-meta">
              <span class="tour-destination-tag">${tour.subCategoryName || tour.destination}</span>
              <div class="tour-rating">
                <i class="fa-solid fa-star"></i>
                <span>${tour.rating}</span>
                <span style="color: var(--text-muted); font-weight: normal;">(${tour.reviewsCount})</span>
              </div>
            </div>
            <h3 class="tour-card-title">${tour.title}</h3>
            <p class="tour-card-subtitle">${tour.subtitle}</p>
            <div class="tour-route-pills">
              ${tour.route.slice(0, 4).map(stop => `<span class="route-pill"><i class="fa-solid fa-location-dot" style="font-size: 0.65rem; color: #C5A059;"></i> ${stop}</span>`).join("")}
            </div>
            <div class="tour-card-footer">
              <div class="tour-price-block">
                <span class="price-label">Starting From</span>
                <span class="price-value">${formatPrice(tour.basePriceINR)}</span>
              </div>
              <div class="tour-card-actions">
                <a href="package-detail.html?id=${tour.id}" class="btn-card-itinerary">
                  View Itinerary
                </a>
                <a href="https://wa.me/919820012345?text=${encodeURIComponent(`Namaste Columbus Travels team, I am interested in [${tour.title} - ${tour.durationDays} Days]. Please share quotation.`)}" 
                   target="_blank" 
                   class="btn-card-whatsapp" 
                   title="Instant WhatsApp Concierge">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      `).join("");
    }

    homeFilterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        homeFilterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        state.activeCategory = pill.getAttribute("data-category");
        renderHomeTours();
      });
    });

    if (quickFinderForm) {
      quickFinderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const dest = document.getElementById("finderDestination").value;
        const style = document.getElementById("finderStyle").value;
        // Redirect to packages.html with search parameters
        window.location.href = `packages.html?category=${encodeURIComponent(style !== 'all' ? style : 'all')}&destination=${encodeURIComponent(dest !== 'all' ? dest : 'all')}`;
      });
    }

    renderHomeTours();
  }

  // =========================================================================
  // 6. HERO 3-SLIDE CONTINUOUS 1-SECOND CAROUSEL
  // =========================================================================
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroDots = document.querySelectorAll(".slider-dot");
  if (heroSlides.length > 0) {
    let currentSlide = 0;
    
    function showSlide(index) {
      heroSlides.forEach((s, idx) => {
        s.classList.toggle("active", idx === index);
      });
      heroDots.forEach((d, idx) => {
        d.classList.toggle("active", idx === index);
      });
      currentSlide = index;
    }

    // Interactive Dot click support
    heroDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        showSlide(idx);
      });
    });

    // Continuous transition every 1 second (1000ms)
    setInterval(() => {
      const nextSlide = (currentSlide + 1) % heroSlides.length;
      showSlide(nextSlide);
    }, 1000);
  }

  // Universal helper to re-render whichever page is active
  function renderCurrentPageComponents() {
    if (packagesGrid) renderPackagesCatalogue();
    if (homeJourneysContainer) renderHomeTours();
    if (pkgTitle) {
      const selectedTour = TOURS_DATA.find(t => t.id === initialTourIdParam) || TOURS_DATA[0];
      const bookingPriceDisplay = document.getElementById("bookingPriceDisplay");
      if (bookingPriceDisplay && selectedTour) {
        bookingPriceDisplay.textContent = formatPrice(selectedTour.basePriceINR);
      }
    }
    if (wizardContainer) calculateArchitectEstimate();
  }
});
