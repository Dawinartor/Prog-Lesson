import React, {useState} from 'react';

const HookExample = () => {
    // definiere einen neuen state namens "count"
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={increase}>
          Click me
        </button>
      </div>
    );
}

export default HookExample;
