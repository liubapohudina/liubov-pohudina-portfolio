import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  const facts = [
    {
      value: '4+',
      label: t('about.facts.experience'),
    },
    {
      value: '5+',
      label: t('about.facts.projects'),
    },
    {
      value: '2',
      label: t('about.facts.focus'),
    },
  ];

  return (
    <section
      id="about"
      className="
        relative z-10
        px-4 py-24
        sm:px-6
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* SECTION HEADING */}
        <div className="mb-12 text-center lg:mb-16">
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d4f66a]/85
            "
          >
            {t('about.eyebrow')}
          </p>

          <h2
            className="
              mt-3
              text-[34px]
              font-normal
              tracking-[-0.03em]
              text-white
              sm:text-[42px]
              lg:text-[48px]
            "
          >
            {t('about.titleStart')}{' '}
            <span className="font-accent font-normal italic text-[#d4f66a]">
              {t('about.titleAccent')}
            </span>
          </h2>
        </div>

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* PHOTO */}
          <div className="relative mx-auto w-full max-w-[480px]">
            {/* AMBIENT GLOW */}
            <div
              className="
                pointer-events-none
                absolute left-1/2 top-1/2
                h-[76%] w-[76%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[#244d2c]/10
                blur-[100px]
              "
            />

            {/* GLASS FRAME */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border border-white/[0.07]
                bg-white/[0.015]
                p-[10px]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_55px_rgba(0,0,0,0.16)]
                backdrop-blur-[5px]
              "
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src="/images/profile/profile.webp"
                  alt={t('about.photoAlt')}
                  className="
                    block
                    aspect-[4/5]
                    w-full
                    object-cover
                    object-top
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    z-10
                    bg-[#020a06]/15
                  "
                />

                {/* DARK GREEN TINT */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    z-10
                    bg-[linear-gradient(135deg,rgba(4,18,10,0.16),rgba(3,13,8,0.30))]
                  "
                />

                {/* BOTTOM FADE */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0
                    z-20
                    h-[42%]
                    bg-gradient-to-t
                    from-[#020705]/90
                    via-[#031009]/40
                    to-transparent
                  "
                />

                {/* INNER VIGNETTE */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    z-20
                    shadow-[inset_0_0_80px_rgba(0,0,0,0.30)]
                  "
                />

                {/* STATUS */}
                <div
                  className="
                    absolute bottom-4 left-4
                    z-30
                    flex items-center gap-2
                    rounded-full
                    border border-white/[0.09]
                    bg-black/20
                    px-3.5 py-2
                    text-[11px]
                    font-normal
                    text-white/65
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                    backdrop-blur-xl
                  "
                >
                  <span
                    className="
                      h-[7px] w-[7px]
                      rounded-full
                      bg-[#d4f66a]
                      shadow-[0_0_9px_rgba(212,246,106,0.8)]
                    "
                  />

                  {t('about.available')}
                </div>
              </div>
            </div>

            {/* HUD CORNER */}
            <div
              className="
                pointer-events-none
                absolute -right-5 top-8
                z-30
                hidden
                h-[90px] w-[90px]
                rounded-[22px]
                border border-[#d4f66a]/15
                bg-[#020a06]/25
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-[6px]
                md:block
              "
            >
              <div className="absolute inset-3 rounded-full border border-[#d4f66a]/20" />

              <div className="absolute inset-6 rounded-full border border-[#d4f66a]/15" />

              <div
                className="
                  absolute left-1/2 top-1/2
                  h-2 w-2
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  bg-[#d4f66a]
                  shadow-[0_0_12px_rgba(212,246,106,0.75)]
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative">
            <p
              className="
                text-[12px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[#d4f66a]
              "
            >
              {t('about.role')}
            </p>

            <h3
              className="
                mt-4
                max-w-[620px]
                text-[32px]
                font-normal
                leading-[1.14]
                tracking-[-0.03em]
                text-white
                sm:text-[38px]
                lg:text-[44px]
              "
            >
              {t('about.headlineStart')}{' '}
              <span className="font-accent italic text-[#d4f66a]">
                {t('about.headlineAccent')}
              </span>{' '}
              {t('about.headlineEnd')}
            </h3>

            <p
              className="
                mt-6
                max-w-[620px]
                text-[14px]
                font-normal
                leading-[1.9]
                text-white/55
                sm:text-[15px]
              "
            >
              {t('about.description')}
            </p>

            <p
              className="
                mt-4
                max-w-[620px]
                text-[14px]
                font-normal
                leading-[1.9]
                text-white/45
                sm:text-[15px]
              "
            >
              {t('about.descriptionSecond')}
            </p>

            {/* FACTS */}
            <div
              className="
                mt-8
                grid
                grid-cols-3
                overflow-hidden
                rounded-[22px]
                border border-white/10
                bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]
                backdrop-blur-xl
              "
            >
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`
                    px-4 py-5
                    text-center
                    ${index !== 0 ? 'border-l border-white/[0.07]' : ''}
                  `}
                >
                  <div
                    className="
                      text-[24px]
                      font-normal
                      text-[#d4f66a]
                      sm:text-[28px]
                    "
                  >
                    {fact.value}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      font-normal
                      uppercase
                      tracking-[0.12em]
                      text-white/40
                      sm:text-[11px]
                    "
                  >
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>

            {/* DETAIL LINE */}
            <div
              className="
                mt-6
                flex flex-wrap
                gap-x-6 gap-y-3
                text-[12px]
                font-normal
                text-white/45
              "
            >
              <span>React / TypeScript / Node.js</span>
              <span>n8n / AI Agents</span>
              <span>Poland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
