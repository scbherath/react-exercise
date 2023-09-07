import {createGlobalStyle} from 'styled-components';
import { COLORS, WEIGHTS, TYPE_SCALE, FONT_FAMILIES } from '../../utils/theme';

const GlobalStyles = createGlobalStyle`
    html, body, div, span, ul, ol, li, 
    h1, h2, h3, h4, h5, h6, p, section, nav,
    footer, header, article, string, img {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {

        --color-primary: ${COLORS.primary};
        --color-secondary: ${COLORS.secondary};
        --color-tertiary: ${COLORS.tertiary};
        --color-urgent: ${COLORS.light};

        --font-family: ${FONT_FAMILIES.primary};

        --font-weight-normal: ${WEIGHTS.regular};
        --font-weight-medium: ${WEIGHTS.medium};
        --font-weight-bold: ${WEIGHTS.bold};

        --default-font-size: ${TYPE_SCALE.text};
        --heading-size-h1: ${TYPE_SCALE.header1};
        --heading-size-h2: ${TYPE_SCALE.header2};
        --heading-size-h3: ${TYPE_SCALE.header3};
        --heading-size-h4: ${TYPE_SCALE.header4};
        --heading-size-h5: ${TYPE_SCALE.header5};
        --heading-size-h6: ${TYPE_SCALE.header6};
    }

    html, body {
        height:100%;
    }

    body {
        font-size: 14px;
    }

`;

export default GlobalStyles;
