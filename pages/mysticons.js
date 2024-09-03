import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member1 from '/public/assets/mysticons/aarne.jpg';
import member2 from '/public/assets/mysticons/karri.jpg';
import member3 from '/public/assets/mysticons/petteri.jpg';
import member4 from '/public/assets/mysticons/oskar.jpg';
import member5 from '/public/assets/mysticons/markus.jpg';
import member6 from '/public/assets/mysticons/Saad.jpg';
import member7 from '/public/assets/mysticons/Louis.jpg';
import team from '/public/assets/mysticons/mysticons-team.jpg';

import MysticonsLogo from '../svgs/logo-mysticons.svg';

const Mysticons = () => {
  const { t } = useTranslation('mysticons');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--mysticons margin-b">
        <div className="hero__container">
          <MysticonsLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Team</h4>
              <ul>
                <li>Aarne Salmi</li>
                <li>Karri Päivärinta</li>
                <li>Petteri Stjerna</li>
                <li>Oskar Sinkkilä</li>
                <li>Markus Pollari</li>
                <li>Saad</li>
                <li>Louis Doan</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>CSC Server as hosting environment</li>
                <li>MicroK8 Kubernetes</li>
                <li>Anchore CI/CD open source security tools</li>
                <li>Ansible & Helm for Kubernetes</li>
                <li>Wazuh as SIEM together with ELK-Stack(Elasticsearch, Logstash, and Kibana)</li>
                <li>GitLab</li>
                <li>Containerizations with Docker</li>
                <li>Squash test automation & Robot framework</li>
                <li>Kali Linux for penetration testing & Vulnerability assessments</li>
                <li>Palo Alto Prisma</li>
                <li>Shuffler.io SOAR. & siem to ticket implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-mysticons" />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team-1')}</p>
            <p>{t('p-team-2')}</p>
          </div>
        </div>
      </section>

      {/* <section className="content__section technologies">
        <div className="simple-grid">
          <div className="">
            <h2>{t('h2-technologies')}</h2>
            <p>{t('p-technologies')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section>

      <section className="content__section challenges">
        <div className="simple-grid">
          <div>
            <Image src={Img4} />
          </div>
          <div>
            <h2>{t('h2-challenges')}</h2>
            <p>{t('p-challenges-1')}</p>
            <p>{t('p-challenges-2')}</p>
            <p>{t('p-challenges-3')}</p>
          </div>
        </div>
      </section>

      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-learned')}</h2>
            <p>{t('p-learned')}</p>
          </div>
          <div></div>
        </div>
      </section> */}

      {/* mockups */}

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h2 className="h2-centered">{t('h2-introduction')}</h2>
        </div>

        {/* team members */}
        <div className="team-member__wrapper">
          {/* member1 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member1} />
            </div>
            <div>
              <h3>{t('h3-member1')}</h3>
              <h4>{t('h4-member1')}</h4>
              <p>{t('p-member1')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/aarnesalmi/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/karri-paivarinta/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member3} />
            </div>
            <div>
              <h3>{t('h3-member3')}</h3>
              <h4>{t('h4-member3')}</h4>
              <p>{t('p-member3')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/petteristjerna">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member4} />
            </div>
            <div>
              <h3>{t('h3-member4')}</h3>
              <h4>{t('h4-member4')}</h4>
              <p>{t('p-member4')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/oskar-sinkkil%C3%A4-745a65276/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member5} />
            </div>
            <div>
              <h3>{t('h3-member5')}</h3>
              <h4>{t('h4-member5')}</h4>
              <p>{t('p-member5')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/markuspollari/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member6 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member6} />
            </div>
            <div>
              <h3>{t('h3-member6')}</h3>
              <h4>{t('h4-member6')}</h4>
              <p>{t('p-member6')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/saadmalik17/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member7 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
              <Image src={member7} />
            </div>
            <div>
              <h3>{t('h3-member7')}</h3>
              <h4>{t('h4-member7')}</h4>
              <p>{t('p-member7')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/louis-doan/">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* social media  */}
      <section>
        <h2 className="h2-centered tweet-h2">{t('h2-twitter')}</h2>
        <div className="twitter-grid">
          <div>
            <Tweet tweetId="1666108361538936833"/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'mysticons']))
  }
});

export default Mysticons;
