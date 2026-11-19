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

- `business`: phone, email, Instagram URL and handle, and service area. Leave a value empty until it is known.
- `pricing.partsSourcingFee`: the percentage and minimum/maximum fee for parts Oil By Mo sources.
- `pricing.customerSuppliedParts`: the parts charge for customer-supplied parts; it is currently set to zero.
- `pricing.travel`: travel charges by approximate driving-distance range from San Marcos. The configured rules are no charge within 10 miles, configured fees for the 11–20 and 21–30 mile ranges, and a custom quote beyond 30 miles.
- `services`: descriptions and labor/parts settings. Use `labor` for a fixed labor price, `laborRange` for a range, and `laborByWheels` for brake labor by wheel count. `standaloneLaborMinimum` supports tire-pressure service's minimum standalone rate. Set `parts` to the actual quoted amount or `null` until known; never enter a guessed parts price. `partsRequired` controls whether customers are asked about their parts, and `minutes` can hold an estimated duration when known.
- Service groups are controlled by each service's `category` (`oil` or `brakes`). Set `showOnServiceCards: false` to keep an estimator/booking option out of the main service cards.
- `gallery`: add `{ service, images: [{ src, alt, caption }] }` entries using image paths in `assets/`. Existing `{ service, before, after }` entries are also supported. Use accurate captions and remove license plates or other identifying details before publishing photos.
- Booking time windows, service-area choices, and travel-distance choices are in `index.html`.

The calculator uses the starting labor prices in `script.js` and never invents parts prices. Customer-supplied parts are labeled separately; when Oil By Mo provides parts, the parts price and sourcing fee remain pending until configured. Travel is free within 10 miles of San Marcos and uses the ranges configured above. Estimates are preliminary, depend on vehicle/parts compatibility and location, and are attached to a service request for Oil By Mo to review and confirm.

## Service requests with Formspree

The branded booking form submits asynchronously to Formspree, so customers stay on the website. An estimate calculated on the page is included in the request's `estimate_summary` field. The endpoint is the form's `action` in `index.html`; replace it there if you create a different Formspree form. The endpoint is public and is not a password or API secret. Customer information is handled by Formspree, not stored by this static website.

The booking form includes a short privacy notice explaining that submitted details are sent to Formspree and made available to Oil By Mo for review and follow-up. It avoids making promises about Formspree's retention or handling practices; check Formspree's current privacy terms before making any additional claims.

In your Formspree account:

1. Confirm the form is active and verify the notification email address.
2. View incoming requests in the Formspree submissions dashboard; enable email notifications there if desired.
3. Use Formspree's spam controls together with the form's hidden `_gotcha` honeypot field.

The website shows a success message only after Formspree returns a successful response. It does not confirm appointment availability; Oil By Mo must still review each request and contact the customer. Do not put Formspree account passwords or private credentials in website files.

## Deploy and test

The site can be hosted on GitHub Pages or another static host. Publish `index.html`, `styles.css`, `script.js`, and the `assets/` directory from the same directory; no build command is needed.

Before launch, test the mobile navigation, estimate with configured and unconfigured prices, and booking form on desktop and mobile. A fake form submission will create a test entry in your Formspree dashboard and may send an email notification; use fake details and remove the test entry afterward.

To save and push changes with Git, run these commands from the project directory after reviewing the diff:

```powershell
git add index.html styles.css script.js README.md
git commit -m "Connect OilByMo booking form to Formspree"
git push
```
