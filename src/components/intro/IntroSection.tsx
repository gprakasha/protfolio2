import avatar from '../../assets/avatar.png';

const IntroSectionContainer = styled(motion.section)`
    height: 100vh;
    display: flex;  
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    background-image: url(${avatar});
    background-size: 35%;
    background-repeat: no-repeat;
    background-position-y: 40%;
    background-position-x: 85%;

    @media (max-width: 768px) {
        background-image: none;
    }
`;

const IntroContent = styled(motion.div)`
    box-shadow: inset 5px 5px 10px var(--dark-secondary),
            inset -5px -5px 10px var(--light-secondary);
    border-radius: 10px;
    padding: 20px;
    margin-left: 4%;
    max-width: 45vw;
    margin-bottom: 10%;
    margin-right: auto;

    @media (max-width: 768px) {
        margin: auto auto 55% auto;
        max-width: unset;
        background-image: url(${avatar});
        height: 320px;
        background-size: 35%;
        background-repeat: no-repeat;
        background-position-x: 85%;
        background-position-y: 20%;
        margin-top: 10vh;
    }
`;

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: 0.1
        }
    },
    exit: {
        x: 500,
        opacity: 0
    }
}

const SlidingText = styled.h1`
    font-size: 36vh;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.1);
    animation: infiniteSlide 10s linear infinite;

    @keyframes infiniteSlide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`;

const SliderContainer = styled.div`
    overflow: hidden;
    position: absolute;
    z-index: -1;
    width: 100%;
    bottom: -100px;
`;

import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { styles } from '../../styles';
import Button from '../Button';
import { NAV_ITEM_ID } from '../../config';
import { init } from '@emailjs/browser';
import { useDevice } from '../../hooks/useDevice';

export default function IntroSection() {
    const { isMobile } = useDevice();

  return (
    <IntroSectionContainer
      id={NAV_ITEM_ID.INTRO}
      className={`relative ${styles.paddingX}`}
    >
      <IntroContent
        className="gap-y-6 flex flex-col"
        initial="initial"
        animate="animate"
      >
        <motion.h3
          variants={textVariants}
          className="text-primary-color text-xl md:m-0 mx-0 my-auto"
        >
          Who am i ?
        </motion.h3>
        <motion.h3
          variants={textVariants}
          className="text-primary-color text-xl"
        >
          I'm,
        </motion.h3>
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-6xl text-tertiary-color"
        >
          G Prakasha
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="lg:text-2xl md:text-xl text-md text-primary-color"
        >
          Web Developer | Building Intuitive, User-Centered Web Experiences
        </motion.p>
        <motion.div className="flex justify-between">
          <a href={`#${NAV_ITEM_ID.PROJECTS}`}>
            <Button
              buttonVariant="secondary"
              className="md:text-xl text-sm rounded"
              onClick={() => {}}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              See the latest Works
            </Button>
          </a>

          <a href={`#${NAV_ITEM_ID.CONTACT}`}>
            <Button
              buttonVariant="primary"
              className="md:text-2xl text-sm fixed rounded-full z-10 flex items-center gap-2"
              onClick={() => {}}
              style={{
                bottom: '15px',
                right: '15px',
              }}
              variants={{
                initial: {
                  position: 'fixed',
                },
              }}
            >
              {!isMobile && <span className="md:text-md">Let's Talk</span>}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </Button>
          </a>
        </motion.div>
      </IntroContent>
      <SliderContainer className="flex">
        <SlidingText>Frontend Developer</SlidingText>
        <SlidingText>Frontend Developer</SlidingText>
      </SliderContainer>
    </IntroSectionContainer>
  );
}
