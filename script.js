const OILBYMO_SETTINGS = {
  business: {
    phone: "346-213-0592",
    email: "muhandiaye55@gmail.com",
    instagram: "https://www.instagram.com/oilbymo/",
    instagramHandle: "@oilbymo",
    serviceArea: "San Marcos and Austin",
  },
  pricing: {
    currency: "USD",
    customerSuppliedParts: 0,
    partsSourcingFee: { rate: 0.1, minimum: 10, maximum: 35 },
    travel: { withinTenMiles: 0, elevenToTwentyMiles: 20, twentyOneToThirtyMiles: 35 },
  },
  services: [
    { id: "oil_change", category: "oil", name: "Standard oil change", shortName: "Oil change", description: "Standard oil and filter service; parts are priced after vehicle fitment is checked.", labor: 50, parts: null, partsRequired: true, minutes: null },
    { id: "wipers", category: "oil", name: "Windshield wiper installation", shortName: "Wiper installation", description: "Installation labor varies by vehicle and wiper setup.", laborRange: { minimum: 15, maximum: 25 }, parts: null, partsRequired: true, minutes: null },
    { id: "tire_pressure", category: "oil", name: "Tire pressure check and inflation", shortName: "Tire pressure", description: "Reduced labor applies when combined with another service.", labor: 15, standaloneLaborMinimum: 35, partsRequired: false, minutes: null },
    { id: "brake_pads", category: "brakes", name: "Brake pad replacement", shortName: "Brake pads", description: "Labor varies by wheel count; parts are quoted after vehicle fitment is checked.", laborByWheels: { 1: 55, 2: 100, 4: 190 }, parts: null, partsRequired: true, minutes: null },
    { id: "pads_rotors", category: "brakes", name: "Brake pads and rotors", shortName: "Pads and rotors", description: "Labor varies by wheel count; exact parts and fitment are confirmed before work.", laborByWheels: { 1: 85, 2: 160, 4: 300 }, parts: null, partsRequired: true, minutes: null },
    { id: "maintenance", category: "oil", name: "Vehicle maintenance", shortName: "Maintenance", description: "Routine maintenance tailored to your vehicle and requested work.", labor: null, parts: null, partsRequired: false, minutes: null },
    { id: "additional", category: "oil", name: "Additional service request", shortName: "Other service", description: "Ask about tire rotation, spare tire installation, battery and filter replacement, code scans, or a basic inspection.", labor: null, parts: null, partsRequired: false, minutes: null },
    { id: "tire_rotation", category: "oil", name: "Tire rotation — all 4", shortName: "Tire rotation — all 4", description: "Labor-only starting estimate for rotation of all four tires.", labor: 35, partsRequired: false, showOnServiceCards: false, minutes: null },
    { id: "spare_tire", category: "oil", name: "Spare tire installation", shortName: "Spare tire install", description: "Labor-only starting estimate; customer-provided spare tire.", labor: 45, partsRequired: false, showOnServiceCards: false, minutes: null },
    { id: "battery", category: "oil", name: "Battery replacement", shortName: "Battery replacement", description: "Labor-only starting estimate; battery price is confirmed separately.", labor: 45, parts: null, partsRequired: true, showOnServiceCards: false, minutes: null },
    { id: "air_filter", category: "oil", name: "Air filter replacement", shortName: "Air filter", description: "Labor-only starting estimate; filter price is confirmed separately.", labor: 20, parts: null, partsRequired: true, showOnServiceCards: false, minutes: null },
    { id: "cabin_air_filter", category: "oil", name: "Cabin air filter replacement", shortName: "Cabin air filter", description: "Labor-only starting estimate; filter price is confirmed separately.", labor: 25, parts: null, partsRequired: true, showOnServiceCards: false, minutes: null },
    { id: "code_scan", category: "oil", name: "Basic code scan", shortName: "Basic code scan", description: "Basic diagnostic code scan; repairs are not included.", labor: 35, partsRequired: false, showOnServiceCards: false, minutes: null },
    { id: "visual_inspection", category: "oil", name: "Basic visual vehicle inspection", shortName: "Visual inspection", description: "Basic visual inspection; additional diagnosis or repairs are separate.", labor: 40, partsRequired: false, showOnServiceCards: false, minutes: null },
  ],
  gallery: [
    { service: "Oil and filter change", images: [{ src: "assets/gmc-oil-service-side.jpg", alt: "Gray GMC with its hood open during an oil service", caption: "Mobile oil service" }] },
    { service: "Oil and filter change", images: [{ src: "assets/gmc-oil-service-front.jpg", alt: "Front view of a GMC with its hood open for service", caption: "On-site oil service" }] },
    { service: "Oil and filter change", images: [{ src: "assets/nissan-oil-service.jpg", alt: "Nissan SUV raised for an oil service, with tools and oil nearby", caption: "Oil service setup" }] },
    { service: "Oil and filter change", images: [{ src: "assets/red-gmc-oil-service.jpg", alt: "Red GMC with its hood open during an oil service", caption: "Mobile oil service" }] },
    { service: "Oil and filter change", images: [{ src: "assets/ford-oil-service-plate-masked.jpg", alt: "Gray Ford SUV with its hood open during an oil service", caption: "On-site oil service" }] },
    { service: "Brake service", images: [{ src: "assets/brake-pads-parts.jpg", alt: "Brake pads and brake lubricant arranged for a brake service", caption: "Brake parts" }] },
    { service: "Brake service", images: [{ src: "assets/brake-pads-comparison.jpg", alt: "Brake pads laid out on a blue work mat", caption: "Brake pad work" }] },
    { service: "Brake service", images: [{ src: "assets/brake-rotor-caliper.jpg", alt: "Close-up of a brake rotor and caliper during service", caption: "Rotor and caliper" }] },
  ],
};

