import Head from 'next/head';
import { FC } from 'react';
import { misiorWeb } from '@/misior';
import Layout from '@/layout';
import Section from '@/components/ui/Section';
import useTranslation from '@/sdk/hooks/useTranslation';
import Caption from '@/components/ui/Caption';
import InnerContainer from '@/components/ui/shared/InnerContainer';
import Container from '@/components/ui/shared/Container';
import CreateAccountForm from '@/components/CreateAccountForm';

export const CreateAccountPage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${misiorWeb.otName} | Create Account`}</title>
      </Head>
      <Layout>
        <Section title={t(`account/create`)} padding="normal">
          <Caption title="Create New Account">
            <Container gap={10}>
              <InnerContainer>
                <CreateAccountForm />
              </InnerContainer>
            </Container>
          </Caption>
        </Section>
      </Layout>
    </>
  );
};

export default CreateAccountPage;
