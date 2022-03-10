export function ButtonFinish({ text, textContoh, button }) {
    return (
      <>
        <button>{text}</button>
        <button>{textContoh}</button>
        {button}
      </>
    );
  }