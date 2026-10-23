# Twar Mal Travel & Tour

A responsive luxury travel website for customizable journeys across Thailand.

## Website

The deployable static website is in `dist/`. GitHub Pages publishes that directory automatically whenever `main` is updated.

## Local preview

Run a static web server from the repository root, for example:

```sh
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## Current scope

- 23 Thailand destinations
- 207 categorized hotel examples and 32 vehicle choices
- 1-day, 3-day, 7-day, 14-day, and custom-duration journeys
- Budget-aware hotel, activity, dining, travel-style, and transportation suggestions
- Capacity-aware room and vehicle quantities with transparent price breakdowns
- Adult, child, and senior party planning with accessibility preferences
- Editable, destination-aware day-by-day itinerary suggestions
- Self-drive car and motorcycle options
- English/Thai trip planner, budget guidance, itinerary, and booking review
- Clear estimate-versus-final-quotation language and prototype policy sections
- Responsive mobile and desktop layouts
- Safe frontend account, booking, pricing, and test-checkout previews

This is a frontend-only demonstration. Secure authentication, persistent bookings, live inventory, card processing, and production legal review are required before accepting real customer payments.

## Quality checks

Run the full catalogue, markup, and calculation matrix:

```sh
node tests/audit.mjs
```

With internet access, verify every hosted font and image dependency:

```sh
node tests/check-assets.mjs
```