const SERVICE_ICONS = {
  oil_change: '<svg viewBox="0 0 48 48"><path d="M10 19h20a3 3 0 0 1 3 3v10H10zM15 19v-6h10l5 6m3 4h7v5h-7"/><path d="M19 24c-3 3-3 5 0 7 3-2 3-4 0-7Z"/><circle cx="16" cy="33" r="2"/><circle cx="29" cy="33" r="2"/></svg>',
  brake_pads: '<svg viewBox="0 0 48 48"><path d="M10 15h10l4 5v16H8V20l2-5Zm18 0h10l2 5v16H26V20l2-5Z"/><path d="M12 23h10m6 0h10"/></svg>',
  pads_rotors: '<svg viewBox="0 0 48 48"><circle cx="22" cy="24" r="16"/><circle cx="22" cy="24" r="6"/><path d="M22 8v5m0 22v5M6 24h5m22 0h5M34 14h7v20h-7m-2-16h4m-4 12h4"/></svg>',
  wipers: '<svg viewBox="0 0 48 48"><path d="m9 30 4-15a4 4 0 0 1 4-3h14a4 4 0 0 1 4 3l4 15M8 32h32M14 30l11-9m-3 9 12-9"/><path d="m16 15 1 0m14 0 1 0"/></svg>',
  tire_pressure: '<svg viewBox="0 0 48 48"><path d="M16 8h16l5 8v16l-5 8H16l-5-8V16z"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3"/><path d="M24 14v4m0 12v4m-10-10h4m12 0h4m-17-7 3 3m8 8 3 3m0-14-3 3m-8 8-3 3"/></svg>',
  maintenance: '<svg viewBox="0 0 48 48"><path d="M29 10a11 11 0 0 0-13 14L9 31a5 5 0 0 0 8 6l7-7a11 11 0 0 0 14-13l-7 7-7-7 7-7Z"/></svg>',
  additional: '<svg viewBox="0 0 48 48"><path d="M29 10a11 11 0 0 0-13 14L9 31a5 5 0 0 0 8 6l7-7a11 11 0 0 0 14-13l-7 7-7-7 7-7Z"/></svg>',
};

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const yearLabel = document.querySelector("#year");

if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: OILBYMO_SETTINGS.pricing.currency,
  }).format(value);
}

