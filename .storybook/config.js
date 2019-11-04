import { configure, getStorybook, setAddon } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);
// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook);