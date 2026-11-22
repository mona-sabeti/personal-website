type IconProps = {
  className?: string;
};

export function ArrowUpRightIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ArrowDownIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function CodeIcon({ className = "size-6" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function GitHubIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22c.56.1.77-.25.77-.55v-2.17c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.5-.29-5.14-1.25-5.14-5.58 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.44.11-2.99 0 0 .95-.31 3.11 1.16a10.8 10.8 0 0 1 5.67 0c2.16-1.47 3.1-1.16 3.1-1.16.62 1.55.23 2.7.11 2.99a4.36 4.36 0 0 1 1.17 3.03c0 4.34-2.64 5.29-5.15 5.57.4.35.76 1.04.76 2.1v3.16c0 .3.2.66.78.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5.34 7.34H1.67V22h3.67V7.34ZM3.5 2A2.13 2.13 0 1 0 3.5 6.26 2.13 2.13 0 0 0 3.5 2ZM22 13.58c0-4.42-2.36-6.48-5.51-6.48a5.34 5.34 0 0 0-4.85 2.67V7.34H7.97V22h3.67v-7.26c0-1.91.36-3.77 2.73-3.77 2.34 0 2.37 2.19 2.37 3.89V22H22v-8.42Z" />
    </svg>
  );
}
