import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ArrowIcon } from '../../components/icons/icons';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden
        px-4 py-24
        sm:px-6
      "
    >
      {/* AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[420px] w-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#8ebd2e]/[0.08]
          blur-[130px]
          sm:h-[600px] sm:w-[600px]
        "
      />

      {/* LARGE BACKGROUND 404 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-[58%]
          select-none
          whitespace-nowrap
          text-[160px]
          font-normal
          leading-none
          tracking-[-0.09em]
          text-white/[0.018]
          sm:text-[260px]
          lg:text-[380px]
        "
      >
        404
      </div>

      <div
        className="
          relative z-10
          mx-auto
          flex max-w-[760px]
          flex-col items-center
          text-center
        "
      >
        {/* BADGE */}
        <div
          className="
            relative inline-flex
            items-center gap-2.5
            overflow-hidden
            rounded-full
            border border-white/[0.09]
            bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]
            px-4 py-2
            text-[10px]
            font-normal
            uppercase
            tracking-[0.16em]
            text-[#d4f66a]/85
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-[6px] w-[6px]
              rounded-full
              bg-[#d4f66a]
              shadow-[0_0_10px_rgba(212,246,106,0.85)]
            "
          />

          {t('notFound.badge')}
        </div>

        {/* CODE */}
        <div
          className="
            mt-8
            font-accent
            text-[82px]
            font-normal italic
            leading-[0.9]
            tracking-[-0.05em]
            text-[#d4f66a]
            drop-shadow-[0_0_25px_rgba(212,246,106,0.12)]
            sm:text-[110px]
          "
        >
          404
        </div>

        {/* TITLE */}
        <h1
          className="
            mt-5
            text-[34px]
            font-normal
            leading-[1.08]
            tracking-[-0.04em]
            text-white
            sm:text-[44px]
            lg:text-[52px]
          "
        >
          {t('notFound.titleStart')}{' '}
          <span className="font-accent font-normal italic text-[#d4f66a]">
            {t('notFound.titleAccent')}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto mt-6
            max-w-[540px]
            text-[14px]
            font-normal
            leading-[1.8]
            text-white/45
            sm:text-[15px]
          "
        >
          {t('notFound.description')}
        </p>

        {/* ACTIONS */}
        <div
          className="
            mt-8
            flex flex-col
            items-center justify-center
            gap-3
            sm:flex-row
          "
        >
          <Link
            to="/"
            className="
              group inline-flex h-[50px]
              min-w-[180px]
              items-center justify-center
              gap-4
              rounded-full
              border border-[#ddff78]
              bg-gradient-to-r
              from-[#c7f44f]
              to-[#e5ff80]
              px-7
              text-[13px]
              font-medium
              text-[#10140c]
              shadow-[0_0_18px_rgba(201,244,79,0.22)]
              transition-shadow duration-300
              hover:shadow-[0_0_14px_rgba(210,255,80,0.7),0_0_35px_rgba(201,244,79,0.35)]
            "
          >
            {t('notFound.home')}

            <ArrowIcon
              size={17}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <Link
            to="/#projects"
            className="
              relative inline-flex h-[50px]
              min-w-[180px]
              items-center justify-center
              overflow-hidden
              rounded-full
              border border-white/[0.1]
              bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]
              px-7
              text-[13px]
              font-normal
              text-white/70
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              backdrop-blur-xl
              transition-[border-color,color,box-shadow]
              duration-300
              hover:border-[#d4f66a]/30
              hover:text-white
              hover:shadow-[0_0_20px_rgba(212,246,106,0.08)]
            "
          >
            {t('notFound.projects')}
          </Link>
        </div>

        {/* DECORATIVE SYSTEM LINE */}
        <div
          className="
            mt-12
            flex items-center
            gap-3
            text-[9px]
            font-normal
            uppercase
            tracking-[0.18em]
            text-white/20
          "
        >
          <span className="h-px w-8 bg-white/10" />
          ERROR / ROUTE_NOT_FOUND
          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </main>
  );
};
