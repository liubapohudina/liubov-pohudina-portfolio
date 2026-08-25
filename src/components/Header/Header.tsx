import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/#about', label: t('nav.about') },
    { to: '/#skills', label: t('nav.skills') },
    { to: '/#projects', label: t('nav.projects') },
    { to: '/#experience', label: t('nav.experience') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-[1180px]">
        <div
          className="
            relative flex h-[72px] items-center justify-between
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))]
            px-5
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_40px_rgba(0,0,0,0.42)]
            backdrop-blur-2xl
            sm:px-7
            lg:px-8
          "
        >
          {/* glass glow */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(circle_at_16%_0%,rgba(205,245,92,0.07),transparent_30%),radial-gradient(circle_at_82%_100%,rgba(255,255,255,0.025),transparent_28%)]
            "
          />

          {/* LOGO */}
          <Link
            to="/#home"
            onClick={closeMenu}
            className="relative z-10 flex shrink-0 items-center gap-3"
          >
            <img
              src="/images/logo.webp"
              alt="Liubov Pohudina logo"
              className="
                h-10 w-10
                rounded-full
                object-cover
                shadow-[0_0_14px_rgba(201,244,79,0.18)]
              "
            />

            <span className="hidden text-[14px] font-medium tracking-[0.12em] text-white sm:inline">
              LIUBOV POHUDINA
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="
                  group relative py-6
                  text-[14px] font-normal text-white/70
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute bottom-[14px] left-1/2
                    h-[4px] w-[4px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#d4f66a]
                    opacity-0
                    shadow-[0_0_10px_#d4f66a]
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />

            <Link
              to="#contact"
              className="
                flex h-[48px]
                items-center justify-center gap-4
                rounded-full
                border border-[#ddff78]
                bg-gradient-to-r from-[#c7f44f] to-[#dcff6d]
                px-7
                text-[15px] font-medium text-[#0c1208]
                shadow-[0_0_18px_rgba(201,244,79,0.25)]
                transition-shadow duration-300
                hover:shadow-[0_0_12px_rgba(210,255,80,0.8),0_0_28px_rgba(201,244,79,0.55),0_0_50px_rgba(201,244,79,0.25)]
              "
            >
              {t('nav.connect')}

              <span className="text-[22px] leading-none">→</span>
            </Link>
          </div>

          {/* MOBILE RIGHT */}
          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="
                flex h-11 w-11
                flex-col items-center justify-center gap-[5px]
                rounded-full
                border border-white/15
                bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_22px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                transition-[border-color,box-shadow] duration-300
                hover:border-[#d4f66a]/30
                hover:shadow-[0_0_14px_rgba(212,246,106,0.1)]
              "
            >
              <span
                className={`
                  block h-[2px] w-[18px]
                  bg-white/90
                  transition-transform duration-300
                  ${isMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''}
                `}
              />

              <span
                className={`
                  block h-[2px] w-[18px]
                  bg-white/90
                  transition-transform duration-300
                  ${isMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}
                `}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300 ease-out
            lg:hidden
            ${
              isMenuOpen
                ? 'mt-3 max-h-[520px] translate-y-0 opacity-100'
                : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
            }
          `}
        >
          <div
            className="
              relative overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))]
              p-3
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.5)]
              backdrop-blur-2xl
            "
          >
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[radial-gradient(circle_at_15%_0%,rgba(201,244,79,0.06),transparent_32%)]
              "
            />

            <nav className="relative z-10 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    border border-white/[0.06]
                    bg-white/[0.035]
                    px-5 py-4
                    text-[15px] font-normal text-white/80
                    transition-[background-color,border-color,color] duration-250
                    hover:border-white/[0.1]
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {item.label}

                  <span className="text-[18px] leading-none text-[#d4f66a]">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              to="/#contact"
              onClick={closeMenu}
              className="
                relative z-10
                mt-3 flex h-[50px] w-full
                items-center justify-center gap-4
                rounded-full
                border border-[#ddff78]
                bg-gradient-to-r from-[#c7f44f] to-[#dcff6d]
                text-[15px] font-medium text-[#0c1208]
                shadow-[0_0_18px_rgba(201,244,79,0.25)]
                transition-shadow duration-300
                hover:shadow-[0_0_12px_rgba(210,255,80,0.8),0_0_28px_rgba(201,244,79,0.55)]
              "
            >
              {t('nav.connect')}

              <span className="text-[22px] leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
