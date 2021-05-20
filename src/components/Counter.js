import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h4>Counter</h4>
            <h1>{count}</h1>
            <Button label="Increment" text="+" clickFunc={increment} />
            <Button label="Decrement" text="-" clickFunc={decrement} />
        </div>
    );
}

export default Counter;