# Frontend Mentor - Social links profile solution

This my solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshots

Mobile:

![](/assets/images/mobile-screenshot.jpeg)

Desktop:

![](/assets/images/desktop-screenshot.jpeg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/social-links-profile-ZhGqdauHJw)
- [Live site URL](https://social-links-profile-dionysialemonaki.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learnt

I was conflicted about whether the card image should be considered important content or not. Since the user's name appears directly below the image as a heading, using it as the alt text felt redundant.

Initially, I planned to leave the `alt` attribute empty, treating the image as decorative. However, I ultimately decided that the image is meaningful content and deserves a proper description. I tried to write an alt text that accurately conveys the image without being too verbose for screen readers.

```html
<img
  src="/assets/images/avatar-jessica.jpeg"
  alt="Headshot of a Black woman with an afro, wearing a black shirt, shown in profile, looking towards the camera with a neutral expression."
  width="88"
  height="88"
  class="card__image"
/>
```

I was also conflicted about which HTML element to use for the text `Front-end developer and avid reader.` The design included quotation marks, but since this seems like more of a self-description than an actual quotation, using the `blockquote` or `q` elements didn't feel semantically correct.

In the end, I chose the `p` element and added the quotes with pseudo-elements, thereby maintaining the separation of concerns between HTML (semantics) and CSS (presentation).

```css
.card__description::before,
.card__description::after {
  content: '"';
}
```

Lastly, in the design, the card has smaller padding on mobile, and the padding increases for larger screens (tablet and desktop).

At first, I considered using a `min-width` media query for this, but decided instead to use the `clamp()` function. This allows the padding to scale fluidly between a minimum and maximum value depending on the viewport width, without needing a separate media query for just one property.

```css
.card {
  padding: clamp(var(--space-300), 1.2143rem + 1.4286vw, var(--space-500));
}
```
