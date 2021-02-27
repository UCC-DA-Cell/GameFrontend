import React from 'react'
import Counter from './Counter'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'
const Round_1Page = () => {
    return (
        <div >
            <Counter />
            {/* <Button size="sm" ><Link to="/Round1_begins">START</Link></Button> */}
        </div>
    )
}

export default Round_1Page
