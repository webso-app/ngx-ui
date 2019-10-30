import { addParameters, configure, addDecorator } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';
import logo from '../src/app/assets/images/webso.app-full.png';

addDecorator(withA11y);


// Option defaults.
addParameters({
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    panelPosition: 'bottom',
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
    theme: create({
      base: 'dark',
      brandImage: logo,
      brandTitle: 'webso.app',
      brandUrl: 'https://github.com/webso-app/ngx-ui',
      gridCellSize: 12,
    }),
    /* storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }), */

/*     sortStoriesByKind: true */
  }
});
// automatically import all files ending in *.stories.ts
configure([
  require.context('../src/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/),
  require.context('../projects/button/src/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/)
], module);
