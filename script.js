const OILBYMO_SETTINGS = {
  business: {
    phone: "",
    email: "",
    instagram: "",
    serviceArea: "",
  },
  // Set configured prices in dollars; use null until a price is confirmed.
  pricing: {
    currency: "USD",
    additionalFees: null,
  },
  availableTimes: [],
  // Use an HTTPS form endpoint (for example, a configured Formspree form URL).
  bookingEndpoint: "",
  contactEndpoint: "",
  services: [
    { id: "oil_change", name: "Oil and filter change", shortName: "Oil change", description: "An oil and filter service based on your vehicle’s requirements.", labor: null, parts: null, minutes: null },
    { id: "front_brakes", name: "Front brake pad replacement", shortName: "Front brakes", description: "Front brake pad replacement, with parts fitment checked for your vehicle.", labor: null, parts: null, minutes: null },
    { id: "rear_brakes", name: "Rear brake pad replacement", shortName: "Rear brakes", description: "Rear brake pad replacement, with parts fitment checked for your vehicle.", labor: null, parts: null, minutes: null },
    { id: "full_brakes", name: "Full brake pad replacement", shortName: "Front and rear brakes", description: "Brake pad replacement for the front and rear axle.", labor: null, parts: null, minutes: null },
    { id: "pads_rotors", name: "Brake pads and rotor replacement", shortName: "Pads and rotors", description: "Brake pad and rotor service. Parts and fitment are confirmed for your vehicle.", labor: null, parts: null, minutes: null },
    { id: "maintenance", name: "Vehicle maintenance", shortName: "Maintenance", description: "Routine maintenance tailored to your vehicle and requested work.", labor: null, parts: null, minutes: null },
    { id: "additional", name: "Additional service request", shortName: "Other service", description: "Have a different service in mind? Share the details for a custom estimate.", labor: null, parts: null, minutes: null },
  ],
  // Add entries with service, before, and after image paths when photos are ready.
  gallery: [],
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

function configuredPrice(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function getService(id) {
  return OILBYMO_SETTINGS.services.find((service) => service.id === id);
}

function makeServiceCheckbox(service, name, className) {
  const label = document.createElement("label");
  label.className = className || "service-check";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = name;
  input.value = service.id;
  const content = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = service.shortName;
  content.append(title);
  label.append(input, content);
  return label;
}

function renderServices() {
  const cards = document.querySelector("#service-grid");
  const estimateServices = document.querySelector("#estimate-services");
  const bookingServices = document.querySelector("#booking-services");

  OILBYMO_SETTINGS.services.forEach((service, index) => {
    const article = document.createElement("article");
    article.className = "service-card";
    const number = document.createElement("span");
    number.className = "service-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const icon = document.createElement("span");
    icon.className = "service-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = index === 0 ? "↻" : index < 5 ? "◉" : "＋";
    const title = document.createElement("h3");
    title.textContent = service.name;
    const description = document.createElement("p");
    description.textContent = service.description;
    const details = document.createElement("div");
    details.className = "service-meta";
    const price = document.createElement("span");
    price.textContent = configuredPrice(service.labor) ? `Labor from ${formatMoney(service.labor)}` : "Price requires confirmation";
    const duration = document.createElement("span");
    duration.textContent = configuredPrice(service.minutes) && service.minutes > 0 ? `About ${service.minutes} min` : "Timing confirmed by request";
    details.append(price, duration);
    const book = document.createElement("a");
    book.className = "service-book-link";
    book.href = "#booking";
    book.dataset.bookService = service.id;
    book.innerHTML = "Book this service <span aria-hidden=\"true\">↗</span>";
    article.append(number, icon, title, description, details, book);
    cards.append(article);
    estimateServices.append(makeServiceCheckbox(service, "estimate_service", "service-check"));
    bookingServices.append(makeServiceCheckbox(service, "booking_service", "service-check"));
  });

  cards.addEventListener("click", (event) => {
    const link = event.target.closest("[data-book-service]");
    if (!link) return;
    const checkbox = document.querySelector(`#booking-services input[value="${link.dataset.bookService}"]`);
    if (checkbox) checkbox.checked = true;
    updateBookingEstimate();
  });
}

function renderAvailableTimes() {
  const times = OILBYMO_SETTINGS.availableTimes;
  if (!times.length) return;
  const timeInput = bookingForm.querySelector('[name="time"]');
  const timeSelect = document.createElement("select");
  timeSelect.name = "time";
  timeSelect.required = true;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a preferred time";
  timeSelect.append(placeholder);
  times.forEach((time) => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    timeSelect.append(option);
  });
  timeInput.replaceWith(timeSelect);
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
    [["Before", item.before], ["After", item.after]].forEach(([label, src]) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = src;
      image.alt = `${item.service} — ${label.toLowerCase()} photo`;
      image.loading = "lazy";
      const caption = document.createElement("figcaption");
      caption.textContent = label;
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

function getPricing(services, partsPreference) {
  const laborKnown = services.every((service) => configuredPrice(service.labor));
  const labor = laborKnown ? services.reduce((total, service) => total + service.labor, 0) : null;
  const partsKnown = services.every((service) => configuredPrice(service.parts));
  const parts = partsKnown ? services.reduce((total, service) => total + service.parts, 0) : null;
  const feesKnown = configuredPrice(OILBYMO_SETTINGS.pricing.additionalFees);
  const fees = feesKnown ? OILBYMO_SETTINGS.pricing.additionalFees : null;

  if (partsPreference === "customer") {
    return {
      label: "Customer-Supplied Parts",
      labor,
      parts: "Customer-supplied",
      subtotal: laborKnown ? labor : null,
      fees,
      total: laborKnown && feesKnown ? labor + fees : null,
      custom: false,
    };
  }
  if (partsPreference === "unsure") {
    return { label: "Custom estimate requested", labor, parts: null, subtotal: null, fees, total: null, custom: true };
  }
  return {
    label: "Oil By Mo-provided parts",
    labor,
    parts,
    subtotal: laborKnown && partsKnown ? labor + parts : null,
    fees,
    total: laborKnown && partsKnown && feesKnown ? labor + parts + fees : null,
    custom: false,
  };
}

function priceText(value, pendingLabel) {
  return configuredPrice(value) ? formatMoney(value) : pendingLabel || "Pending confirmation";
}

function renderPricingBreakdown(pricing, compact) {
  const list = document.createElement("dl");
  list.className = compact ? "estimate-breakdown compact" : "estimate-breakdown";
  const rows = [
    ["Labor", priceText(pricing.labor)],
    ["Parts", typeof pricing.parts === "string" ? pricing.parts : priceText(pricing.parts, "Pending confirmation")],
    ["Subtotal", priceText(pricing.subtotal)],
    ["Additional fees", priceText(pricing.fees, "Pending confirmation")],
    ["Estimated total", priceText(pricing.total, "Pending confirmation")],
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

function formatEstimate(services, preference) {
  if (!services.length) return null;
  return getPricing(services, preference);
}

const estimateForm = document.querySelector("#estimate-form");
const estimateResult = document.querySelector("#estimate-result");

estimateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!estimateForm.reportValidity()) return;
  const services = getSelectedServices(estimateForm, "estimate_service");
  const parts = selectedParts(estimateForm, "parts");
  estimateResult.replaceChildren();
  estimateResult.hidden = false;
  if (!services.length) {
    estimateResult.textContent = "Select at least one service to calculate an estimate.";
    estimateResult.classList.add("estimate-error");
    return;
  }
  estimateResult.classList.remove("estimate-error");
  const heading = document.createElement("h3");
  heading.textContent = parts === "unsure" ? "Let’s prepare a custom estimate." : "Your estimate breakdown";
  const vehicle = estimateForm.elements;
  const vehicleLine = document.createElement("p");
  vehicleLine.className = "estimate-vehicle";
  vehicleLine.textContent = `${vehicle.year.value} ${vehicle.make.value} ${vehicle.model.value}`;
  const pricing = formatEstimate(services, parts);
  const description = document.createElement("p");
  description.className = "estimate-label";
  description.textContent = pricing.label;
  estimateResult.append(heading, vehicleLine, description, renderPricingBreakdown(pricing, true));
  const note = document.createElement("p");
  note.className = "estimate-disclaimer";
  note.textContent = parts === "customer"
    ? "Customer-supplied parts must be compatible and will be inspected before installation. Estimate is subject to vehicle inspection."
    : "Parts compatibility and additional charges must be confirmed. Estimate is subject to vehicle inspection.";
  estimateResult.append(note);
});

const bookingForm = document.querySelector("#booking-form");
const submitButton = document.querySelector("#booking-submit");
const serviceError = document.querySelector("#service-error");
const bookingEstimate = document.querySelector("#booking-estimate");
const bookingMessage = document.querySelector("#booking-message");
const vehicleDetailsPanel = document.querySelector("#vehicle-details-panel");
const vehicleDetailFields = [...vehicleDetailsPanel.querySelectorAll("[name^=\"vehicle_\"]:not([name=\"vehicle_trim\"])")];

function updateBookingEstimate() {
  const services = getSelectedServices(bookingForm, "booking_service");
  const preference = selectedParts(bookingForm, "booking_parts");
  bookingEstimate.replaceChildren();
  if (!services.length || !preference) {
    bookingEstimate.textContent = "Choose services and a parts option to see configured pricing.";
    return;
  }
  const pricing = formatEstimate(services, preference);
  const heading = document.createElement("strong");
  heading.textContent = pricing.label;
  bookingEstimate.append(heading, renderPricingBreakdown(pricing, true));
  const note = document.createElement("p");
  note.textContent = preference === "customer"
    ? "Customer-supplied parts must be compatible and inspected before installation."
    : "Parts pricing and compatibility require confirmation when not configured.";
  bookingEstimate.append(note);
}

function updateVehicleRequirement() {
  const preference = selectedParts(bookingForm, "booking_parts");
  const needsVehicle = preference === "shop" || preference === "unsure";
  vehicleDetailsPanel.hidden = !needsVehicle;
  vehicleDetailFields.forEach((field) => {
    field.required = needsVehicle;
  });
}

bookingForm.addEventListener("change", (event) => {
  if (event.target.name === "booking_service" || event.target.name === "booking_parts") {
    updateBookingEstimate();
    if (getSelectedServices(bookingForm, "booking_service").length) serviceError.hidden = true;
  }
  if (event.target.name === "booking_parts") {
    updateVehicleRequirement();
  }
});

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const today = localDateString(new Date());
document.querySelectorAll('input[type="date"]').forEach((input) => {
  input.min = today;
});

function setFormMessage(element, message, type) {
  element.hidden = false;
  element.className = `form-message ${type}`;
  element.textContent = message;
}

function secureEndpoint(endpoint) {
  if (!endpoint) return false;
  try {
    return new URL(endpoint).protocol === "https:";
  } catch {
    return false;
  }
}

function bookingPayload() {
  const value = (name) => bookingForm.querySelector(`[name="${name}"]`).value.trim();
  const services = getSelectedServices(bookingForm, "booking_service");
  const parts = selectedParts(bookingForm, "booking_parts");
  const pricing = formatEstimate(services, parts);
  return {
    form_type: "appointment_request",
    submitted_at: new Date().toISOString(),
    customer: { name: value("name"), phone: value("phone"), email: value("email") },
    vehicle: {
      year: value("vehicle_year"),
      make: value("vehicle_make"),
      model: value("vehicle_model"),
      trim: value("vehicle_trim"),
    },
    services: services.map((service) => ({ id: service.id, name: service.name })),
    parts_preference: parts,
    appointment_preference: {
      date: value("date"),
      time: value("time"),
      location: value("location"),
      instructions: value("instructions"),
    },
    estimate: pricing && {
      label: pricing.label,
      labor: pricing.labor,
      parts: pricing.parts,
      subtotal: pricing.subtotal,
      additional_fees: pricing.fees,
      total: pricing.total,
      currency: OILBYMO_SETTINGS.pricing.currency,
    },
    approval_status: "pending",
  };
}

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  if (!getSelectedServices(bookingForm, "booking_service").length) {
    serviceError.hidden = false;
    document.querySelector("#booking-services input")?.focus();
    return;
  }
  serviceError.hidden = true;
  const endpoint = OILBYMO_SETTINGS.bookingEndpoint;
  if (!secureEndpoint(endpoint)) {
    setFormMessage(bookingMessage, "Booking requests are not connected yet. Configure a secure HTTPS booking endpoint in script.js before accepting requests.", "error");
    return;
  }
  submitButton.disabled = true;
  submitButton.dataset.originalText = submitButton.textContent;
  submitButton.textContent = "Sending request...";
  setFormMessage(bookingMessage, "Sending your appointment request…", "loading");
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(bookingPayload()),
    });
    if (!response.ok) throw new Error(`The booking service returned status ${response.status}.`);
    const shell = document.querySelector(".booking-shell");
    const confirmation = document.createElement("div");
    confirmation.className = "confirmation-card";
    confirmation.setAttribute("role", "status");
    const title = document.createElement("h3");
    title.textContent = "Your request has been sent.";
    const message = document.createElement("p");
    message.textContent = "Thank you for contacting Oil By Mo. This is not a confirmed appointment; Oil By Mo will contact you to confirm availability and any pending charges.";
    confirmation.append(title, message);
    bookingForm.remove();
    shell.append(confirmation);
  } catch (error) {
    console.error("Could not submit booking request:", error);
    setFormMessage(bookingMessage, "We couldn't send your request. Please try again or contact Oil By Mo directly.", "error");
    submitButton.disabled = false;
    submitButton.textContent = submitButton.dataset.originalText;
  }
});

