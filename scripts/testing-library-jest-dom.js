// Use require to prevent issues with some project types' default settings.
// Otherwise, the following error will occur:
//
// SyntaxError: Cannot use import statement outside a module
//
// You can use import statements, but you'll need to adjust the configurations
// to ensure they are transpiled. This issue is specific to some JS Nest Node
// workspaces, while it seems fine for Angular and React projects.
require('@testing-library/jest-dom');
