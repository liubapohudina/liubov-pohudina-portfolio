import { useTranslation } from 'react-i18next';

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TelegramIcon,
} from '../icons/icons';
import { Link } from 'react-router-dom';

const socialLinkClass = `
  flex h-9 w-9
  items-center justify-center
  rounded-full
  text-white/45
  transition-[color,filter,background-color] duration-300
  hover:bg-white/[0.035]
  hover:text-[#d4f66a]
  hover:drop-shadow-[0_0_8px_rgba(212,246,106,0.45)]
`;

export const Footer = () => {
  const { t } = useTranslation();

  const navItems = [
    { to: '/#about', label: t('nav.about') },
    { to: '/#skills', label: t('nav.skills') },
    { to: '/#projects', label: t('nav.projects') },
    { to: '/#experience', label: t('nav.experience') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  return (
    <footer
      className="
        relative z-10
        border-t border-white/[0.06]
        px-4 pb-6 pt-6
        sm:px-6
      "
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border border-white/[0.07]
            bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]
            px-5 py-5
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_40px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
            sm:px-7
          "
        >
          {/* subtle glow */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(circle_at_12%_0%,rgba(212,246,106,0.04),transparent_30%),radial-gradient(circle_at_85%_100%,rgba(255,255,255,0.02),transparent_28%)]
            "
          />

          <div
            className="
              relative z-10
              flex flex-col
              items-center
              justify-between
              gap-6
              lg:flex-row
            "
          >
            {/* BRAND */}
            <Link
              to="/#home"
              className="
                flex items-center gap-3
                text-white
              "
            >
              <img
                src="/images/logo.webp"
                alt="Liubov Pohudina logo"
                className="
                  h-9 w-9
                  rounded-full
                  object-cover
                  shadow-[0_0_12px_rgba(212,246,106,0.16)]
                "
              />

              <span
                className="
                  text-[13px]
                  font-medium
                  tracking-[0.11em]
                  text-white/85
                "
              >
                LIUBOV POHUDINA
              </span>
            </Link>

            {/* NAV */}
            <nav
              className="
                flex flex-wrap
                items-center
                justify-center
                gap-x-7 gap-y-3
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="
    text-[13px]
    font-normal
    text-white/45
    transition-colors duration-300
    hover:text-[#d4f66a]
  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* SOCIALS */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/liubapohudina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className={socialLinkClass}
              >
                <GithubIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/liubapohudina/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={socialLinkClass}
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href="https://t.me/LiubovPohudina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className={socialLinkClass}
              >
                <TelegramIcon size={20} />
              </a>

              <a
                href="mailto:drogaltseva92@gmail.com"
                aria-label="Email"
                title="Email"
                className={socialLinkClass}
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            className="
              relative z-10
              mt-5
              border-t border-white/[0.05]
              pt-4
              text-center
            "
          >
            <p
              className="
                text-[11px]
                font-normal
                text-white/25
              "
            >
              © 2026 Liubov Pohudina. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
