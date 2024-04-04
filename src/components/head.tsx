import React from "react";

type HeadProps = {
  title: string;
  description: string;
};

const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Babylonica&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Sassy+Frass&display=swap"
        rel="stylesheet"
      ></link>
    </head>
  );
};

export { Head };
