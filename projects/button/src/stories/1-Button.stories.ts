import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { Button } from '@storybook/angular/demo';
import { ButtonComponent } from 'button';
import defaultNotes from '../instructions.md';

/* export default {
  title: 'Atomic UI|Atoms.Button',
  decorators: [withKnobs],
  parameters: { }
};


const actions = {
  onClick: action('onClick'),
  onMouseOver: action('onMouseOver'),
};

const props = {
  text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
  onClick: actions.onClick
};

export const textButton = () => ({
  component: Button,
  componentSubtitle:
    'Displays an image that represents a user or organization2',
  props
});
textButton.story = {
  name: 'with Knobs',
  componentSubtitle:
      'Displays an image that represents a user or organization3',
  parameters: {
    notes: 'My notes on a some text button'
  }
};

export const disabledButton = () => ({
  component: ButtonComponent,
  props: {
    text: 'disabled',
    onClick: linkTo('Welcome'),
    disabled: true
  }
});

disabledButton.story = {
  name: 'with disabled attribute',
  parameters: { notes: 'My notes on a disabled button' }
};

export const withDisabledAndAction = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG')
  }
});

withDisabledAndAction.story = {
  name: 'with some emoji and action',
  parameters: {
    notes: 'My notes on a button with emojis'
  }
};

export const buttonWithLinkToAnotherStory = () => ({
  component: ButtonComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome')
  }
});

buttonWithLinkToAnotherStory.story = {
  name: 'button with link to another story'
};
*/
