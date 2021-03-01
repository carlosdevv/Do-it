import React, { useCallback, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import { FiArrowRight, FiSmartphone, FiUser, FiMail, FiLock, FiSlash } from 'react-icons/fi';
import {
  Container,
  Content,
  SectionContainer,
  LoginButton,
  FirstSection,
  SecondSection,
  InfoSection,
  Form,
  LineDivider,
  InfoContent
} from '../styles/pages/Login';
import RabitLogo from '../assets/logo-rabit.jpg';
import InputContainer from '../components/Input';

const LoginPage: React.FC = () => {

  return (
    <>
      <Container>
        <Head>
          <title>Rabit - Habit Tracker</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        </Head>

        <Content>
          <SectionContainer>
            <FirstSection>
              <img src={RabitLogo} alt="Logo" />

              <h1>Rabit - Habit Tracker</h1>
              <p>Todo sucesso começa de uma pequena mudança,
              que com consistência tem um poder de transformação gigante.
            </p>

              <InfoSection>
                <div>
                  <Link href="https://apps.apple.com/br/app/rabit-hábitos-à-risca/id1512605216">
                    <FiSmartphone size={42} />
                  </Link>
                  <div>
                    <span>Baixe<br /></span>
                    nosso app
                  </div>
                </div>
                <div>
                  <Link href="https://apps.apple.com/br/app/rabit-hábitos-à-risca/id1512605216">
                    <FiSmartphone size={42} />
                  </Link>
                  <div>
                    <span>Baixe<br /></span>
                    nosso app
                  </div>
                </div>
              </InfoSection>
            </FirstSection>

            <SecondSection>
              <strong>Bem-vindo</strong>
              <p>A sua jornada começa agora!</p>

              <Form>
                <InputContainer icon={FiMail} placeholder="Digite seu nome" />
                <InputContainer icon={FiMail} placeholder="E-mail" />

                <LoginButton>
                  <Link href="/home">
                    <button type="button">
                      Começar
                    </button>
                  </Link>
                </LoginButton>
              </Form>

              <LineDivider />

              <InfoContent>
                <div className="first-child">
                  <FiLock size={24} />
                  <span>Suas informações<br />estão seguras.</span>
                </div>

                <div className="second-child">
                  <FiSlash size={24} />
                  <span>Suas informações<br />estão seguras.</span>
                </div>
              </InfoContent>
            </SecondSection>




          </SectionContainer>
        </Content>
      </Container>
    </>
  );
}

export default LoginPage;
