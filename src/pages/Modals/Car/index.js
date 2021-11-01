import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import CadastrarVeiculo from '../../Cliente/CadastrarVeiculo/index.js';
import EditarVeiculo from '../../Cliente/EditarVeiculo/index.js';
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
  width: 1000px;
  z-index: 100;
  height: 560px;
  display:flex;
  flex-direction: row;
  margin-left:200px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  width:50%;
  display: flex;
  z-index: 100;
  flex-direction: column;
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

export const ModalCar = ({ showModalCar, setShowModalCar }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalCar ? 1 : 0,
    transform: showModalCar ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalCar(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalCar) {
        setShowModalCar(false);
        console.log('I pressed');
      }
    },
    [setShowModalCar, showModalCar]
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
      {showModalCar ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModalCar}>
              <ModalContent>
                <CadastrarVeiculo/>
              </ModalContent>
              <EditarVeiculo/>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModalCar(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};