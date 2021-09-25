import * as React from 'react';
import moment from 'moment';

const TimeApp: React.FC<{}> = () => {
    const [time, setTime] = React.useState(moment())
    const [fontPx, setFontPx] = React.useState(40)

    React.useEffect(() => {
        const id = setInterval(() => {
            setTime(moment()),
            100
        })

        return () => clearInterval(id)
    }, [])

    const displayMoment = () => time.format('YYYY/MM/DD HH:mm:ss')

    const incrementFontPx = () => setFontPx((prev) => prev + 10)

    const decrementFontPx = () => setFontPx((prev) => prev > 16 ? prev - 10 : 16)

    const fontStyle = { fontSize: `${fontPx}px` }

    return (
        <div>
            <button onClick={incrementFontPx}>+10</button>&nbsp;
            <button onClick={decrementFontPx}>-10</button>
            <input type="number" value={fontPx} onChange={(e) => setFontPx(parseInt(e.target.value))} />
            <p style={fontStyle}>
                {displayMoment()}
            </p>
        </div>
    )
}

export default TimeApp
