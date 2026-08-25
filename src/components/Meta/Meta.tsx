type MetaProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  locale?: string;
};

export const Meta = ({
  title,
  description,
  url = 'https://YOUR-DOMAIN.com/',
  image = 'https://YOUR-DOMAIN.com/images/og/portfolio-og.webp',
  imageAlt = title,
  type = 'website',
  locale = 'en_US',
}: MetaProps) => {
  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:site_name" content="Liubov Pohudina Portfolio" />

      <meta property="og:locale" content={locale} />

      {/* TWITTER / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
