import React from 'react';
import PropsChild from './03Props.jsx';

const FunctionalCompoProps = () => {
    return (
        <>
        <p>Parent Compo</p>
            <PropsChild title="Data"/>
        </>
    );
};

export default FunctionalCompoProps;