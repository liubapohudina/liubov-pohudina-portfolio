import { useTranslation } from 'react-i18next';

import {
  AnalyticsIcon,
  AutomationIcon,
  BackendIcon,
  CloudflareIcon,
  DevOpsIcon,
  FrontendIcon,
  MongoIcon,
  N8nIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  SwaggerIcon,
  TypeScriptIcon,
} from '../icons/icons';

type SkillCard = {
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
};

type TechItem = {
  label: string;
  icon: React.ReactNode;
};

const skillCards: SkillCard[] = [
  {
    titleKey: 'skills.frontend.title',
    descriptionKey: 'skills.frontend.description',
    icon: <FrontendIcon size={40} />,
  },
  {
    titleKey: 'skills.backend.title',
    descriptionKey: 'skills.backend.description',
    icon: <BackendIcon size={40} />,
  },
  {
    titleKey: 'skills.automation.title',
    descriptionKey: 'skills.automation.description',
    icon: <AutomationIcon size={40} />,
  },
  {
    titleKey: 'skills.aiAgents.title',
    descriptionKey: 'skills.aiAgents.description',
    icon: <AutomationIcon size={40} />,
  },
  {
    titleKey: 'skills.integrations.title',
    descriptionKey: 'skills.integrations.description',
    icon: <DevOpsIcon size={40} />,
  },
  {
    titleKey: 'skills.devops.title',
    descriptionKey: 'skills.devops.description',
    icon: <DevOpsIcon size={40} />,
  },
];

const technologies: TechItem[] = [
  {
    label: 'TypeScript',
    icon: <TypeScriptIcon size={32} className="text-[#4fa8ff]" />,
  },
  {
    label: 'React',
    icon: <ReactIcon size={32} className="text-[#61dafb]" />,
  },
  {
    label: 'Next.js',
    icon: <NextIcon size={32} className="text-white" />,
  },
  {
    label: 'Node.js',
    icon: <NodeIcon size={32} className="text-[#a8e063]" />,
  },
  {
    label: 'MongoDB',
    icon: <MongoIcon size={32} className="text-[#7bbf43]" />,
  },
  {
    label: 'n8n',
    icon: <N8nIcon size={32} className="text-[#d4f66a]" />,
  },
  {
    label: 'Google Gemini',
    icon: <AutomationIcon size={32} className="text-[#8ab4f8]" />,
  },
  {
    label: 'Zoho CRM',
    icon: <BackendIcon size={32} className="text-[#e65f5c]" />,
  },
  {
    label: 'Klaviyo',
    icon: <AutomationIcon size={32} className="text-[#f4f4f4]" />,
  },
  {
    label: 'Telegram',
    icon: <CloudflareIcon size={32} className="text-[#2AABEE]" />,
  },
  {
    label: 'Google Sheets',
    icon: <AnalyticsIcon size={32} className="text-[#34A853]" />,
  },
  {
    label: 'Wix',
    icon: <FrontendIcon size={32} className="text-white" />,
  },
  {
    label: 'Swagger',
    icon: <SwaggerIcon size={32} className="text-[#8acb54]" />,
  },
  {
    label: 'Cloudflare',
    icon: <CloudflareIcon size={32} className="text-[#f59d26]" />,
  },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative z-10 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        {/* HEADING */}
        <div className="text-center">
          <p
            className="
              text-[11px] font-medium
              uppercase tracking-[0.2em]
              text-[#d4f66a]/85
            "
          >
            {t('skills.eyebrow')}
          </p>

          <h2
            className="
              mt-3
              text-[34px] font-normal
              tracking-[-0.03em]
              text-white
              sm:text-[42px]
              lg:text-[48px]
            "
          >
            {t('skills.titleStart')}{' '}
            <span className="font-accent font-normal italic text-[#d4f66a]">
              {t('skills.titleAccent')}
            </span>
          </h2>
        </div>

        {/* SKILL CARDS */}
        <div
          className="
    mx-auto mt-12 grid
    max-w-full
    grid-cols-1 gap-5
    sm:grid-cols-2
    lg:grid-cols-3
  "
        >
          {skillCards.map((skill) => (
            <article
              key={skill.titleKey}
              className="
                group relative
                overflow-hidden
                rounded-[22px]
                border border-white/10
                bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))]
                px-5 py-7
                text-center
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_35px_rgba(0,0,0,0.28)]
                backdrop-blur-xl
                transition-[border-color,box-shadow] duration-300
                hover:border-[#d4f66a]/25
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_24px_rgba(212,246,106,0.08),0_18px_40px_rgba(0,0,0,0.32)]
              "
            >
              <div
                className="
                  mx-auto flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  border border-[#d4f66a]/15
                  bg-[#d4f66a]/[0.035]
                  text-[#d4f66a]
                  shadow-[0_0_18px_rgba(212,246,106,0.07)]
                "
              >
                {skill.icon}
              </div>

              <h3 className="mt-5 text-[17px] font-medium text-white">
                {t(skill.titleKey)}
              </h3>

              <p
                className="
                  mx-auto mt-3
                  max-w-[180px]
                  text-[13px] font-normal
                  leading-[1.75]
                  text-white/55
                "
              >
                {t(skill.descriptionKey)}
              </p>
            </article>
          ))}
        </div>

        {/* TECHNOLOGIES */}
        <div
          className="
            mt-5
            rounded-[22px]
            border border-white/10
            bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))]
            p-3
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_36px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >
          <div
            className="
    grid grid-cols-2 gap-3
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-7
  "
          >
            {technologies.map((technology) => (
              <div
                key={technology.label}
                className="
                  group
                  flex min-h-[92px]
                  flex-col items-center justify-center
                  rounded-[16px]
                  border border-white/[0.07]
                  bg-white/[0.025]
                  px-3 py-4
                  transition-[background-color,border-color,box-shadow]
                  duration-300
                  hover:border-[#d4f66a]/20
                  hover:bg-white/[0.04]
                  hover:shadow-[0_0_20px_rgba(212,246,106,0.05)]
                "
              >
                <div className="flex h-9 items-center justify-center">
                  {technology.icon}
                </div>

                <span className="mt-3 text-[12px] font-normal text-white/70">
                  {technology.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
