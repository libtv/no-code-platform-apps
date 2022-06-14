import React, { useState } from "react";

export default function Like() {
    const [number, setNumber] = useState<number>(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    return (
        <div>
            {number}
            <button onClick={onIncrease}>good</button>
        </div>
    )
}