# cooking-masterclass-catalogue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).



## Project Setup
```sh
git clone <repo-url>
cd <repo>
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
 ## 📌 Project Overview

This project showcases:

- A responsive ticket showcase layout 

- A reusable Ticket Card component displaying tier data dynamically

- A locally stored tickets.js data file for tier listings

- Featured tier highlighting to draw attention to premium options

- An interactive favourite (like) button with live count updates

- Hover animations and subtle UI effects for a modern experience

- Responsive design suitable for both desktop and mobile screens

- Clean component separation using props 

The app loads ticket data from a standalone tickets.js file and renders cards inside HomeView.vue using a v-for loop.
When a user favourites a ticket, the interaction updates the local state within the card component and visually reflects the change instantly on the page.

---

## Diagram
```mermaid
flowchart TD
    %% ROOT LEVEL
    A[App.vue] -->|component| B[Navbar.vue]
    A -->|component| C[HomeView.vue]
    
    %% HOME VIEW
    C -->|imports data| D[tickets.js]
    C -->|v-for loop| E[Card.vue]
    
    %% CARD COMPONENT
    E -->|prop: tickets Object| E
    E -->|component| F[Likebutton.vue]
    
    %% LIKEBUTTON
    F -->|prop: ticketNumber| F
    F -->|prop: likes| F
    F -->|prop: favourited| F
    F -->|checkbox toggle| F
    
    %% DATA FLOW
    D -->|ticket data array| C
    C -->|individual ticket| E
    E -->|ticket.id, ticket.likes| F
    
    %% STYLING
    E -->|dynamic class binding| E1[Bronze/Silver/Gold classes]
    E -->|dynamic border color| E2[ticket.color]
    E -->|conditional rendering| E3[Featured ribbon]
    
    style A fill:#42b983,stroke:#2c3e50,stroke-width:3px,color:#fff
    style C fill:#42b983,stroke:#2c3e50,stroke-width:2px,color:#fff
    style E fill:#ffd700,stroke:#2c3e50,stroke-width:2px
    style F fill:#ff6b6b,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D fill:#e0e0e0,stroke:#2c3e50,stroke-width:2px
```
---

## Image


<img width="1920" height="911" alt="screencapture-localhost-5173-2025-12-01-06_20_42" src="https://github.com/user-attachments/assets/dec12ba6-179d-45f2-9abc-b768731352d1" />

