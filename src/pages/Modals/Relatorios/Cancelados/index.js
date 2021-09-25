import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import RelatorioCancelados from '../../../Empresa/RelatorioCancelados/index';
const Background = styled.div`
  width: 100%;
  z-index: 100;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 900px;
  z-index: 100;
  height: 560px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  z-index: 100;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
`;

export const ModalRelatorioCanceled = ({ showModalCanceled, setShowModalCanceled }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalCanceled ? 1 : 0,
    transform: showModalCanceled ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalCanceled(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalCanceled) {
        setShowModalCanceled(false);
        console.log('I pressed');
      }
    },
    [setShowModalCanceled, showModalCanceled]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModalCanceled ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModalCanceled}>
              <RelatorioCancelados/>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModalCanceled(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};