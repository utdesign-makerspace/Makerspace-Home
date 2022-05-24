import { createGlobalStyle } from "styled-components";

import Bahnschrift from "../fonts/Bahnschrift.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Bahnschrift';
        src: local('Bahnschrift'), local('Bahnschrift'),
        url(${Bahnschrift}) format('ttf');
        font-style: normal;
    }
`;
