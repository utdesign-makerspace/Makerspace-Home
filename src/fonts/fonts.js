import { createGlobalStyle } from "styled-components";

import Bahnschrift from "../fonts/Bahnschrift.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Bahnschrift';
        src: local('Bahnschrift'), local('Bahnschrift'),
        url(${Bahnschrift}) format('woff2');
        font-style: normal;
    }
`;