function updatePricingLabels() {
  const travel = OILBYMO_SETTINGS.pricing.travel;
  const withinTenMilesFee = travel.withinTenMiles === 0
    ? "no travel charge"
    : `${formatMoney(travel.withinTenMiles)} travel fee`;
  const travelLabels = {
    within_10: `Within 10 miles — ${withinTenMilesFee}`,
    "11_20": `11–20 miles — ${formatMoney(travel.elevenToTwentyMiles)} travel fee`,
    "21_30": `21–30 miles — ${formatMoney(travel.twentyOneToThirtyMiles)} travel fee`,
  };
  document.querySelectorAll('select[name="travel_distance"]').forEach((select) => {
    Object.entries(travelLabels).forEach(([value, label]) => {
      const option = select.querySelector(`option[value="${value}"]`);
      if (option) option.textContent = label;
    });
  });

  const sourcingFee = OILBYMO_SETTINGS.pricing.partsSourcingFee;
  const percentage = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(sourcingFee.rate);
  const sourcingCopy = `${percentage} parts sourcing fee (${formatMoney(sourcingFee.minimum)} minimum, ${formatMoney(sourcingFee.maximum)} maximum).`;
  document.querySelectorAll("[data-parts-sourcing-fee-note]").forEach((note) => {
    note.textContent = sourcingCopy;
  });
}

