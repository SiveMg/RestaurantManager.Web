import React from 'react';
import { Link } from 'react-router-dom';

type PageHomeProps = {
    
}

const PageHome = ({ } : PageHomeProps) => {
    return (
        <>
            <Link to="/login">Login</Link>
        </>
    )
}

export default PageHome;