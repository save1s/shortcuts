const apidocMarkdown = require('@rigwild/apidoc-markdown')
const r = require('path').resolve

const config = {
  path: r(__dirname, 'apidoc'), // Path to apiDoc data directory
  output: r(__dirname, 'docs/api'), // Output path
  template: r(__dirname, 'apidoc_template.md'), // Template path
  prepend: null, // File to preprend documentation with
  multi: true, // Should the documentation be generated one file per group
  createPath: false // Should the path to output path be recursively generated (mkdir -p)
}

apidocMarkdown.setup(config)