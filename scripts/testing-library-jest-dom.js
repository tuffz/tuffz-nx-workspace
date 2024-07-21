// use require to prevent issues with some project types default settings
// otherwise will throw error:
//  SyntaxError: Cannot use import statement outside a module
// you can use import just will need to adjust the configs to make sure they are transpiles
// issues with js nest node workspace, seems fine for angular and react.
require('@testing-library/jest-dom');
