import { useTranslation } from 'react-i18next';

import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NotionIcon,
  TelegramIcon,
} from '../icons/icons';

const socialLinkClass = `
  flex h-9 w-9
  items-center justify-center
  rounded-full
  text-white/55
  transition-[color,filter,background-color] duration-300
  hover:bg-white/[0.035]
  hover:text-[#d4f66a]
  hover:drop-shadow-[0_0_8px_rgba(212,246,106,0.55)]
`;

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* BADGE */}
        <div
          className="
            relative mb-6 inline-flex
            items-center justify-center
            overflow-hidden
            rounded-full
            border border-white/10
            bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]
            px-5 py-2
            text-[10px] font-normal
            uppercase tracking-[0.1em]
            text-[#d4f66a]/85
            shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_8px_24px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            before:pointer-events-none
            before:absolute
            before:inset-x-[12%]
            before:top-0
            before:h-px
            before:bg-gradient-to-r
            before:from-transparent
            before:via-white/20
            before:to-transparent
            sm:text-[12px]
            sm:tracking-[0.16em]
          "
        >
          <span className="relative z-10">{t('hero.badge')}</span>
        </div>

        {/* TITLE */}
        <h1
          className="
            mx-auto max-w-[820px]
            text-center
            text-[46px] font-normal
            leading-[1.04] tracking-[-0.045em]
            text-white
            sm:text-[58px]
            md:text-[68px]
            lg:text-[76px]
          "
        >
          {t('hero.titleStart')}{' '}
          <span
            className="
              font-accent
              text-[1.12em]
              font-normal italic
              tracking-[-0.025em]
              text-[#d4f66a]
            "
          >
            {t('hero.titleAccent')}
          </span>{' '}
          {t('hero.titleEnd')}
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto mt-7 max-w-[610px]
            text-center
            text-[14px] font-normal
            leading-[1.8]
            text-white/55
            md:text-[15px]
          "
        >
          {t('hero.description')}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="
              inline-flex h-[52px]
              items-center justify-center gap-4
              rounded-full
              border border-[#ddff78]
              bg-gradient-to-r from-[#c7f44f] to-[#e5ff80]
              px-8
              text-[14px] font-medium text-[#10140c]
              shadow-[0_0_18px_rgba(201,244,79,0.25)]
              transition-shadow duration-300
              hover:shadow-[0_0_14px_rgba(210,255,80,0.75),0_0_35px_rgba(201,244,79,0.4)]
            "
          >
            {t('hero.viewWork')}
            <ArrowIcon size={18} />
          </a>

          <a
            href="/cv/Liubov_Pohudina_CV.pdf"
            download
            className="
              relative inline-flex h-[52px]
              items-center justify-center gap-3
              overflow-hidden
              rounded-full
              border border-white/12
              bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]
              px-7
              text-[14px] font-medium text-white/80
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.32)]
              backdrop-blur-xl
              transition-[border-color,box-shadow,color] duration-300
              before:absolute
              before:inset-x-[14%]
              before:top-0
              before:h-px
              before:bg-gradient-to-r
              before:from-transparent
              before:via-white/20
              before:to-transparent
              hover:border-[#d4f66a]/35
              hover:text-white
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_18px_rgba(212,246,106,0.12),0_10px_28px_rgba(0,0,0,0.38)]
            "
          >
            <span className="relative z-10">{t('hero.downloadCv')}</span>

            <span className="relative z-10">
              <DownloadIcon />
            </span>
          </a>
        </div>

        {/* SOCIALS */}
        <div className="mt-7 flex items-center justify-center gap-4">
          <a
            href="https://github.com/liubapohudina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className={socialLinkClass}
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/liubapohudina/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className={socialLinkClass}
          >
            <LinkedinIcon />
          </a>

          <a
            href="https://lunar-sting-548.notion.site/AI-Automator-n8n-AI-Agents-044b2356930782d8b2da81468e96a772"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Notion"
            title="Notion"
            className={socialLinkClass}
          >
            <NotionIcon />
          </a>

          <a
            href="https://t.me/LiubovPohudina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            title="Telegram"
            className={socialLinkClass}
          >
            <TelegramIcon />
          </a>

          <a
            href="mailto:drogaltseva92@gmail.com"
            aria-label="Email"
            title="Email"
            className={socialLinkClass}
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
};
