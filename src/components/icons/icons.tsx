import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const GithubIcon = ({ size = 22, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.5S18 0 15 2.1a13.4 13.4 0 0 0-6 0C6 0 4.8.5 4.8.5A5.1 5.1 0 0 0 4.7 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18c-3.5 1.6-4-1.5-5.5-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 21, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 10v7" />
    <path d="M7 7h.01" />
    <path d="M11 17v-7" />
    <path d="M11 13.5a3 3 0 0 1 6 0V17" />
  </svg>
);

export const NotionIcon = ({ size = 21, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 17V7l8 10V7" />
  </svg>
);

export const TelegramIcon = ({ size = 22, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M21 4 9.5 14.5" />
    <path d="m21 4-7 16-4.5-5.5L3 11.5 21 4Z" />
    <path d="m9.5 14.5 4.5 2.8" />
  </svg>
);

export const MailIcon = ({ size = 22, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const DownloadIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3v13" />
    <path d="m7.5 11.5 4.5 4.5 4.5-4.5" />
    <path d="M5 20h14" />
  </svg>
);

export const ArrowIcon = ({ size = 18, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m14 7 5 5-5 5" />
  </svg>
);

export const FrontendIcon = ({ size = 40, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <ellipse cx="24" cy="24" rx="6" ry="21" strokeWidth="1.8" />
    <ellipse
      cx="24"
      cy="24"
      rx="6"
      ry="21"
      strokeWidth="1.8"
      transform="rotate(60 24 24)"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="6"
      ry="21"
      strokeWidth="1.8"
      transform="rotate(120 24 24)"
    />
    <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

export const BackendIcon = ({ size = 40, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M24 4 39 13v22L24 44 9 35V13L24 4Z" />
    <path d="M18 17h12M18 24h12M18 31h8" />
  </svg>
);

export const AutomationIcon = ({
  size = 40,
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="24" cy="24" r="6" />
    <circle cx="24" cy="24" r="16" />
    <path d="M24 8v6M24 34v6M8 24h6M34 24h6M12.7 12.7l4.2 4.2M31.1 31.1l4.2 4.2M35.3 12.7l-4.2 4.2M16.9 31.1l-4.2 4.2" />
  </svg>
);

export const DevOpsIcon = ({ size = 40, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M15 32H34a8 8 0 0 0 .7-16A12 12 0 0 0 12 19.5 6.5 6.5 0 0 0 15 32Z" />
    <path d="M20 37h8M24 33v8" />
  </svg>
);

export const SoftSkillsIcon = ({
  size = 40,
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="24" cy="15" r="6" />
    <path d="M12 37c1.8-7 6-10 12-10s10.2 3 12 10" />
    <path d="m31 9 2-2 2 2" />
  </svg>
);

export const TypeScriptIcon = ({
  size = 32,
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect
      x="1"
      y="1"
      width="30"
      height="30"
      rx="5"
      stroke="currentColor"
      opacity="0.35"
    />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fill="currentColor"
      fontSize="12"
      fontWeight="500"
    >
      TS
    </text>
  </svg>
);

export const ReactIcon = ({ size = 32, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <ellipse cx="24" cy="24" rx="6" ry="19" strokeWidth="1.6" />
    <ellipse
      cx="24"
      cy="24"
      rx="6"
      ry="19"
      strokeWidth="1.6"
      transform="rotate(60 24 24)"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="6"
      ry="19"
      strokeWidth="1.6"
      transform="rotate(120 24 24)"
    />
    <circle cx="24" cy="24" r="2.4" fill="currentColor" stroke="none" />
  </svg>
);

export const NextIcon = ({ size = 32, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="16" cy="16" r="14" stroke="currentColor" opacity="0.65" />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fill="currentColor"
      fontSize="14"
      fontWeight="500"
    >
      N
    </text>
  </svg>
);

export const NodeIcon = ({ size = 32, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M24 5 39 14v20L24 43 9 34V14L24 5Z" strokeWidth="1.7" />
    <path d="M17 17h14v14H17z" strokeWidth="1.5" />
    <path
      d="M20 21h8M20 25h8M20 29h5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const MongoIcon = ({ size = 32, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M24 5c7 7 9 14 6 22-2 5-5 9-6 16-1-7-4-11-6-16-3-8-1-15 6-22Z"
      fill="currentColor"
    />
    <path
      d="M24 12v25"
      stroke="#13220d"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const N8nIcon = ({ size = 32, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="10" cy="24" r="3" />
    <circle cx="24" cy="14" r="3" />
    <circle cx="24" cy="34" r="3" />
    <circle cx="38" cy="24" r="3" />
    <path d="M13 24h6M27 14l8 8M27 34l8-8" />
  </svg>
);

export const SwaggerIcon = ({ size = 32, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M15 16c-4 1-7 4-7 8s3 7 7 8M33 16c4 1 7 4 7 8s-3 7-7 8" />
    <path d="M18 13c2 2 4 3 6 3s4-1 6-3M18 35c2-2 4-3 6-3s4 1 6 3" />
    <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
  </svg>
);

export const CloudflareIcon = ({
  size = 32,
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M9 30h29M12 30c0-5 4-9 9-9 2 0 4 .6 5.5 1.7A8 8 0 0 1 42 26v4" />
  </svg>
);

export const AnalyticsIcon = ({
  size = 32,
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="9" y="29" width="6" height="10" rx="2" />
    <rect x="21" y="20" width="6" height="19" rx="2" />
    <rect x="33" y="10" width="6" height="29" rx="2" />
  </svg>
);
export const PhoneIcon = ({ size = 22, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z" />
  </svg>
);

export const LocationIcon = ({ size = 22, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
