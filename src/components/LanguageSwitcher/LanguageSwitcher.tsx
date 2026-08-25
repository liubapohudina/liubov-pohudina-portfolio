import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (language: 'en' | 'uk') => {
    await i18n.changeLanguage(language);
    localStorage.setItem('language', language);

    document.documentElement.lang = language;
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`rounded-full px-3 py-1.5 text-xs cursor-pointer transition ${
          i18n.language === 'en'
            ? 'bg-lime-300 text-black'
            : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('uk')}
        className={`rounded-full px-3 py-1.5 cursor-pointer text-xs transition ${
          i18n.language === 'uk'
            ? 'bg-lime-300 text-black'
            : 'text-white/60 hover:text-white'
        }`}
      >
        UA
      </button>
    </div>
  );
};
