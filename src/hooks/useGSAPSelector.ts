import { useRef } from 'react';
import { gsap } from 'gsap';

export default function useGSAPSelector() {
  const el = useRef() as React.MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);

  return { el, q };
}