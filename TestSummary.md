# Test Summary

Overall I think the test went well. I believe I was able to meet the requirement of creating a set of components which matches the design provided by the figma [link](https://www.figma.com/file/mkYgvC0aTWgcHNyniGQUsb/Modal---UI-challenge?type=design&node-id=0%3A118&mode=dev).

I think there are definitely more improvements I could have made if I could spend more time on the project. e.g. Adding design tokens like colours and typography to storybook to create a more complete design system.

Below I will go into more detail regarding some points I feel my project met and how I could improve each point.

## Using Create React App

I did initially start off with a Next.js app, but I thought it might be too much since we wouldn't be using Next.js features for the project other than it's configuration for a React project. Due to this reason, I thought maybe a standard create-react-project would work.

I know the React team has said that new projects should probably be built with tools other than create-react-app. I did consider using Vite, but I haven't setup a Vite app before so didn't want to risk using it for this test.

## Breaking up the Modal in the design into multiple components

When building a component I always consider atomic design and identify how a larger component (molecules/organisms) can be broken up into smaller components (atoms).

When I looked at the Modal component originally I tried to identify ways that I break it up into smaller components. By breaking the modal up into smaller components it allows them to be used to build other components in the future.

Also, by splitting them up I can also test them in isolation and document them individually in storybook.

## Documenting the usage of the components

I tried to document how to use the components in the project by using storybook and writing tests.

### Storybook

I feel like storybook is a great tool for documenting the usage of components by showing the user how the component appears and what props you can configure for the component. You can also copy code snippets to quickly copy a variant of a component or one you configured using custom prop values.

I did use the autodocs feature to document the components I created stories for in storybook, but I do think that there are some cases where some more detailed documentation might be needed. e.g. How to use the Overlay with the Modal to get the same outcome as the figma [design](<(https://www.figma.com/file/mkYgvC0aTWgcHNyniGQUsb/Modal---UI-challenge?type=design&node-id=0%3A118&mode=dev)>) provided. If I had more time I would tailor the docs more so they would be a bit more helpful on how to use the components individually and together.

### Tests

Tests don't only provide value by letting you know that the behaviour or an appearance of a component has changed, but also helps create documentation for your component. I believe tests are a geat way to document the usage of a component and how different properties passed to a component can affect how it behaves.

## Accessibility

During the task I always tried to keep accessibility as a priority. In my components I used aria labels and roles to help describe the purpose of a component. e.g. using aria-label for the DismissButton component to let the user know it was a button with the responsibility of dismissing something.

To help ensure accessibility was also tested while developing the project I added a storybook plugin called [@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y). This component allows to see if you have passed all accessibility checks for the component you have created a story for in story book.

There is also a eslint plugin which lints your project and finds any accessibility issues in it. If I had more time I would have integrated this plugin into the project too. The plugin is called [eslint-plugin-jsx-ally](https://www.npmjs.com/package/eslint-plugin-jsx-a11y).

## Testing

I ensured to write test for most of the components I built. (Except DismissIcon which I would have written for if given more time).

Tests are really important to the robustness and reliability of any project. I always make sure I write tests for the components I create. I tend to go with a TDD approach, because it allows me to setup the requirements of the component before I build.

I decided to use react-testing-library to test the components I created because it is the industry standard and also tests the components in a behavioural manner.

### Snapshot Testing

One thing I did not get a chance to do was to setup snapshot testing. I think snapshot testing is important because it helps point out any visual regressions your components might have. If I had more time I would definitely setup snapshot testing to verify the components haven't changes visually.

## Linting
I didn't have the chance to configure eslint correctly for the project and to add a lint script to the codebase, but if I had more time I would definitely add this.

I believe linting is a very important component to keeping a project well maintained with little to no errors/warnings.


## Distributing the component library

I didn't make any specific efforts to help package up the library to be used by any consuming applications, but if I had to make this production ready I would look at setting up a npm package and maybe looking at using a tool like [Bit](https://bit.dev/).
