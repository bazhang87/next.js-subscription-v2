import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="GPTaaS is a leading AI-integrator in the Generative AI space."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="How we accelerate businesses with AI" overTitle="What can GPTaaS help you accomplish?">
            <p>
              With GPTaaS, you can easily integrate the power of GPT technology into your workflows and reap the benefits of improved customer experiences, increased efficiency and productivity, and informed decision making.{' '}
              <Link href="/contact">Are you ready to take your SaaS business to the next level?</Link> Contact us today to learn more about our services and how we can help you drive business growth with GPT.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="GPTaaS in a nutshell" overTitle="Who we are" reversed>
            <p>
              GPTaaS is a cutting-edge technology consulting team that brings the power of GPT models to SaaS businesses of all sizes. By integrating GPT technology into your workflows, GPTaaS can help your team automate time-consuming tasks, increase efficiency and productivity, and improve decision making.{' '}
              <strong>GPTaaS accelerates better business outcomes</strong>. We specialize in automating AI-powered workflows for teams of all sizes.
            </p>
            <ul>
              <li>GPTaaS automates workflows and improves efficiency.</li>
              <li>GPTaaS enhances customer experiences through hyper-personalization and process automation.</li>
              <li>GPTaaS provides data insights that drive informed decision making.</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}