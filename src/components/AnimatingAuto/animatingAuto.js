import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './animatingAuto.css';

const AnimatingAuto = ({ target }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: target },
    config: { duration: 2000 },
  });

  return (
    <animated.div>
      {props.number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

export default AnimatingAuto;
