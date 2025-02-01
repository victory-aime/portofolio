import { keyframes } from '@emotion/react';

const dots = keyframes`
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
`;

const textTypings = keyframes`
    0% { clip-path: inset(0 100% 0 0) }
    50%, 80% { clip-path: inset(0 0% 0 0) }
    100% { clip-path: inset(0 100% 0 0)}
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const fadeInMenu = keyframes`
      from {
          opacity: 0;
          transform: translateY(-20px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  `;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-10px);
        opacity: 0;
    }
`;

export { dots, textTypings, fadeIn, zoomIn, slideIn, slideOut, fadeInMenu };
