import React from 'react'
import Counter from './Counter'
import {Link} from 'react-router-dom'
const Round_1Page = () => {
    return (
        <div>
            <Counter />
            <Link to="/Round1_begins">START</Link>
        </div>
    )
}

export default Round_1Page