function configuredPrice(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function serviceLaborText(service) {
  if (service.laborByWheels) {
    const prices = Object.values(service.laborByWheels);
    return `Labor ${formatMoney(Math.min(...prices))}–${formatMoney(Math.max(...prices))} by wheel count`;
  }
  if (service.laborRange) {
    return `Labor ${formatMoney(service.laborRange.minimum)}–${formatMoney(service.laborRange.maximum)}`;
  }
  if (configuredPrice(service.standaloneLaborMinimum)) {
    return `Labor ${formatMoney(service.labor)} with another service / from ${formatMoney(service.standaloneLaborMinimum)} standalone`;
  }
  return configuredPrice(service.labor) ? `Labor from ${formatMoney(service.labor)}` : "Price requires confirmation";
}

function getService(id) {
  return OILBYMO_SETTINGS.services.find((service) => service.id === id);
}

function makeServiceCheckbox(service, name, className, value) {
  const label = document.createElement("label");
  label.className = className || "service-check";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = name;
  input.value = value || service.id;
  input.dataset.serviceId = service.id;
  const content = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = service.shortName;
  content.append(title);
  label.append(input, content);
  return label;
}

function renderServices() {
  const cards = document.querySelector("#service-grid");
  const oilServices = document.querySelector("#oil-service-list");
  const brakeServices = document.querySelector("#brake-service-list");
  const estimateServices = document.querySelector("#estimate-services");
  const bookingServices = document.querySelector("#booking-services");

  let cardNumber = 0;
  OILBYMO_SETTINGS.services.forEach((service) => {
    estimateServices.append(makeServiceCheckbox(service, "estimate_service", "service-check"));
    bookingServices.append(makeServiceCheckbox(service, "services[]", "service-check", service.name));
    if (service.showOnServiceCards === false) return;

    const article = document.createElement("article");
    article.className = "service-card";
    const number = document.createElement("span");
    number.className = "service-number";
    cardNumber += 1;
    number.textContent = String(cardNumber).padStart(2, "0");
    const icon = document.createElement("span");
    icon.className = "service-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = SERVICE_ICONS[service.id] || SERVICE_ICONS.additional;
    const title = document.createElement("h4");
    title.textContent = service.name;
    const description = document.createElement("p");
    description.textContent = service.description;
    const details = document.createElement("div");
    details.className = "service-meta";
    const price = document.createElement("span");
    price.textContent = serviceLaborText(service);
    const duration = document.createElement("span");
    duration.textContent = configuredPrice(service.minutes) && service.minutes > 0 ? `About ${service.minutes} min` : "Timing confirmed by request";
    details.append(price, duration);
    const book = document.createElement("a");
    book.className = "service-book-link";
    book.href = "#booking";
    book.dataset.bookService = service.id;
    book.innerHTML = "Book this service <span aria-hidden=\"true\">↗</span>";
    article.append(number, icon, title, description, details, book);
    const serviceList = service.category === "brakes" ? brakeServices : oilServices;
    serviceList.append(article);
  });

  cards.addEventListener("click", (event) => {
    const link = event.target.closest("[data-book-service]");
    if (!link) return;
    const checkbox = bookingServices.querySelector(`input[data-service-id="${link.dataset.bookService}"]`);
    if (checkbox) {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
}

function renderGallery() {
  const gallery = document.querySelector("#gallery-grid");
  if (!OILBYMO_SETTINGS.gallery.length) {
    const empty = document.createElement("div");
    empty.className = "gallery-empty";
    empty.innerHTML = "<span class=\"gallery-empty-icon\" aria-hidden=\"true\">▧</span><strong>Completed work photos coming soon</strong><p>Before-and-after photos will be added here as Oil By Mo shares its work.</p>";
    gallery.append(empty);
    return;
  }

  OILBYMO_SETTINGS.gallery.forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    const heading = document.createElement("h3");
    heading.textContent = item.service;
    const images = document.createElement("div");
    images.className = "gallery-images";
    const photos = item.images || [
      { src: item.before, caption: "Before", alt: `${item.service} — before photo` },
      { src: item.after, caption: "After", alt: `${item.service} — after photo` },
    ];
    images.classList.toggle("single", photos.length === 1);
    photos.forEach((photo) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.alt;
      image.loading = "lazy";
      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption;
      figure.append(image, caption);
      images.append(figure);
    });
    card.append(heading, images);
    gallery.append(card);
  });
}

function getSelectedServices(form, fieldName) {
  return [...form.querySelectorAll(`input[name="${fieldName}"]:checked`)]
    .map((input) => getService(input.value))
    .filter(Boolean);
}

function asPriceRange(value) {
  if (configuredPrice(value)) return { minimum: value, maximum: value };
  if (
    value &&
    configuredPrice(value.minimum) &&
    configuredPrice(value.maximum) &&
    value.maximum >= value.minimum
  ) {
    return { minimum: value.minimum, maximum: value.maximum };
  }
  return null;
}

function sumPriceRanges(values) {
  const ranges = values.map(asPriceRange);
  if (ranges.some((range) => !range)) return null;
  return {
    minimum: ranges.reduce((total, range) => total + range.minimum, 0),
    maximum: ranges.reduce((total, range) => total + range.maximum, 0),
  };
}

function displayPriceRange(range) {
  if (!range) return null;
  return range.minimum === range.maximum ? range.minimum : range;
}

function getServiceLabor(service, services, brakeScope) {
  if (service.laborByWheels) return service.laborByWheels[brakeScope] ?? null;
  if (service.laborRange) return service.laborRange;
  if (configuredPrice(service.standaloneLaborMinimum)) {
    return services.length > 1 ? service.labor : service.standaloneLaborMinimum;
  }
  return service.labor;
}

function getTravelPricing(distance) {
  const fees = OILBYMO_SETTINGS.pricing.travel;
  const options = {
    within_10: { fee: fees.withinTenMiles, label: "Included (within 10 miles)" },
    "11_20": { fee: fees.elevenToTwentyMiles, label: "11–20 miles" },
    "21_30": { fee: fees.twentyOneToThirtyMiles, label: "21–30 miles" },
    over_30: { fee: null, label: "Custom quote required (over 30 miles)" },
    unsure: { fee: null, label: "Confirm location" },
  };
  return options[distance] || { fee: null, label: "Confirm location" };
}

function getSourcingFee(partsPrice) {
  const settings = OILBYMO_SETTINGS.pricing.partsSourcingFee;
  return Math.min(settings.maximum, Math.max(settings.minimum, partsPrice * settings.rate));
}

function getPricing(services, partsPreference, brakeScope, travelDistance) {
  const laborRange = sumPriceRanges(services.map((service) => getServiceLabor(service, services, brakeScope)));
  const laborMinimum = services.length === 1 && services.some((service) => configuredPrice(service.standaloneLaborMinimum));
  const partsServices = services.filter((service) => service.partsRequired);
  const partsRequired = partsServices.length > 0;
  const travel = getTravelPricing(travelDistance);
  let partsRange = { minimum: 0, maximum: 0 };
  let partsLabel = "Not required";
  let partsSourcingRange = { minimum: 0, maximum: 0 };

  if (partsRequired && partsPreference === "customer") {
    partsRange = asPriceRange(OILBYMO_SETTINGS.pricing.customerSuppliedParts);
    partsLabel = `Customer-supplied (${priceText(displayPriceRange(partsRange), "Pending confirmation")})`;
  } else if (partsRequired && partsPreference === "unsure") {
    partsRange = null;
    partsLabel = "Pending parts quote";
    partsSourcingRange = null;
  } else if (partsRequired) {
    partsRange = sumPriceRanges(partsServices.map((service) => service.parts));
    if (partsRange) {
      partsSourcingRange = {
        minimum: getSourcingFee(partsRange.minimum),
        maximum: getSourcingFee(partsRange.maximum),
      };
      partsLabel = priceText(displayPriceRange(partsRange), "Pending parts quote");
    } else {
      partsLabel = "Pending parts quote";
      partsSourcingRange = null;
    }
  }

  const serviceSubtotalRange = partsRange ? sumPriceRanges([laborRange, partsRange]) : null;
  const additionalFeesRange = partsSourcingRange && configuredPrice(travel.fee)
    ? sumPriceRanges([partsSourcingRange, travel.fee])
    : null;
  const totalRange = serviceSubtotalRange && additionalFeesRange
    ? sumPriceRanges([serviceSubtotalRange, additionalFeesRange])
    : null;
  const partsSourcingLabel = partsSourcingRange
    ? priceText(displayPriceRange(partsSourcingRange))
    : "Pending parts quote";
  const travelLabel = configuredPrice(travel.fee)
    ? `${formatMoney(travel.fee)} (${travel.label})`
    : travel.label;

  return {
    label: !partsRequired
      ? "No parts required"
      : partsPreference === "customer"
        ? "Customer-supplied parts"
        : partsPreference === "shop"
          ? "Oil By Mo-provided parts"
          : "Parts need confirmation",
    labor: displayPriceRange(laborRange),
    parts: partsLabel,
    subtotal: displayPriceRange(serviceSubtotalRange),
    partsSourcingFee: partsSourcingRange ? displayPriceRange(partsSourcingRange) : partsSourcingLabel,
    travel: travelLabel,
    total: displayPriceRange(totalRange),
    laborMinimum,
    totalMinimum: laborMinimum && Boolean(totalRange),
  };
}

function priceText(value, pendingLabel) {
  if (typeof value === "string") return value;
  const range = asPriceRange(value);
  if (!range) return pendingLabel || "Pending confirmation";
  return range.minimum === range.maximum
    ? formatMoney(range.minimum)
    : `${formatMoney(range.minimum)}–${formatMoney(range.maximum)}`;
}

function renderPricingBreakdown(pricing, compact) {
  const list = document.createElement("dl");
  list.className = compact ? "estimate-breakdown compact" : "estimate-breakdown";
  const rows = [
    [`Labor${pricing.laborMinimum ? " (minimum)" : ""}`, priceText(pricing.labor, "Pending labor quote")],
    ["Parts", pricing.parts],
    ["Service subtotal", priceText(pricing.subtotal, "Pending confirmation")],
    ["Parts sourcing fee", priceText(pricing.partsSourcingFee, "Pending parts quote")],
    ["Travel fee", pricing.travel],
    [`Estimated total${pricing.totalMinimum ? " (minimum)" : ""}`, priceText(pricing.total, "Pending confirmation")],
  ];
  rows.forEach(([label, value], index) => {
    const row = document.createElement("div");
    row.className = index === rows.length - 1 ? "estimate-total" : "";
    const term = document.createElement("dt");
    term.textContent = label;
    const amount = document.createElement("dd");
    amount.textContent = value;
    row.append(term, amount);
    list.append(row);
  });
  return list;
}

function selectedParts(form, name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function formatEstimate(services, preference, brakeScope, travelDistance) {
  if (!services.length) return null;
  return getPricing(services, preference, brakeScope, travelDistance);
}

const estimateForm = document.querySelector("#estimate-form");
const estimateResult = document.querySelector("#estimate-result");
const estimateBrakeScopeControl = document.querySelector("#estimate-brake-scope-control");
const estimatePartsPicker = document.querySelector("#estimate-parts-picker");
const estimateBookLink = document.querySelector("#estimate-book-link");
const bookingForm = document.querySelector("#booking-form");
const bookingSubmit = document.querySelector("#booking-submit");
const bookingMessage = document.querySelector("#booking-message");
const serviceError = document.querySelector("#service-error");
const bookingEstimateSummary = document.querySelector("#booking-estimate-summary");
const estimateAttachedNote = document.querySelector("#estimate-attached-note");
const bookingBrakeScopeControl = document.querySelector("#booking-brake-scope-control");
const bookingPartsPicker = document.querySelector("#booking-parts-picker");

function updateEstimateControls() {
  const services = getSelectedServices(estimateForm, "estimate_service");
  const needsBrakeScope = services.some((service) => service.laborByWheels);
  const needsPartsPreference = services.some((service) => service.partsRequired);
  const brakeScope = estimateForm.elements.brake_scope;
  const partsOptions = [...estimateForm.querySelectorAll('input[name="parts"]')];

  estimateBrakeScopeControl.hidden = !needsBrakeScope;
  brakeScope.required = needsBrakeScope;
  if (!needsBrakeScope) brakeScope.value = "";

  estimatePartsPicker.hidden = !needsPartsPreference;
  partsOptions.forEach((option, index) => {
    option.required = needsPartsPreference && index === 0;
    if (!needsPartsPreference) option.checked = false;
  });
}

function getBookingServices() {
  return [...bookingForm.querySelectorAll('input[name="services[]"]:checked')]
    .map((input) => getService(input.dataset.serviceId))
    .filter(Boolean);
}

function updateBookingControls() {
  const services = getBookingServices();
  const needsBrakeScope = services.some((service) => service.laborByWheels);
  const needsPartsPreference = services.some((service) => service.partsRequired);
  const brakeScope = bookingForm.querySelector('select[name="brake_scope"]');
  const partsOptions = [...bookingForm.querySelectorAll('input[name="parts_preference"]')];

  bookingBrakeScopeControl.hidden = !needsBrakeScope;
  brakeScope.required = needsBrakeScope;
  if (!needsBrakeScope) brakeScope.value = "";

  bookingPartsPicker.hidden = !needsPartsPreference;
  partsOptions.forEach((option, index) => {
    option.required = needsPartsPreference && index === 0;
    if (!needsPartsPreference) option.checked = false;
  });
}

const estimateDependentFields = new Set([
  "year", "make", "model", "estimate_service", "parts", "brake_scope", "travel_distance",
  "vehicle_year", "vehicle_make", "vehicle_model", "services[]", "parts_preference", "service_area", "location",
]);

function invalidateAttachedEstimate(event) {
  if (bookingForm.dataset.estimateAttached !== "true" || !estimateDependentFields.has(event.target.name)) return;
  bookingForm.dataset.estimateAttached = "false";
  bookingEstimateSummary.value = "Estimate selections changed after calculation; confirm the current request details.";
  estimateAttachedNote.textContent = "Request details changed after calculating. Oil By Mo will review the current details and confirm your price.";
  estimateAttachedNote.classList.add("is-stale");
  estimateBookLink.innerHTML = 'Continue to appointment request <span aria-hidden="true">↗</span>';
}

function estimateSummaryText(services, preference, brakeScope, pricing, vehicle) {
  const partsPreference = pricing.label;
  const wheelScope = brakeScope
    ? ({ 1: "1 wheel", 2: "2 wheels (one axle)", 4: "all 4 wheels" }[brakeScope] || "")
    : "";
  return [
    "PRELIMINARY ESTIMATE — subject to review and confirmation",
    `Vehicle: ${vehicle.year} ${vehicle.make} ${vehicle.model}`,
    `Services: ${services.map((service) => service.name).join(", ")}`,
    wheelScope ? `Brake scope: ${wheelScope}` : "",
    `Parts preference: ${preference ? partsPreference : "No parts required"}`,
    `Labor${pricing.laborMinimum ? " (minimum)" : ""}: ${priceText(pricing.labor, "Pending labor quote")}`,
    `Parts: ${pricing.parts}`,
    `Service subtotal: ${priceText(pricing.subtotal, "Pending confirmation")}`,
    `Parts sourcing fee: ${priceText(pricing.partsSourcingFee, "Pending parts quote")}`,
    `Travel: ${pricing.travel}`,
    `Estimated total${pricing.totalMinimum ? " (minimum)" : ""}: ${priceText(pricing.total, "Pending confirmation")}`,
  ].filter(Boolean).join("\n");
}

function attachEstimateToBooking(services, preference, brakeScope, travelDistance, summary, vehicle) {
  bookingForm.elements.vehicle_year.value = vehicle.year;
  bookingForm.elements.vehicle_make.value = vehicle.make;
  bookingForm.elements.vehicle_model.value = vehicle.model;

  const selectedIds = new Set(services.map((service) => service.id));
  bookingForm.querySelectorAll('input[name="services[]"]').forEach((input) => {
    input.checked = selectedIds.has(input.dataset.serviceId);
  });

  const partsValue = {
    customer: "Customer-supplied parts",
    shop: "Oil By Mo to provide parts",
    unsure: "Unsure",
  }[preference];
  bookingForm.querySelectorAll('input[name="parts_preference"]').forEach((input) => {
    input.checked = input.value === partsValue;
  });
  bookingForm.querySelector('select[name="brake_scope"]').value = brakeScope;
  bookingForm.elements.travel_distance.value = travelDistance;
  updateBookingControls();
  serviceError.hidden = true;

  bookingEstimateSummary.value = summary;
  bookingForm.dataset.estimateAttached = "true";
  estimateAttachedNote.textContent = "Your preliminary estimate is attached to this request. Oil By Mo will review it and confirm the final price before work.";
  estimateAttachedNote.classList.remove("is-stale");
  estimateAttachedNote.hidden = false;
}

function showBookingMessage(message, type) {
  bookingMessage.hidden = false;
  bookingMessage.className = `form-message ${type}`;
  bookingMessage.setAttribute("role", type === "error" ? "alert" : "status");
  bookingMessage.setAttribute("aria-live", type === "error" ? "assertive" : "polite");
  bookingMessage.replaceChildren();
  if (type === "success") {
    const icon = document.createElement("span");
    icon.className = "form-message-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "✓";
    const content = document.createElement("div");
    content.className = "form-message-content";
    const heading = document.createElement("strong");
    heading.textContent = "Request received";
    const description = document.createElement("p");
    description.textContent = message;
    content.append(heading, description);
    bookingMessage.append(icon, content);
    return;
  }
  bookingMessage.textContent = message;
}

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

bookingForm.elements.preferred_date.min = localDateString(new Date());
estimateForm.addEventListener("change", (event) => {
  if (event.target.name === "estimate_service") updateEstimateControls();
  invalidateAttachedEstimate(event);
});
estimateForm.addEventListener("input", invalidateAttachedEstimate);
bookingForm.addEventListener("input", invalidateAttachedEstimate);
bookingForm.addEventListener("change", (event) => {
  if (event.target.name === "services[]") {
    updateBookingControls();
    if (getBookingServices().length) serviceError.hidden = true;
  }
  invalidateAttachedEstimate(event);
});

estimateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateEstimateControls();
  if (!estimateForm.reportValidity()) return;
  const services = getSelectedServices(estimateForm, "estimate_service");
  const parts = selectedParts(estimateForm, "parts");
  const brakeScope = estimateForm.elements.brake_scope.value;
  const travelDistance = estimateForm.elements.travel_distance.value;
  estimateResult.replaceChildren();
  estimateResult.hidden = false;
  estimateResult.classList.remove("estimate-error");
  if (!services.length) {
    estimateResult.textContent = "Select at least one service to calculate an estimate.";
    estimateResult.classList.add("estimate-error");
    return;
  }
  const heading = document.createElement("h3");
  heading.textContent = "Your preliminary estimate";
  const vehicle = estimateForm.elements;
  const vehicleLine = document.createElement("p");
  vehicleLine.className = "estimate-vehicle";
  vehicleLine.textContent = `${vehicle.year.value} ${vehicle.make.value} ${vehicle.model.value}`;
  const pricing = formatEstimate(services, parts, brakeScope, travelDistance);
  const description = document.createElement("p");
  description.className = "estimate-label";
  description.textContent = pricing.label;
  estimateResult.append(heading, vehicleLine, description, renderPricingBreakdown(pricing, true));
  const note = document.createElement("p");
  note.className = "estimate-disclaimer";
  note.textContent = parts === "customer"
    ? "Starting labor estimate only. Your parts must be compatible and will be checked; Oil By Mo will confirm the final price and travel details before work."
    : "Starting labor estimate only. Parts, fitment, and travel are reviewed by Oil By Mo, who will contact you to confirm the final price before work.";
  estimateResult.append(note);
  const vehicleData = {
    year: vehicle.year.value,
    make: vehicle.make.value,
    model: vehicle.model.value,
  };
  const summary = estimateSummaryText(services, parts, brakeScope, pricing, vehicleData);
  attachEstimateToBooking(services, parts, brakeScope, travelDistance, summary, vehicleData);
  estimateBookLink.innerHTML = 'Send this estimate with a service request <span aria-hidden="true">↗</span>';
});

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  const selectedServices = bookingForm.querySelectorAll('input[name="services[]"]:checked');
  if (!selectedServices.length) {
    serviceError.hidden = false;
    bookingForm.querySelector('input[name="services[]"]')?.focus();
    return;
  }
  serviceError.hidden = true;

  bookingSubmit.disabled = true;
  bookingSubmit.innerHTML = "Sending request...";
  bookingForm.setAttribute("aria-busy", "true");

  try {
    const response = await fetch(bookingForm.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(bookingForm),
    });

    if (!response.ok) {
      let message = "We couldn't send your request. Please try again or contact Oil By Mo directly.";
      try {
        const result = await response.json();
        if (result && Array.isArray(result.errors)) {
          const details = result.errors
            .map((item) => item && typeof item.message === "string" ? item.message : "")
            .filter(Boolean)
            .join(" ");
          if (details) message = details;
        }
      } catch (error) {
        console.error("Could not read the Formspree error response:", error);
      }
      showBookingMessage(message, "error");
      return;
    }

    bookingForm.reset();
    bookingForm.dataset.estimateAttached = "false";
    bookingEstimateSummary.value = "No online estimate calculated";
    estimateAttachedNote.hidden = true;
    estimateAttachedNote.classList.remove("is-stale");
    estimateBookLink.innerHTML = 'Continue to appointment request <span aria-hidden="true">↗</span>';
    updateBookingControls();
    showBookingMessage(
      "Thanks for sharing the details. Oil By Mo will follow up to confirm availability and plan your visit.",
      "success",
    );
  } catch (error) {
    console.error("Could not submit booking request:", error);
    showBookingMessage(
      "We couldn't reach the request service. Please try again, or call/email Oil By Mo.",
      "error",
    );
  } finally {
    bookingSubmit.disabled = false;
    bookingSubmit.innerHTML = 'Send service request <span aria-hidden="true">↗</span>';
    bookingForm.removeAttribute("aria-busy");
  }
});

