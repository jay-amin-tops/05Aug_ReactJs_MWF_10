import React, { useMemo, useState } from "react";

const FunctionalCompoUseMemo = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  const computeLetterCount = (word) => {
    console.log("computeLetterCount", word);
    let i = 0;
    while (i < 100000) i++;
    return word.length;
  };
//   const letterCount =useMemo(()=> computeLetterCount(word),[])
  const letterCount =useMemo(()=> computeLetterCount(word))
  return (
    <>
      <p>
        "{word}" has {letterCount} letters
      </p>
      {computeLetterCount(wordIndex)}
      <button
        onClick={() => {
          console.log("called btn click");
          // { if(wordIndex + 1 === words.length){0}else{1} }
          // { if(wordIndex + 1 === words.length){next=0}else{next=1} }
          {
            if (wordIndex + 1 === words.length) {
              setWordIndex(0);
            } else {
              setWordIndex(wordIndex + 1);
            }
          }
          // const next = wordIndex + 1 === words.length ? setWordIndex(0) : setWordIndex(wordIndex + 1);
          // setWordIndex(next);
        }}
      >
        Next word {wordIndex}
      </button>
    </>
  );
};

export default FunctionalCompoUseMemo;