const contactForm = document.querySelector("#contact-form");
const contactMessage = document.querySelector("#contact-message");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const endpoint = OILBYMO_SETTINGS.contactEndpoint;
  if (!secureEndpoint(endpoint)) {
    setFormMessage(contactMessage, "The contact form is not connected yet. Configure a secure HTTPS contact endpoint in script.js before accepting messages.", "error");
    return;
  }
  const button = contactForm.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Sending...";
  const formData = new FormData(contactForm);
  const payload = {
    form_type: "contact_message",
    name: String(formData.get("name")).trim(),
    contact: String(formData.get("contact")).trim(),
    message: String(formData.get("message")).trim(),
    submitted_at: new Date().toISOString(),
  };
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`The contact service returned status ${response.status}.`);
    contactForm.reset();
    setFormMessage(contactMessage, "Your message has been sent to Oil By Mo.", "success");
  } catch (error) {
    console.error("Could not submit contact message:", error);
    setFormMessage(contactMessage, "We couldn't send your message. Please try again or contact Oil By Mo directly.", "error");
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
});

function setBusinessLink(id, value, kind) {
  const link = document.querySelector(`#${id}`);
  if (!value) return;
  if (kind === "phone") {
    link.href = `tel:${value}`;
    link.textContent = value;
  } else if (kind === "email") {
    link.href = `mailto:${value}`;
    link.textContent = value;
  } else {
    try {
      const url = new URL(value);
      if (url.protocol === "https:") {
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Follow Oil By Mo";
      }
    } catch {
      console.error("Instagram URL must be a valid HTTPS address.");
    }
  }
}

const business = OILBYMO_SETTINGS.business;
setBusinessLink("business-phone", business.phone, "phone");
setBusinessLink("business-email", business.email, "email");
setBusinessLink("business-instagram", business.instagram, "instagram");
if (business.serviceArea) document.querySelector("#business-area").textContent = business.serviceArea;

renderServices();
renderGallery();
renderAvailableTimes();
updateVehicleRequirement();
updateBookingEstimate();
