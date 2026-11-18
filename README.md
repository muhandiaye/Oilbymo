# OilByMo

Oil By Mo is a static website built with HTML, CSS, and vanilla JavaScript. No build step or package installation is required.

## Run locally

From this directory, start Python's local static server:

```powershell
python -m http.server 4173
```

Open `http://localhost:4173` in a browser. Stop the server with Ctrl+C.

## Owner settings

Edit `OILBYMO_SETTINGS` near the top of `script.js`:

- `business`: phone, email, Instagram URL, and service area. Leave a value empty until it is known.
- `services`: descriptions and per-service `labor`, `parts`, and `minutes`. Prices are in the configured currency; use `null` when not confirmed. Set `pricing.additionalFees` to a number, including `0` if there are no additional fees, or leave it `null` while fees need confirmation.
- `availableTimes`: add preferred time options only when you are ready to offer them. When empty, customers can enter a preferred time window instead.
- `gallery`: add `{ service, before, after }` entries using image paths in the project to show completed work. Keep customer-identifying information out of public image paths and captions.
- `bookingEndpoint` and `contactEndpoint`: secure HTTPS endpoints that accept JSON POST requests.

The estimate calculator never invents prices. An estimate total stays pending until every applicable labor, parts, and additional-fee amount is configured. Customer-supplied parts are labeled and are not included in the labor-only estimate.

The appointment form is intentionally one page. Vehicle year, make, and model are requested only when a customer asks Oil By Mo to supply or help identify parts. Trim is optional.

## Receiving appointment requests

The project has no server or database, so it cannot securely deliver or save customer submissions by itself. Before publishing, configure `bookingEndpoint` (and, if desired, `contactEndpoint`) to a trusted HTTPS form provider or your own booking API. The endpoint must accept JSON POST requests and return a successful HTTP status only after it has accepted the request. The booking endpoint receives customer contact details, vehicle details when parts sourcing is requested, service selections, appointment preferences, and the estimate breakdown. A 2xx response displays a pending-approval message; other responses display an error, and the site does not store customer information in the browser.

For a provider such as Formspree, create a form, copy its HTTPS submission URL into the relevant setting, and verify that the provider accepts JSON payloads in the format sent by this site. If it requires a different payload format, adapt the submission handler in `script.js`. Do not put private API keys, email credentials, or database credentials in frontend files. Configure provider-side spam prevention, access controls, retention, and notifications, and submit a test request before going live. Availability and appointment confirmation remain manual unless the connected backend explicitly handles them.

## Deploy and test

The site can be hosted on GitHub Pages or another static host. Publish `index.html`, `styles.css`, and `script.js` from the same directory; no build command is needed. A configured HTTPS endpoint is required for forms to send data.

Before launch, test the mobile navigation, estimate with configured and unconfigured prices, required fields, conditional vehicle details, past-date prevention, and successful and failed endpoint responses. Do not use real customer details in test submissions.

To save and push changes with Git, run these commands from the project directory after reviewing the diff:

```powershell
git add index.html styles.css script.js README.md
git commit -m "Redesign OilByMo website and booking flow"
git push
```
