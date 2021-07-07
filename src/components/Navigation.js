import React from 'react'
import { useHistory } from 'react-router'
import '../component.css'

const Navigation = () => {
    
    const history = useHistory()

    return (
        <div style={{marginTop:"50px"}}>
            <span className="navigation-button" onClick={() => history.push("/albums")}>
                GET ALBUMS
            </span>
        </div>
    )
}

export default Navigation