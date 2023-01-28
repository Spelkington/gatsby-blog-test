import React from 'react';

interface CounterButtonProps {
  sign: "+" | "-",
  updateCount: (n: number) => void
}

export const CounterButton = (props: CounterButtonProps) => {
  return (
    <button onClick={() =>
      props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)} >
      {props.sign}
    </button>
  );
}
