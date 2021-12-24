import codeTheme from '@theme-ui/prism/presets/night-owl.json'
import baseTheme from '@chuan-khuna/gatsby-theme-terminal-altr/src/gatsby-plugin-theme-ui'
import { darken } from "@theme-ui/color"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: '#1b262c',
    muted: '#8b87ea',
    primary: '#202f66',
    secondary: '#ff7048',
    success: '#48ADA9',
    background: '#f9f7f7',
    surface: '#EDE8E8',
    highlight: '#5a6084',
    error: '#ff5555',
    black: '#000000',
    initialColorModeName: '-30k',
    modes: {
      '-30k': {
        text: '#1b262c',
        muted: '#8b87ea',
        primary: '#202f66',
        secondary: '#ff7048',
        success: '#48ADA9',
        background: '#f9f7f7',
        surface: '#EDE8E8',
      },
      eramorp: {
        text: '#BEDAD9',
        muted: '#E4A7A4',
        primary: '#F9DF16',
        secondary: '#D869AB',
        success: '#90FFCA',
        background: '#0c1017',
        surface: '#1d2129',
      },
      nexus: {
        text: '#F2F2F2',
        muted: '#79D8D2',
        primary: '#7F68D0',
        secondary: '#F3D36E',
        success: '#90FFCA',
        background: '#0c1017',
        surface: '#1d2129',
      },
      'Chaos-Drifters-/-CRY': {
        text: '#02071B',
        muted: '#311d3f',
        primary: '#3B84A7',
        secondary: '#E4895C',
        success: '#54C9B9',
        background: '#f9f7f7',
        surface: '#EDE8E8',
      },
      FUSE: {
        text: '#F2F2F2',
        muted: '#EFD9DA',
        primary: '#E57E91',
        secondary: '#59C6E3',
        success: '#90FFCA',
        background: '#0c1017',
        surface: '#1d2129',
      },
      tsubaki: {
        text: '#F2F2F2',
        muted: '#C5C1B8',
        primary: '#CF9E84',
        secondary: '#F4CDD1',
        success: '#B6D8B7',
        background: '#0c1017',
        surface: '#1d2129',
      },
    },
  },

  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: 'inherit',
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
      backgroundColor: darken("#05192D", 0.075),
    },
  },
}
