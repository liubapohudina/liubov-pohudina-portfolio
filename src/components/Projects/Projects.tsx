import { useTranslation } from 'react-i18next';

import { projects } from '../../data/projects';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="
        relative z-10
        overflow-hidden
        px-4 py-24
        sm:px-6
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[620px] text-center">
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d4f66a]/85
            "
          >
            {t('projects.eyebrow')}
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
            {t('projects.titleStart')}{' '}
            <span
              className="
                font-accent
                font-normal italic
                text-[#d4f66a]
              "
            >
              {t('projects.titleAccent')}
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-[520px]
              text-[14px]
              font-normal
              leading-[1.8]
              text-white/50
            "
          >
            {t('projects.description')}
          </p>
        </div>

        {/* PROJECTS */}
        <div
          className="
            mt-20
            space-y-28
            md:mt-28
            md:space-y-36
            lg:space-y-44
          "
        >
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
