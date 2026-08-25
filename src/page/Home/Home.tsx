import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { About } from '../../components/About/About';
import { Contact } from '../../components/Contact/Contact';
import { Experience } from '../../components/Experience/Experience';
import { Hero } from '../../components/Hero/Hero';
import { Meta } from '../../components/Meta/Meta';
import { Projects } from '../../components/Projects/Projects';
import { Skills } from '../../components/Skills/Skills';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';

export const Home = () => {
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;

  const isUkrainian = language.startsWith('uk');

  useEffect(() => {
    document.documentElement.lang = isUkrainian ? 'uk' : 'en';
  }, [isUkrainian]);

  const meta = isUkrainian
    ? {
        title:
          'Liubov Pohudina | Full Stack розробниця та AI Automation Engineer',

        description:
          'Портфоліо Liubov Pohudina — Full Stack розробниці та AI Automation Engineer. React, TypeScript, Node.js, n8n, AI Agents, веброзробка та автоматизація бізнес-процесів.',

        locale: 'uk_UA' as const,

        imageAlt:
          'Liubov Pohudina — Full Stack розробниця та AI Automation Engineer',
      }
    : {
        title:
          'Liubov Pohudina | Full Stack Developer & AI Automation Engineer',

        description:
          'Portfolio of Liubov Pohudina — Full Stack Developer and AI Automation Engineer building scalable web applications, AI automation systems and business solutions.',

        locale: 'en_US' as const,

        imageAlt:
          'Liubov Pohudina — Full Stack Developer & AI Automation Engineer',
      };

  return (
    <>
      <Meta
        title={meta.title}
        description={meta.description}
        locale={meta.locale}
        imageAlt={meta.imageAlt}
        url="https://YOUR-DOMAIN.com/"
        image="https://YOUR-DOMAIN.com/images/og/portfolio-og.webp"
      />

      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MainLayout>
    </>
  );
};
