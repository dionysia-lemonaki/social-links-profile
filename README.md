# Frontend Mentor – Social Links Profile

A responsive social links profile card built with React, TypeScript, and Tailwind CSS - focused on typed data modeling, semantic HTML, and accessible interactive states.

## 🔗 Links

- Live site: [View live](https://social-links-profile-dionysialemonaki.vercel.app/)

## ✅ Acceptance Criteria

Users should be able to:

- See hover and focus states for all interactive elements on the page
- Navigate the links using only their keyboard
- View the optimal layout depending on their device's screen size

## 📸 Screenshots

Mobile:

![](/src//assets/images/screenshots/mobile-screenshot.jpeg)

Desktop:

![](/src/assets/images/screenshots/desktop-screenshot.jpeg)

## 🏗️ Built With

- React 19
- TypeScript
- Tailwind CSS v4
- Vite
- Semantic HTML

## 🎨 What I Focused On

### TypeScript Architecture

Before touching JSX, I mapped out the shape of the data and typed it. `Link` and `Person` live in `types.ts`, separate from any component:

```ts
export interface Link {
  label: string;
  url: string;
}

export interface Person {
  avatar: string;
  name: string;
  location: string;
  bio: string;
  links: Link[];
}
```

### Typed Data

The data file, `data.ts`, is explicitly typed as `Person`, so TypeScript validates every field, including every object inside `links`, at write time:

```ts
import type { Person } from "./types";
import avatarJessica from "./assets/images/avatar-jessica.jpeg";

const profileData: Person = {
  avatar: avatarJessica,
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: "Front-end developer and avid reader.",
  links: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/feed/" },
    { label: "Twitter", url: "https://x.com/home" },
    { label: "Instagram", url: "https://www.instagram.com/" },
  ],
};

export default profileData;
```

### Semantic List Structure for a Collection of Links & Accessible Interactive States

The five social links are a _list_ of related items, so they're marked up as one. `ProfileLink` owns the `<li>`, which keeps `ProfileCard` free to only wrap a `.map()` in a `<ul>`.

Each link opens in a new tab with `target="_blank"` and a visually hidden `sr-only` `<span>` informs screen reader users that the link opens in a new tab, so there are no surprises.

Focus styles are applied to every link using Tailwind's `focus-visible` variants, so keyboard users get a clear visual indicator:

```tsx
import type { Link } from "../types";

interface ProfileLinkProps {
  link: Link;
}

const ProfileLink = ({ link }: ProfileLinkProps) => {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        className="block bg-grey-700 p-3 rounded-lg text-white text-sm font-bold leading-normal hover:bg-green hover:text-grey-700 focus-visible:outline-2 focus-visible:outline-green focus-visible:outline-dotted focus-visible:outline-offset-4"
      >
        {link.label}
        <span className="sr-only">(Opens in a new tab)</span>
      </a>
    </li>
  );
};

export default ProfileLink;
```

### Composing the Card from Typed Props

```tsx
import type { Person } from "../types";
import ProfileLink from "./ProfileLink";

interface ProfileCardProps {
  person: Person;
}

const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <div className="bg-grey-800 max-w-[24rem] w-full rounded-xl p-6 md:p-10 flex flex-col gap-6 text-center">
      <img
        src={person.avatar}
        alt=""
        width="88"
        height="88"
        className="mx-auto rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold leading-normal text-white">
          {person.name}
        </h1>
        <p className="text-sm font-bold leading-normal text-green">
          {person.location}
        </p>
      </div>
      <p className="text-sm font-normal leading-normal text-white before:content-(--content) after:content-(--content)">
        {person.bio}
      </p>
      <ul className="flex flex-col gap-4">
        {person.links.map((link) => (
          <ProfileLink key={link.url} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
```

`ProfileCardProps` takes the whole `Person` object as a single `profile`/`person` prop rather than five separate destructured fields.

The `key` for each link is `link.url`, not `link.label` or an array index - URLs are guaranteed to be unique across the dataset and stable across re-renders.

The decorative quote marks around the bio are added via CSS `content`, not literal characters in the data:

```css
:root {
  --content: '"';
}
```

```tsx
className = "... before:content-(--content) after:content-(--content)";
```

Pseudo-element content like this is invisible to screen readers by default, so it's a purely visual flourish that doesn't clutter what gets announced.

### Theming via Tailwind v4's `@theme`

Colors and the font family are registered once as design tokens:

```css
@import "tailwindcss";

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("/src/assets/fonts/Inter-VariableFont.woff2") format("woff2");
}

@theme {
  --font-inter: Inter, sans-serif;
  --color-grey-700: hsl(0 0% 20%);
  --color-grey-800: hsl(0 0% 12%);
  --color-grey-900: hsl(0 0% 8%);
  --color-green: hsl(75 94% 57%);
}
```

This generates utility classes (`bg-grey-800`, `text-green`, `font-inter`) directly from the design system's actual values.

## Credits

Design from [Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ)
