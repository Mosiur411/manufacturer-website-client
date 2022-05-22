import React from 'react';
import Helmet from 'react-helmet';

const ReactHelmet = ({ children }) => {
    return (
        <Helmet>
            <title>ViTic-{children}</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
    );
};

export default ReactHelmet;