function setBusinessLink(id, value, kind, label) {
  const link = document.querySelector(`#${id}`);
  if (!value) return;
  if (kind === "phone") {
    link.href = `tel:${value.replace(/[^\d+]/g, "")}`;
    link.textContent = value;
  } else if (kind === "email") {
    link.href = `mailto:${value}?subject=${encodeURIComponent("Oil By Mo website inquiry")}`;
    link.textContent = label || value;
  } else {
    try {
      const url = new URL(value);
      if (url.protocol === "https:") {
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label || "Follow Oil By Mo";
      }
    } catch {
      console.error("Instagram URL must be a valid HTTPS address.");
    }
  }
}

const business = OILBYMO_SETTINGS.business;
setBusinessLink("business-phone", business.phone, "phone");
setBusinessLink("business-email", business.email, "email");
setBusinessLink("contact-email-cta", business.email, "email", "Email Oil By Mo ↗");
setBusinessLink("privacy-email", business.email, "email", "Email Oil By Mo");
setBusinessLink("business-instagram", business.instagram, "instagram", business.instagramHandle);
setBusinessLink("footer-instagram", business.instagram, "instagram", business.instagramHandle);
if (business.serviceArea) document.querySelector("#business-area").textContent = business.serviceArea;

renderServices();
renderGallery();
updatePricingLabels();
updateEstimateControls();
updateBookingControls();
