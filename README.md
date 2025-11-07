# Frontend Mentor - Social links profile solution

This is my solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project notes](#project-notes)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshots

Mobile:

![](/assets/images/screenshots/mobile-screenshot.jpeg)

Desktop:

![](/assets/images/screenshots/desktop-screenshot.jpeg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/social-links-profile-a1jA9pp2dp)
- [Live site URL](https://social-links-profile-dionysialemonaki.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### Project notes

In the HTML, I considered the image to be meaningful content that deserves a proper description. Therefore, I provided alternative text that accurately conveys the image without being too verbose for screen readers. Treating it as decorative (and thus leaving the `alt` attribute empty) or using the person's name as the alt text wouldn't be appropriate - the latter would be redundant since the name already appears as the card's heading.

```html
<img
  src="/assets/images/avatar-jessica.jpeg"
  alt="A headshot of a Black woman with an afro, wearing a black shirt, looking sideways at the camera with a neutral expression."
  width="88"
  height="88"
  class="card__image"
/>
```

For the text `Front-end developer and avid reader`, the design includes quotation marks, but it doesn't make sense semantically to use a `blockquote` or `q` element since the quotes appear to be decorative rather than representing an actual quotation. The text reads more like a self-description than something being cited. Therefore, I used a `p` element and added the quotes using the `::before ` and `::after` pseudo-elements.

```html
<p class="card__description">Front-end developer and avid reader.</p>
```

```css
.card__description::before,
.card__description::after {
  content: '"';
}
```

In the CSS, the card's padding is smaller on mobile screens and increases on larger screens (tablet and desktop). Instead of using a media query to adjust just one property, I used the `clamp()` function to fluidly scale the spacing between a minimum and maximum value depending on the viewport width.

```css
.card {
  padding: clamp(var(--space-300), 1.2143rem + 1.4286vw, var(--space-500));
}
```

For the image styles, since the CSS reset sets all images to `display: block;`, the `text-align` property on the `body` (used to center text in the card) had no effect on the image. To center it, I used the `margin-inline: auto` declaration. To make the default square image round, I applied a `border-radius: 50%`. And because it's a relatively small icon, I set it explicit `width` and `height` values in `rem` units so it scales with the user's browser text preferences.

```css
img {
  display: block;
  max-width: 100%;
}

.card__image {
  border-radius: 50%;
  margin-inline: auto;
  width: var(--max-avatar);
  height: var(--max-avatar);
}
```

Lastly, for the link styles, I set each link to `display: block` so it occupies the full width of its parent `li`, and I added both horizontal and vertical padding to improve spacing and clickable area. I used Flexbox to separate each link, and I also used CSS nesting for the `:hover` and `:focus-visible` states.

```css
.card__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
}

.card__link {
  display: block;
  text-decoration: none;
  background-color: var(--clr-bg-btn);
  padding: var(--space-150);
  border-radius: var(--radius-sm);
  color: var(--clr-text-btn);
  font-weight: var(--fw-bold);

  &:hover {
    background-color: var(--clr-bg-btn-hover);
    color: var(--clr-text-btn-hover);
  }

  &:focus-visible {
    outline: 2px dotted var(--clr-text-accent);
    outline-offset: 2px;
  }
}
```
