import React, { useState, useEffect } from 'react';
import './Date-Time.css';
import { ReactComponent as ClockIcon } from '../Icons/clock_three.svg';
import { ReactComponent as CalenderIcon } from '../Icons/schedule.svg';

function DateTime() {
    const [dateState, setDateState] = useState(new Date());
    const getBrowserLocale = () => navigator.language || 'uk-UA' || 'cs-CZ' || 'en-GB' || 'en-US';

    // console.log( getBrowserLocale() );
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div className="DataTime">
            <CalenderIcon />
            <p>
                {' '}
                {dateState.toLocaleDateString(getBrowserLocale(), {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })}
            </p>
            <ClockIcon />
            <p>
                {dateState.toLocaleString(getBrowserLocale(), {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                })}
            </p>
        </div>
    );
}

export default DateTime;