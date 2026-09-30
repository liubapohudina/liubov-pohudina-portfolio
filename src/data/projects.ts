import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 8,
    slug: 'ai-knowledge-base-rag-qdrant',

    title: 'AI Knowledge Base — RAG Architecture & Qdrant',

    category: {
      en: 'AI AUTOMATION',
      uk: 'AI-АВТОМАТИЗАЦІЯ',
    },

    description: {
      en: 'An AI knowledge base built around Retrieval-Augmented Generation (RAG), using Qdrant vector search to retrieve relevant context and generate grounded answers from indexed knowledge.',
      uk: 'AI-база знань на основі Retrieval-Augmented Generation (RAG), що використовує векторний пошук Qdrant для отримання релевантного контексту та формування відповідей на основі проіндексованих знань.',
    },

    technologies: [
      'RAG',
      'Qdrant',
      'Vector Database',
      'Embeddings',
      'Semantic Search',
      'LLM',
    ],

    image: {
      desktop: '/images/projects/ai-knowledge-base/preview.webp',
      mobile: '/images/projects/ai-knowledge-base/preview-mobile.webp',
      alt: {
        en: 'AI Knowledge Base with RAG architecture and Qdrant vector search',
        uk: 'AI-база знань з RAG-архітектурою та векторним пошуком Qdrant',
      },
    },

    details: {
      year: '2026',

      role: {
        en: 'AI Automation Engineer',
        uk: 'AI Automation Engineer',
      },

      type: {
        en: 'RAG Knowledge Base System',
        uk: 'RAG-система бази знань',
      },

      overview: {
        en: 'An AI knowledge system designed to retrieve relevant information from an indexed knowledge base before generating an answer. The architecture uses embeddings and Qdrant vector search to provide the language model with context that is relevant to each user query.',
        uk: 'AI-система знань, спроєктована так, щоб перед генерацією відповіді знаходити релевантну інформацію у проіндексованій базі знань. Архітектура використовує embeddings і векторний пошук Qdrant, щоб передавати мовній моделі контекст, релевантний до кожного запиту користувача.',
      },

      challenge: {
        en: 'A standalone language model does not reliably know private or domain-specific documents and may answer without the required source context. The system needed a retrieval layer that could search stored knowledge semantically before generation.',
        uk: 'Окрема мовна модель не має надійного доступу до приватних або вузькоспеціалізованих документів і може відповідати без необхідного контексту. Системі був потрібен retrieval-рівень, який виконує семантичний пошук у збережених знаннях перед генерацією відповіді.',
      },

      solution: {
        en: 'I designed a RAG pipeline that converts knowledge into embeddings, stores vector representations in Qdrant, retrieves the most relevant context for each question and passes that context to the LLM for grounded response generation.',
        uk: 'Я спроєктувала RAG-pipeline, який перетворює знання на embeddings, зберігає векторні представлення у Qdrant, знаходить найбільш релевантний контекст для кожного запиту та передає його LLM для генерації відповіді на основі знайдених даних.',
      },

      process: [
        {
          title: {
            en: 'Knowledge Ingestion',
            uk: 'Індексація знань',
          },
          description: {
            en: 'Prepared source knowledge for retrieval by structuring content into searchable chunks and vector representations.',
            uk: 'Підготувала джерела знань до пошуку, структурувавши контент у пошукові chunks та векторні представлення.',
          },
        },
        {
          title: {
            en: 'Vector Storage & Search',
            uk: 'Векторне зберігання та пошук',
          },
          description: {
            en: 'Used Qdrant as the vector database for semantic similarity search across the indexed knowledge base.',
            uk: 'Використала Qdrant як векторну базу даних для семантичного пошуку за схожістю у проіндексованій базі знань.',
          },
        },
        {
          title: {
            en: 'RAG Answer Generation',
            uk: 'Генерація відповідей через RAG',
          },
          description: {
            en: 'Retrieved relevant context for each user question and supplied it to the LLM so answers are based on the knowledge base rather than model memory alone.',
            uk: 'Для кожного запиту отримувала релевантний контекст і передавала його LLM, щоб відповіді базувалися на даних бази знань, а не лише на внутрішніх знаннях моделі.',
          },
        },
      ],

      results: [
        {
          value: 'RAG',
          label: {
            en: 'Grounded answer architecture',
            uk: 'Архітектура grounded-відповідей',
          },
        },
        {
          value: 'Qdrant',
          label: {
            en: 'Vector knowledge storage',
            uk: 'Векторне сховище знань',
          },
        },
        {
          value: 'Semantic',
          label: {
            en: 'Knowledge retrieval',
            uk: 'Пошук по базі знань',
          },
        },
      ],
    },

    links: {
      notion:
        'https://lunar-sting-548.notion.site/AI-Knowledge-Base-RAG-Architecture-Qdrant-3e5b2356930780379e72e11b89a9eba8',
    },

    featured: true,
  },

  {
    id: 9,
    slug: 'ai-sales-ecosystem',

    title: 'AI Sales Ecosystem — From First Contact to CEO Report',

    category: {
      en: 'AI AUTOMATION',
      uk: 'AI-АВТОМАТИЗАЦІЯ',
    },

    description: {
      en: 'A three-workflow AI sales automation ecosystem that qualifies inbound leads with a 24/7 BANT chatbot, analyzes sales dialogs and automatically delivers recurring CEO reports.',
      uk: 'Екосистема AI-автоматизації продажів із трьох взаємопов’язаних workflow: 24/7 BANT-чатбот кваліфікує вхідні ліди, система аналізує діалоги та автоматично формує регулярні звіти для CEO.',
    },

    technologies: [
      'n8n',
      'Claude',
      'Zoho CRM',
      'PostgreSQL',
      'Google Sheets',
      'Telegram Bot API',
      'AI Agents',
      'Prompt Engineering',
    ],

    image: {
      desktop: '/images/projects/ai-sales-ecosystem/preview.webp',
      mobile: '/images/projects/ai-sales-ecosystem/preview-mobile.webp',
      alt: {
        en: 'AI Sales Ecosystem automation workflows from lead qualification to CEO reporting',
        uk: 'AI Sales Ecosystem — автоматизація від кваліфікації ліда до звітності для CEO',
      },
    },

    details: {
      year: '2026',

      role: {
        en: 'AI Automation Engineer',
        uk: 'AI Automation Engineer',
      },

      type: {
        en: 'Multi-Workflow AI Sales Automation',
        uk: 'Багатопроцесна AI-автоматизація продажів',
      },

      overview: {
        en: 'A three-workflow automation system for a B2B sales team. It combines a 24/7 BANT qualification chatbot, daily dialog analysis and an automated weekly CEO report into one connected sales ecosystem.',
        uk: 'Система з трьох взаємопов’язаних workflow для B2B sales-команди. Вона об’єднує 24/7 BANT-кваліфікацію через AI-чатбот, щоденний аналіз діалогів та автоматичний щотижневий звіт для CEO в єдину sales-екосистему.',
      },

      challenge: {
        en: 'Inbound leads could wait hours for the first response, qualification required manual sales time, and weekly management reporting had to be prepared manually from scattered conversation and CRM data.',
        uk: 'Вхідні ліди могли чекати години на першу відповідь, кваліфікація забирала ручний час sales-команди, а щотижневу управлінську звітність потрібно було вручну готувати з розрізнених даних діалогів і CRM.',
      },

      solution: {
        en: 'I designed and built three connected n8n workflows end-to-end: a BANT chatbot that scores leads and creates them in Zoho CRM, a daily dialog analyzer that writes structured insights to Google Sheets, and a scheduled CEO report delivered automatically through Telegram. PostgreSQL provides persistent chat memory for the conversational flow.',
        uk: 'Я спроєктувала та побудувала end-to-end три пов’язані n8n-workflow: BANT-чатбот, який оцінює лідів і створює їх у Zoho CRM; щоденний аналізатор діалогів, який записує структуровані інсайти у Google Sheets; та запланований CEO-звіт, що автоматично надсилається через Telegram. PostgreSQL використовується для постійної пам’яті чат-діалогів.',
      },

      process: [
        {
          title: {
            en: '24/7 BANT Qualification',
            uk: '24/7 BANT-кваліфікація',
          },
          description: {
            en: 'Built an AI chatbot that runs a structured BANT dialog, scores inbound leads from 0–100 and automatically creates qualified lead records in Zoho CRM.',
            uk: 'Побудувала AI-чатбот, який проводить структурований BANT-діалог, оцінює вхідних лідів за шкалою 0–100 та автоматично створює записи кваліфікованих лідів у Zoho CRM.',
          },
        },
        {
          title: {
            en: 'Daily Dialog Analysis',
            uk: 'Щоденний аналіз діалогів',
          },
          description: {
            en: 'Automated daily analysis of sales conversations and delivery of structured team data to Google Sheets.',
            uk: 'Автоматизувала щоденний аналіз sales-діалогів і передачу структурованих даних для команди у Google Sheets.',
          },
        },
        {
          title: {
            en: 'Automated CEO Reporting',
            uk: 'Автоматична звітність для CEO',
          },
          description: {
            en: 'Created a scheduled workflow that compiles the weekly sales report and delivers it to the CEO in Telegram automatically.',
            uk: 'Створила scheduled workflow, який формує щотижневий sales-звіт і автоматично надсилає його CEO у Telegram.',
          },
        },
      ],

      results: [
        {
          value: '<5 sec',
          label: {
            en: 'First response time',
            uk: 'Час першої відповіді',
          },
        },
        {
          value: '3 min',
          label: {
            en: 'Lead qualification time',
            uk: 'Час кваліфікації ліда',
          },
        },
        {
          value: '0 min',
          label: {
            en: 'Weekly CEO report prep',
            uk: 'Підготовка щотижневого CEO-звіту',
          },
        },
      ],
    },

    links: {
      notion:
        'https://lunar-sting-548.notion.site/AI-Sales-Ecosystem-From-First-Contact-to-CEO-Report-3eab2356930780ae909cc758371070bd',
    },

    featured: true,
  },

  {
    id: 1,
    slug: 'ai-lead-qualification-automation',

    title: 'AI-Powered Lead Qualification & Marketing Automation',

    category: {
      en: 'AI AUTOMATION',
      uk: 'AI-АВТОМАТИЗАЦІЯ',
    },

    description: {
      en: 'An end-to-end lead automation system that captures website inquiries, qualifies leads with AI, syncs customer data with CRM and marketing tools, and automatically routes contacts based on purchase intent.',
      uk: 'Комплексна система автоматизації лідів, яка отримує заявки з вебсайту, кваліфікує їх за допомогою AI, синхронізує дані з CRM і маркетинговими сервісами та автоматично маршрутизує контакти за рівнем зацікавленості.',
    },

    technologies: [
      'n8n',
      'Google Gemini',
      'Wix',
      'Zoho CRM',
      'Klaviyo',
      'Google Sheets',
      'Telegram',
      'Webhooks',
      'REST API',
      'JavaScript',
      'JSON',
    ],

    image: {
      desktop: '/images/projects/ai-lead-automation/preview.webp',
      mobile: '/images/projects/ai-lead-automation/preview-mobile.webp',
      alt: {
        en: 'AI-powered lead qualification and marketing automation workflow',
        uk: 'AI-воркфлоу для кваліфікації лідів та маркетингової автоматизації',
      },
    },

    details: {
      year: '2026',

      role: {
        en: 'AI Automation Engineer',
        uk: 'AI Automation Engineer',
      },

      type: {
        en: 'AI Lead Automation System',
        uk: 'AI-система автоматизації лідів',
      },

      overview: {
        en: 'An automated lead-management system built with n8n that connects a beauty salon website with AI qualification, CRM, messaging, spreadsheets and marketing automation. Every website submission is processed, classified and distributed across multiple business systems automatically.',
        uk: 'Автоматизована система керування лідами на базі n8n, яка поєднує сайт салону краси з AI-кваліфікацією, CRM, месенджером, таблицями та маркетинговою автоматизацією. Кожна заявка з сайту автоматично обробляється, класифікується та передається у відповідні бізнес-системи.',
      },

      challenge: {
        en: 'Website leads had to be manually reviewed, copied into spreadsheets and CRM systems, categorized by intent and prepared for follow-up communication. This created repetitive work and increased the risk of delayed or missed inquiries.',
        uk: 'Заявки з сайту потрібно було вручну переглядати, переносити в таблиці та CRM, визначати рівень зацікавленості клієнта й готувати контакт до подальшої комунікації. Це створювало повторювану ручну роботу та ризик затримок або пропущених звернень.',
      },

      solution: {
        en: 'I built a multi-channel automation that receives Wix form submissions through a webhook, transforms the data, stores leads in Google Sheets, sends Telegram notifications, creates leads in Zoho CRM, analyzes intent with Google Gemini and routes Hot, Warm and Cold leads into corresponding Klaviyo lists.',
        uk: 'Я побудувала багатоканальну автоматизацію, яка отримує заявки з Wix через webhook, трансформує дані, зберігає ліди в Google Sheets, надсилає Telegram-сповіщення, створює ліди в Zoho CRM, аналізує намір клієнта через Google Gemini та розподіляє Hot, Warm і Cold ліди у відповідні списки Klaviyo.',
      },

      process: [
        {
          title: {
            en: 'Data Capture & Transformation',
            uk: 'Збір і трансформація даних',
          },
          description: {
            en: 'Received Wix form submissions through a webhook and transformed form fields into a normalized lead structure.',
            uk: 'Отримувала заявки з Wix через webhook і перетворювала поля форми у стандартизовану структуру ліда.',
          },
        },
        {
          title: {
            en: 'AI Lead Qualification',
            uk: 'AI-кваліфікація лідів',
          },
          description: {
            en: 'Used Google Gemini with structured output to classify leads as Hot, Warm or Cold based on customer intent.',
            uk: 'Використала Google Gemini зі структурованим output для класифікації лідів як Hot, Warm або Cold залежно від наміру клієнта.',
          },
        },
        {
          title: {
            en: 'Multi-Channel Orchestration',
            uk: 'Багатоканальна оркестрація',
          },
          description: {
            en: 'Connected Google Sheets, Telegram, Zoho CRM and Klaviyo into one automated workflow with routing and fallback logic.',
            uk: 'Об’єднала Google Sheets, Telegram, Zoho CRM і Klaviyo в єдиний автоматизований workflow з маршрутизацією та fallback-логікою.',
          },
        },
      ],

      results: [
        {
          value: '100%',
          label: {
            en: 'Automated lead routing',
            uk: 'Автоматична маршрутизація лідів',
          },
        },
        {
          value: '3',
          label: {
            en: 'AI qualification states',
            uk: 'Стани AI-кваліфікації',
          },
        },
        {
          value: '4+',
          label: {
            en: 'Connected business systems',
            uk: 'Підключені бізнес-системи',
          },
        },
      ],
    },

    links: {
      live: 'https://liuban8n.wixsite.com/my-site-2',
      notion:
        'https://lunar-sting-548.notion.site/AI-Powered-Lead-Qualification-Marketing-Automation-3cfb235693078069aed3d9dfd69da072',
    },

    featured: true,
  },
  {
    id: 2,
    slug: 'ai-audio-automation',

    title: 'AI Audio Processing & Automation System',

    category: {
      en: 'AI AUTOMATION',
      uk: 'AI-АВТОМАТИЗАЦІЯ',
    },

    description: {
      en: 'An end-to-end AI-powered system that automatically transcribes and analyzes customer calls, extracts structured insights, updates business statistics, and delivers results to a custom web interface.',
      uk: 'Комплексна AI-система, яка автоматично транскрибує та аналізує дзвінки клієнтів, формує структуровані інсайти, оновлює бізнес-статистику та передає результати у власний вебінтерфейс.',
    },

    technologies: [
      'React',
      'TypeScript',
      'Material UI',
      'n8n',
      'AI Agents',
      'OpenAI',
      'Webhooks',
      'Google Sheets',
    ],

    image: {
      desktop: '/images/projects/ai-audio/preview.webp',
      mobile: '/images/projects/ai-audio/preview-mobile.webp',
      alt: {
        en: 'AI Audio Processing and Automation System interface',
        uk: 'Інтерфейс системи AI-обробки та автоматизації аудіо',
      },
    },

    details: {
      year: '2026',

      role: {
        en: 'Full Stack Developer & AI Automation Engineer',
        uk: 'Full Stack Developer & AI Automation Engineer',
      },

      type: {
        en: 'AI Automation System',
        uk: 'AI-система автоматизації',
      },

      overview: {
        en: 'A fully automated AI-powered audio processing platform combining a custom React interface with autonomous n8n workflows. The website communicates with the automation layer through webhooks and displays structured results generated by the AI agent.',
        uk: 'Повністю автоматизована AI-платформа для обробки аудіо, що поєднує власний React-інтерфейс з автономними n8n-воркфлоу. Вебсайт взаємодіє з automation-рівнем через webhooks і відображає структуровані результати, сформовані AI-агентом.',
      },

      challenge: {
        en: 'Managers manually listened to customer calls, analyzed feedback and updated Google Sheets. The process required significant time, produced inconsistent results and could not scale as the number of calls increased.',
        uk: 'Менеджери вручну прослуховували дзвінки клієнтів, аналізували відгуки та оновлювали Google Sheets. Процес займав багато часу, давав нерівномірні результати та погано масштабувався зі збільшенням кількості дзвінків.',
      },

      solution: {
        en: 'I designed an automated pipeline that detects new audio files, sends them for transcription, analyzes the transcript with an AI agent, classifies feedback, extracts business insights, updates statistics and returns structured results to the website and internal tools.',
        uk: 'Я спроєктувала автоматизований pipeline, який знаходить нові аудіофайли, передає їх на транскрипцію, аналізує текст через AI-агента, класифікує feedback, формує бізнес-інсайти, оновлює статистику та повертає структуровані результати у вебсайт і внутрішні інструменти.',
      },

      process: [
        {
          title: {
            en: 'Prompt Design',
            uk: 'Prompt Design',
          },
          description: {
            en: 'Defined evaluation criteria, classification rules, metric extraction logic and a predictable JSON response format.',
            uk: 'Визначила критерії оцінювання, правила класифікації, логіку отримання метрик та передбачуваний JSON-формат відповіді.',
          },
        },
        {
          title: {
            en: 'API Integration',
            uk: 'API Integration',
          },
          description: {
            en: 'Connected transcription services, Google Sheets, website webhooks and custom JavaScript parsing.',
            uk: 'Підключила transcription API, Google Sheets, webhooks вебсайту та кастомний JavaScript parsing.',
          },
        },
        {
          title: {
            en: 'Workflow Architecture',
            uk: 'Workflow Architecture',
          },
          description: {
            en: 'Built autonomous n8n workflows with scheduled triggers, status checks, AI analysis, routing and statistics updates.',
            uk: 'Побудувала автономні n8n-воркфлоу з scheduled triggers, перевіркою статусів, AI-аналізом, routing та автоматичним оновленням статистики.',
          },
        },
      ],

      results: [
        {
          value: '100%',
          label: {
            en: 'Automated call review',
            uk: 'Автоматизація аналізу дзвінків',
          },
        },
        {
          value: '2 min',
          label: {
            en: 'Statistics update cycle',
            uk: 'Цикл оновлення статистики',
          },
        },
        {
          value: 'Seconds',
          label: {
            en: 'Result delivery',
            uk: 'Отримання результатів',
          },
        },
      ],
    },

    links: {
      loom: 'https://www.loom.com/share/7610f20575fe4cdc9bf8b9d39bca1fac',
    },

    featured: true,
  },

  {
    id: 3,
    slug: 'renovation-business',

    title: 'Renovation Business Website',

    category: {
      en: 'COMMERCIAL WEBSITE',
      uk: 'КОМЕРЦІЙНИЙ ВЕБСАЙТ',
    },

    description: {
      en: 'A full-cycle commercial website developed from scratch for a renovation business in Germany.',
      uk: 'Комерційний вебсайт, розроблений з нуля для ремонтного бізнесу в Німеччині.',
    },

    technologies: [
      'React',
      'TypeScript',
      'SEO',
      'GA4',
      'Cloudflare',
      'Web3Forms',
      'IONOS',
    ],

    image: {
      desktop: '/images/projects/renovation/preview.webp',
      mobile: '/images/projects/renovation/preview-mobile.webp',
      alt: {
        en: 'Renovation business website',
        uk: 'Вебсайт ремонтного бізнесу',
      },
    },

    details: {
      year: '2026',

      role: {
        en: 'Full Cycle Developer',
        uk: 'Full Cycle Developer',
      },

      type: {
        en: 'Commercial Website',
        uk: 'Комерційний вебсайт',
      },

      overview: {
        en: 'A complete commercial website designed and developed from scratch for a renovation business in Germany, covering UI development, analytics, SEO, legal compliance, infrastructure and deployment.',
        uk: 'Повноцінний комерційний вебсайт для ремонтного бізнесу в Німеччині, розроблений з нуля — від UI та адаптивної верстки до SEO, аналітики, юридичних вимог, інфраструктури й production deployment.',
      },

      challenge: {
        en: 'The business needed a professional digital presence capable of clearly presenting services, generating customer enquiries and supporting local search visibility.',
        uk: 'Бізнесу був потрібен професійний онлайн-ресурс для презентації послуг, отримання клієнтських заявок і покращення видимості у локальному пошуку.',
      },

      solution: {
        en: 'I handled the complete development lifecycle: responsive frontend implementation, contact flows, analytics, GDPR-compliant cookie management, legal pages, Cloudflare configuration, hosting and production deployment.',
        uk: 'Я реалізувала повний цикл розробки: адаптивний frontend, форми зв’язку, аналітику, GDPR-сумісне керування cookies, юридичні сторінки, Cloudflare, hosting і production deployment.',
      },

      results: [
        {
          value: '100%',
          label: {
            en: 'Full-cycle delivery',
            uk: 'Повний цикл розробки',
          },
        },
        {
          value: 'GDPR',
          label: {
            en: 'Compliant setup',
            uk: 'Сумісність',
          },
        },
        {
          value: 'SEO',
          label: {
            en: 'Optimized structure',
            uk: 'Оптимізована структура',
          },
        },
      ],
    },

    featured: true,
  },

  {
    id: 4,
    slug: 'taskpro',

    title: 'TaskPro',

    category: {
      en: 'FULL-STACK APPLICATION',
      uk: 'FULL-STACK ЗАСТОСУНОК',
    },

    description: {
      en: 'A full-stack task management platform developed by a 10-person team.',
      uk: 'Full-stack платформа для керування завданнями, розроблена командою з 10 розробників.',
    },

    technologies: [
      'React',
      'Redux',
      'Node.js',
      'MongoDB',
      'Cloudinary',
      'Swagger',
    ],

    image: {
      desktop: '/images/projects/taskpro/preview.webp',
      mobile: '/images/projects/taskpro/preview-mobile.webp',
      alt: {
        en: 'TaskPro task management application',
        uk: 'Застосунок TaskPro для керування завданнями',
      },
    },

    details: {
      year: '2024',

      role: {
        en: 'Full Stack Developer',
        uk: 'Full Stack Developer',
      },

      type: {
        en: 'Team Full-Stack Application',
        uk: 'Командний full-stack застосунок',
      },

      team: {
        en: '10 developers • 2-week sprint',
        uk: '10 розробників • 2-тижневий sprint',
      },

      overview: {
        en: 'A collaborative task management application with frontend and backend functionality built by a 10-person development team within a two-week sprint.',
        uk: 'Командний застосунок для керування завданнями з frontend і backend функціональністю, створений командою з 10 розробників протягом двотижневого спринту.',
      },

      solution: {
        en: 'On the frontend I implemented Header functionality and a modal flow for editing and submitting user data. On the backend I worked on Swagger API documentation.',
        uk: 'На frontend я реалізовувала Header та modal flow для редагування й надсилання даних користувача. На backend працювала над Swagger API documentation.',
      },
    },

    links: {
      swagger:
        'https://app.swaggerhub.com/apis/DROGALTSEVA92/Swagger-TaskPro/1.0.0',
    },

    featured: true,
  },

  {
    id: 5,
    slug: 'brushbuddy',

    title: 'BrushBuddy',

    category: {
      en: 'COMMERCIAL PROJECT',
      uk: 'КОМЕРЦІЙНИЙ ПРОЄКТ',
    },

    description: {
      en: 'My first commercial development project delivered by a multidisciplinary product team.',
      uk: 'Мій перший комерційний проєкт, реалізований мультидисциплінарною продуктовою командою.',
    },

    technologies: ['React', 'JavaScript', 'Responsive UI', 'REST API'],

    image: {
      desktop: '/images/projects/brushbuddy/preview.webp',
      mobile: '/images/projects/brushbuddy/preview-mobile.webp',
      alt: {
        en: 'BrushBuddy commercial website',
        uk: 'Комерційний вебсайт BrushBuddy',
      },
    },

    details: {
      year: '2024',

      role: {
        en: 'Frontend Developer',
        uk: 'Frontend Developer',
      },

      type: {
        en: 'Commercial Team Project',
        uk: 'Комерційний командний проєкт',
      },

      team: {
        en: '10 developers • 6 QA • Designer • PM • Team Lead',
        uk: '10 developers • 6 QA • Designer • PM • Team Lead',
      },

      overview: {
        en: 'My first commercial project, delivered within three weeks by a multidisciplinary team consisting of developers, QA engineers, design and project management.',
        uk: 'Мій перший комерційний проєкт, реалізований за три тижні мультидисциплінарною командою розробників, QA, дизайнера та менеджменту.',
      },

      solution: {
        en: 'I implemented the About section, custom manual pagination on the product page and shopping cart functionality.',
        uk: 'Я реалізувала секцію About, кастомну ручну пагінацію на сторінці товарів і функціональність shopping cart.',
      },
    },
  },

  {
    id: 6,
    slug: 'food-boutique',

    title: 'Food Boutique',

    category: {
      en: 'E-COMMERCE',
      uk: 'E-COMMERCE',
    },

    description: {
      en: 'A collaborative e-commerce project developed by a 10-person team during an intensive seven-day sprint.',
      uk: 'Командний e-commerce проєкт, розроблений командою з 10 розробників протягом інтенсивного семиденного спринту.',
    },

    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API', 'Responsive UI'],

    image: {
      desktop: '/images/projects/food-boutique/preview.webp',
      mobile: '/images/projects/food-boutique/preview-mobile.webp',
      alt: {
        en: 'Food Boutique e-commerce website',
        uk: 'E-commerce вебсайт Food Boutique',
      },
    },

    details: {
      year: '2023',

      role: {
        en: 'Frontend Developer',
        uk: 'Frontend Developer',
      },

      type: {
        en: 'Team E-commerce Project',
        uk: 'Командний e-commerce проєкт',
      },

      team: {
        en: '10 developers • 7-day sprint',
        uk: '10 розробників • 7-денний sprint',
      },

      overview: {
        en: 'An intensive team e-commerce project focused on product browsing, reusable interface logic and collaboration within a shared codebase.',
        uk: 'Інтенсивний командний e-commerce проєкт із фокусом на product browsing, перевикористовувану UI-логіку та роботу зі спільною кодовою базою.',
      },

      solution: {
        en: 'I developed the product listing functionality, reusable product card markup and custom pagination logic.',
        uk: 'Я розробляла функціональність списку товарів, reusable markup карток продуктів і кастомну логіку пагінації.',
      },
    },
  },
  {
    id: 7,
    slug: 'aquatrack',

    title: 'AquaTrack',

    category: {
      en: 'FULL-STACK TEAM PROJECT',
      uk: 'FULL-STACK КОМАНДНИЙ ПРОЄКТ',
    },

    description: {
      en: 'A team-based full-stack application focused on water tracking and personal hydration statistics. I contributed to both frontend and backend development, implementing the calendar and statistics interfaces on the frontend and creating Swagger API documentation for the backend.',
      uk: 'Командний full-stack застосунок для трекінгу води та персональної статистики гідратації. Я працювала як із frontend, так і з backend частиною: реалізовувала календар і статистику на frontend та створювала Swagger API documentation для backend.',
    },

    technologies: [
      'React',
      'Redux Toolkit',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'REST API',
      'Swagger',
    ],

    image: {
      desktop: '/images/projects/aquatrack/preview.webp',
      mobile: '/images/projects/aquatrack/preview-mobile.webp',
      alt: {
        en: 'AquaTrack water tracking application',
        uk: 'Застосунок AquaTrack для трекінгу води',
      },
    },

    details: {
      year: '2024',

      role: {
        en: 'Full Stack Developer',
        uk: 'Full Stack Developer',
      },

      type: {
        en: 'Team Full-Stack Application',
        uk: 'Командний full-stack застосунок',
      },

      overview: {
        en: 'AquaTrack is a team-developed water tracking application designed to help users monitor daily hydration, review historical data and analyze personal water consumption statistics through a clear and interactive interface.',
        uk: 'AquaTrack — командний застосунок для трекінгу води, який допомагає користувачам контролювати щоденне споживання, переглядати історію та аналізувати персональну статистику гідратації через зрозумілий інтерактивний інтерфейс.',
      },

      challenge: {
        en: 'The product required a user-friendly way to visualize hydration progress over time while keeping frontend state, historical data and backend API interactions consistent across the application.',
        uk: 'Продукту був потрібен зручний спосіб відображення прогресу гідратації в часі, при цьому frontend state, історичні дані та взаємодія з backend API мали залишатися узгодженими в усьому застосунку.',
      },

      solution: {
        en: 'I worked on the frontend calendar and statistics functionality, helping users navigate hydration history and understand their progress through visual data. On the backend side, I created and maintained Swagger API documentation to make the available endpoints clear and easier to use across the development team.',
        uk: 'На frontend я працювала над функціональністю календаря та статистики, щоб користувачі могли переглядати історію гідратації й аналізувати свій прогрес через візуальні дані. На backend я створювала та підтримувала Swagger API documentation, щоб endpoints були зрозумілими та зручними для використання командою.',
      },

      process: [
        {
          title: {
            en: 'Calendar Interface',
            uk: 'Calendar Interface',
          },
          description: {
            en: 'Implemented calendar-related frontend functionality for navigating and displaying hydration history.',
            uk: 'Реалізовувала frontend-функціональність календаря для навігації та відображення історії споживання води.',
          },
        },
        {
          title: {
            en: 'Statistics',
            uk: 'Statistics',
          },
          description: {
            en: 'Developed statistics-related UI and data presentation to help users understand hydration progress and trends.',
            uk: 'Розробляла UI та відображення статистичних даних, щоб користувачі могли бачити прогрес і тенденції гідратації.',
          },
        },
        {
          title: {
            en: 'API Documentation',
            uk: 'API Documentation',
          },
          description: {
            en: 'Created Swagger documentation for backend endpoints to improve API clarity and collaboration between frontend and backend developers.',
            uk: 'Створювала Swagger documentation для backend endpoints, щоб покращити зрозумілість API та взаємодію між frontend і backend розробниками.',
          },
        },
      ],

      results: [
        {
          value: 'Full Stack',
          label: {
            en: 'Frontend + backend contribution',
            uk: 'Внесок у frontend і backend',
          },
        },
        {
          value: '2',
          label: {
            en: 'Key frontend modules',
            uk: 'Ключові frontend-модулі',
          },
        },
        {
          value: 'Swagger',
          label: {
            en: 'Backend API documentation',
            uk: 'Документація backend API',
          },
        },
      ],
    },

    links: {
      live: 'https://aqua-track-olive.vercel.app/',
      swagger:
        'https://app.swaggerhub.com/apis/DROGALTSEVA92/next-swagger_api_aqua_track/1.0',
    },

    featured: true,
  },
];
