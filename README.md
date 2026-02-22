# Frontend Mentor - Social links profile solution

This is my solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshots

Mobile:

![mobile screenshot](/assets/images/screenshots/mobile-screenshot.jpeg)

Desktop:

![desktop screenshot](/assets/images/screenshots/desktop-screenshot.jpeg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/social-links-profile-8kXS06In2a)
- [Live site URL](https://social-links-profile-dionysialemonaki.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

In the HTML, I considered the image to be meaningful content that deserves a proper description. Therefore, I provided alternative text that accurately describes the image without being too verbose for screen readers. Treating it as decorative (and thus leaving the `alt` attribute empty) or using the person's name wouldn't be appropriate – the latter would be redundant since the name already appears as the card's heading.

```html
<img
  src="/assets/images/avatar-jessica.jpeg"
  alt="A headshot of a Black woman with an afro, wearing a black shirt, looking sideways at the camera with a neutral expression"
  width="88"
  height="88"
  class="card__image"
/>
```

In the CSS, the card's padding is smaller on mobile screens and increases on larger ones. Instead of using a media query to adjust just one property, I used the `clamp()` function to fluidly scale the spacing between a minimum and maximum value depending on the viewport width.

```css
.card {
  padding: clamp(var(--space-300), 1.2143rem + 1.4286vw, var(--space-500));
}
```

For the image styles, since the CSS reset sets all images to `display: block`, the `text-align` property property set on `.card` to center all the text had no effect on the image. So to center it, I used `margin-inline: auto` instead. I also applied `border-radius: 50%` to make the default square round, and set explicit `width` and `height` values in rem units so it scales with the user's browser text preferences.

```css
.card__image {
  width: 5.5rem;
  height: 5.5rem;
  margin-inline: auto;
  border-radius: 50%;
}
```

Lastly, for the link styles, I set each link to `display: block` so it occupies the full width of its parent `li`, and I added both horizontal and vertical padding to improve spacing and clickable area. I used Flexbox to separate each link inside the list and also using native CSS nesting for the `:hover`, `:active` and `:focus-visible` states.

```css
.card__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
  list-style-type: none;
}

.card__link {
  background-color: var(--grey-700);
  display: block;
  padding: var(--space-150);
  border-radius: var(--space-100);
  color: var(--white);
  text-decoration: none;
  font-weight: var(--fw-bold);

  &:hover,
  &:active {
    background-color: var(--green);
    color: var(--grey-700);
  }

  &:focus-visible {
    outline: 2px dotted var(--green);
    outline-offset: 4px;
  }
}
```
