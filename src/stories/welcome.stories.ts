import { Welcome } from '@storybook/angular/demo';

export default {
  title: 'Atomic UI|Welcome',
};

export const toStorybook = () => ({
  component: Welcome,
  props: {},
});

toStorybook.story = {
  name: 'to Atomic UI',
};
