import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/LifeFitness-favicon.webp" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap" rel="stylesheet" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
    title: 'LifeFitness',
    description: 'Shop top-rated Life Fitness treadmills, ellipticals, bikes and more cardio equipment. Choose from our new CX series or our premium commercial-grade Platinum Club Series line to complete your home gym. Buy direct from Life Fitness today!',
}

export default Meta;