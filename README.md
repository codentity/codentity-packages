# codentity-packages

Packages (config/icons/tests) for Codentity.

[![Circle CI](https://circleci.com/gh/codentity/codentity-packages.svg?style=svg&circle-token=29150bed184f3079d482ad3aeec08d7c7cee8adb)](https://circleci.com/gh/codentity/codentity-packages)

## Installation

Clone the repo:

```
git clone https://github.com/codentity/codentity-packages
```

Then, install the NPM dependencies:

```
npm install
```

## Contributing

Each package has three components:

1. **config.json** (this configures the package)
2. **icon.png** (the logo/icon for the package)
3. **scenario.js** (the spec for the package)

It's important that when adding new packages, you follow the format demonstrated
in the other packages.

**Example config.json**

```json
{
  "name": "",
  "description": "",
  "homepage": "",
  "github": "",
  "bowerJson": ["PKG_NAME"],
  "packageJson": ["PKG_NAME"],
  "filePath": ["FILE_PATH"]
}
```

**Example scenario.js**
```js
module.exports = [{
  // scenario description
  description: ""
  // config for Codentity.analyze()
  input: {
    packageJson: {
      devDependencies: {
        PKG_NAME: '1.0.0'
      }
    }
  },
  // expected output for results[PKG_NAME]
  output: [{
    src: 'packageJson',
    version: '1.0.0',
    packageName: 'PKG_NAME',
    dependencyGroup: 'devDependencies'
  }]
}]
```
