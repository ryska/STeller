### ST Table view

This is a recrutiment project that required coding a view page. I decided to use create-react-app, Typescript and Scss. For state management I'm using React Context.

### To run the project you need to:

1. Clone the project

2. `npm install`

3. `npm start`

4. Open `localhost:3000`

### Improvements:

1. For this project I implemented the view, table filtering, mocked server response. The view is accessible, can be navigated using a keyboad.

2. Future improvements:

   a) Not every component is fully working, for example: sorting, pagination, user icon on top, sidebar navigation.

   b) Sidebar navigation: I'd implement react router with outlets to change content in page. It is also not showing the current tab as "active", because there is only one view, but for that I'd use useLocation() from react-router and assing a css class.

   c) File structure: I could move some components to a component library/design system directory, but for this project it didn't require as much (only one view).

   d) If any functionality would be passed to components (button, input etc) I'd wrap them in useCallback/useMemo to keep them performant.

3. Tests
4. Linting files on pre-commit.

#### Enjoy and happy new year 🎉
