import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);
  let inputRef = useRef(0);
//   let ref = 1;

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    // alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <>
    <input ref={inputRef} />
    <button onClick={handleClick}>
      Click me!
    </button>
    </>
  );
}