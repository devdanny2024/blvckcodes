// components/FacebookPixel.js
import React from 'react';
import { initPixel, PageView } from 'react-facebook-pixel';

const FacebookPixel = () => {
    React.useEffect(() => {
        initPixel('558962233205964');
        PageView();
    }, []);

    return null;
};

export default FacebookPixel;
