/**
 * React 18 Dynamic Interactive Components Layer
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Est. 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

(function () {
  // Check if React & ReactDOM are loaded
  if (typeof React === "undefined" || typeof ReactDOM === "undefined") {
    return;
  }

  const { useState, useEffect, useMemo } = React;

  // 1. Live Currency Switcher & Global Exchange Engine Component
  function ReactCurrencyBar({ initialCurrency = "INR" }) {
    const [currency, setCurrency] = useState(initialCurrency);

    const rates = typeof CURRENCY_RATES !== "undefined" ? CURRENCY_RATES : {
      INR: { symbol: "₹", rate: 1, label: "INR (₹)" },
      USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
      EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
      GBP: { symbol: "£", rate: 0.0095, label: "GBP (£)" }
    };

    const handleCurrencyChange = (newCurr) => {
      setCurrency(newCurr);
      localStorage.setItem("iw_currency", newCurr);
      // Trigger native event so existing DOM syncs
      const evt = new CustomEvent("react:currencyChange", { detail: { currency: newCurr } });
      window.dispatchEvent(evt);
    };

    return React.createElement(
      "div",
      { className: "react-currency-widget", style: { display: "inline-flex", alignItems: "center", gap: "6px" } },
      React.createElement("i", { className: "fa-solid fa-coins", style: { color: "#C5A059", fontSize: "0.85rem" } }),
      React.createElement(
        "select",
        {
          value: currency,
          onChange: (e) => handleCurrencyChange(e.target.value),
          className: "currency-select",
          style: {
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(197, 160, 89, 0.3)",
            color: "#FFF",
            padding: "2px 8px",
            borderRadius: "4px",
            cursor: "pointer"
          }
        },
        Object.keys(rates).map((k) =>
          React.createElement("option", { key: k, value: k, style: { background: "#0A211A", color: "#FFF" } }, rates[k].label)
        )
      )
    );
  }

  // 2. Interactive React Itinerary Day Accordion Component
  function ReactItineraryAccordion({ itinerary = [] }) {
    const [activeDay, setActiveDay] = useState(1);
    const [searchFilter, setSearchFilter] = useState("");

    const filteredDays = useMemo(() => {
      if (!searchFilter.trim()) return itinerary;
      const q = searchFilter.toLowerCase();
      return itinerary.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          (d.stay && d.stay.toLowerCase().includes(q))
      );
    }, [itinerary, searchFilter]);

    return React.createElement(
      "div",
      { className: "react-itinerary-box", style: { marginTop: "16px" } },
      React.createElement(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } },
        React.createElement("input", {
          type: "text",
          placeholder: "Quick filter itinerary activities / stay...",
          value: searchFilter,
          onChange: (e) => setSearchFilter(e.target.value),
          style: {
            padding: "8px 14px",
            border: "1px solid rgba(197, 160, 89, 0.3)",
            borderRadius: "20px",
            fontSize: "0.85rem",
            width: "100%",
            maxWidth: "340px",
            outline: "none"
          }
        }),
        React.createElement(
          "span",
          { style: { fontSize: "0.78rem", color: "#74857D" } },
          `Showing ${filteredDays.length} of ${itinerary.length} Days`
        )
      ),
      filteredDays.map((day) =>
        React.createElement(
          "div",
          {
            key: day.day,
            className: `deep-day-card ${activeDay === day.day ? "open" : ""}`,
            style: { marginBottom: "12px", border: "1px solid rgba(16, 46, 36, 0.1)", borderRadius: "8px" }
          },
          React.createElement(
            "div",
            {
              className: "deep-day-header",
              onClick: () => setActiveDay(activeDay === day.day ? null : day.day),
              style: {
                padding: "14px 18px",
                background: activeDay === day.day ? "rgba(197, 160, 89, 0.1)" : "#FAF7F2",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }
            },
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              React.createElement(
                "span",
                {
                  className: "deep-day-badge",
                  style: {
                    background: "#102E24",
                    color: "#C5A059",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    marginRight: "10px",
                    fontWeight: "bold"
                  }
                },
                `Day ${day.day}`
              ),
              React.createElement(
                "span",
                { style: { fontWeight: "600", fontSize: "0.95rem", color: "#102E24" } },
                day.title
              )
            ),
            React.createElement("i", {
              className: `fa-solid ${activeDay === day.day ? "fa-chevron-up" : "fa-chevron-down"}`,
              style: { color: "#C5A059", fontSize: "0.85rem" }
            })
          ),
          activeDay === day.day &&
            React.createElement(
              "div",
              { className: "deep-day-body", style: { padding: "18px", background: "#FFF" } },
              React.createElement("p", { style: { fontSize: "0.92rem", color: "#4A5A52", lineHeight: "1.6" } }, day.description),
              React.createElement(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "10px",
                    marginTop: "14px",
                    padding: "12px",
                    background: "#FAF7F2",
                    borderRadius: "6px"
                  }
                },
                React.createElement(
                  "div",
                  { style: { fontSize: "0.8rem" } },
                  React.createElement("strong", { style: { color: "#102E24", display: "block" } }, "Accommodation:"),
                  React.createElement("span", { style: { color: "#4A5A52" } }, day.stay || "Luxury Heritage")
                ),
                React.createElement(
                  "div",
                  { style: { fontSize: "0.8rem" } },
                  React.createElement("strong", { style: { color: "#102E24", display: "block" } }, "Meals:"),
                  React.createElement("span", { style: { color: "#4A5A52" } }, day.meals || "Breakfast Included")
                ),
                React.createElement(
                  "div",
                  { style: { fontSize: "0.8rem" } },
                  React.createElement("strong", { style: { color: "#102E24", display: "block" } }, "Transit:"),
                  React.createElement("span", { style: { color: "#4A5A52" } }, day.transit || "Private Chauffeur")
                )
              )
            )
        )
      )
    );
  }

  // Mount React components if mount points exist
  window.IndianWondersReact = {
    CurrencyBar: ReactCurrencyBar,
    ItineraryAccordion: ReactItineraryAccordion
  };
})();
