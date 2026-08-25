import { useTranslation } from 'react-i18next';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  product?: string;
  description: string;
  highlights: string[];
  stack?: string[];
};

export const Experience = () => {
  const { t } = useTranslation();

  const experience: ExperienceItem[] = [
    {
      company: 'Boosta',
      role: 'Front End Developer',
      period: 'Oct 2024 — Aug 2026',
      description: t('experience.boosta.description'),
      highlights: [
        t('experience.boosta.highlights.performance'),
        t('experience.boosta.highlights.seo'),
        t('experience.boosta.highlights.indexing'),
        t('experience.boosta.highlights.environment'),
      ],
      stack: ['React', 'TypeScript', 'SEO', 'Cloudflare', 'Performance'],
    },
    {
      company: 'Revelint',
      role: 'Front End Developer',
      period: 'Jul 2024 — May 2025',
      product: 'EVA-I',
      description: t('experience.revelint.description'),
      highlights: [
        t('experience.revelint.highlights.landings'),
        t('experience.revelint.highlights.auth'),
        t('experience.revelint.highlights.seo'),
        t('experience.revelint.highlights.analytics'),
      ],
      stack: [
        'React',
        'Redux Toolkit',
        'JWT',
        'styled-components',
        'Google Analytics',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative z-10
        px-4 py-24
        sm:px-6
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* HEADING */}
        <div className="mx-auto max-w-[680px] text-center">
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d4f66a]/85
            "
          >
            {t('experience.eyebrow')}
          </p>

          <h2
            className="
              mt-3
              text-[36px]
              font-normal
              tracking-[-0.035em]
              text-white
              sm:text-[44px]
              lg:text-[50px]
            "
          >
            {t('experience.titleStart')}{' '}
            <span className="font-accent font-normal italic text-[#d4f66a]">
              {t('experience.titleAccent')}
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-[560px]
              text-[14px]
              font-normal
              leading-[1.8]
              text-white/50
              sm:text-[15px]
            "
          >
            {t('experience.description')}
          </p>
        </div>

        {/* EXPERIENCE MATRIX */}
        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[28px]
            border border-white/[0.08]
            bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.26)]
            backdrop-blur-2xl
          "
        >
          {/* subtle background light */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(circle_at_15%_0%,rgba(212,246,106,0.045),transparent_28%),radial-gradient(circle_at_85%_100%,rgba(212,246,106,0.025),transparent_26%)]
            "
          />

          {/* TABLE HEADER */}
          <div
            className="
              relative z-10
              hidden
              grid-cols-[0.75fr_0.9fr_2fr]
              border-b border-white/[0.06]
              px-7 py-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white/30
              md:grid
            "
          >
            <div>{t('experience.columns.period')}</div>
            <div>{t('experience.columns.role')}</div>
            <div>{t('experience.columns.impact')}</div>
          </div>

          {/* ROWS */}
          <div className="relative z-10">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className={`
                  group relative
                  grid
                  gap-8
                  px-6 py-8
                  transition-[background-color,box-shadow]
                  duration-300
                  md:grid-cols-[0.75fr_0.9fr_2fr]
                  md:gap-7
                  md:px-7
                  md:py-9
                  hover:bg-white/[0.018]
                  hover:shadow-[inset_0_0_40px_rgba(212,246,106,0.025)]

                  ${index !== 0 ? 'border-t border-white/[0.06]' : ''}
                `}
              >
                {/* SCAN LINE */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 top-0
                    h-px
                    scale-x-0
                    bg-gradient-to-r
                    from-transparent
                    via-[#d4f66a]/45
                    to-transparent
                    opacity-0
                    transition-all duration-500
                    group-hover:scale-x-100
                    group-hover:opacity-100
                  "
                />

                {/* LEFT / PERIOD + COMPANY */}
                <div className="relative">
                  <div
                    className="
                      flex items-center gap-2
                      text-[11px]
                      font-normal
                      uppercase
                      tracking-[0.12em]
                      text-[#d4f66a]/75
                    "
                  >
                    <span
                      className="
                        h-[6px] w-[6px]
                        rounded-full
                        bg-[#d4f66a]
                        shadow-[0_0_8px_rgba(212,246,106,0.8)]
                      "
                    />

                    {item.period}
                  </div>

                  <h3
                    className="
                      mt-4
                      text-[24px]
                      font-normal
                      tracking-[-0.025em]
                      text-white
                    "
                  >
                    {item.company}
                  </h3>

                  {item.product && (
                    <span
                      className="
                        mt-2 inline-flex
                        rounded-full
                        border border-white/[0.07]
                        bg-white/[0.035]
                        px-3 py-1
                        text-[10px]
                        font-normal
                        uppercase
                        tracking-[0.1em]
                        text-white/50
                      "
                    >
                      Product: {item.product}
                    </span>
                  )}
                </div>

                {/* CENTER / ROLE */}
                <div>
                  <span
                    className="
                      mb-2 block
                      text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-white/30
                      md:hidden
                    "
                  >
                    {t('experience.columns.role')}
                  </span>

                  <p
                    className="
                      text-[17px]
                      font-normal
                      leading-[1.45]
                      text-white/85
                    "
                  >
                    {item.role}
                  </p>

                  <p
                    className="
                      mt-4
                      text-[13px]
                      font-normal
                      leading-[1.75]
                      text-white/45
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* RIGHT / IMPACT */}
                <div>
                  <span
                    className="
                      mb-4 block
                      text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-white/30
                      md:hidden
                    "
                  >
                    {t('experience.columns.impact')}
                  </span>

                  <ul className="space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="
                          flex items-start gap-3
                          text-[13px]
                          font-normal
                          leading-[1.7]
                          text-white/60
                          sm:text-[14px]
                        "
                      >
                        <span
                          className="
                            mt-[9px]
                            h-[4px] w-[4px]
                            shrink-0
                            rounded-full
                            bg-[#d4f66a]/75
                            shadow-[0_0_7px_rgba(212,246,106,0.35)]
                          "
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* STACK */}
                  {item.stack && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.stack.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border border-white/[0.06]
                            bg-white/[0.035]
                            px-3 py-1.5
                            text-[10px]
                            font-normal
                            text-white/50
                            backdrop-blur-md
                            transition-[border-color,color]
                            duration-300
                            group-hover:border-[#d4f66a]/15
                            group-hover:text-white/65
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* ROW NUMBER */}
                <div
                  className="
                    pointer-events-none
                    absolute bottom-4 right-5
                    font-mono
                    text-[9px]
                    tracking-[0.16em]
                    text-white/[0.12]
                  "
                >
                  0{index + 1}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
