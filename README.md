# stylelint-config-cuemby

[![npm version](https://badge.fury.io/js/
stylelint-config-cuemby.svg)](http://badge.fury.io/js/
stylelint-config-cuemby)

StyleLint configuration ruleset to work with any CSS/SCSS project in the Cuemby Team, you can add it to your `.stylelintrc` file as an extendable configuration.

## Table of contents
1. [Installation](#installation)
    * [CLI](#installation--cli)
    * [Text Editors](#installation--text-editors)
2. [Usage](#usage)
    * [Project](#usage--project)
    * [Global](#usage--global)
3. [StyleLint Approved Code](#eslint-approved)
    * [Git Hook](#eslint-approved--git-hook)
    * [StyleLint Disable](#eslint-approved--disable)
4. [License](#license)

## Installation <a name="installation"></a>

### CLI Installation  <a name="installation--cli"></a>
Required to have installed Node 8+ and NPM 5+ and StyleLint as a global package. Run in the command line:

```sh
npm install -g stylelint
npm install --save-dev stylelint-config-cuemby
```

Afterwards you can check errors and warnings with:

`stylelint path/to/file.scss` or `npm run stylelint`

### Text Editors Installation  <a name="installation--text-editors"></a>

There're many plugins available that allows you to have live linting while working on a project and can throw errors, warnings and auto-corrections on the go. It requires you to have  installed the CLI version. Some are listed here:

* [VSCode StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
* [Sublime Linter (StyleLint)](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)
* [Atom Linter StyleLint](https://atom.io/packages/linter-stylelint)
* [WebStorm StyleLint](https://www.jetbrains.com/help/webstorm/2017.1/stylelint.html)
* [Vim Ale](https://github.com/w0rp/ale)

## Usage  <a name="usage"></a>

### Project Usage <a name="usage--project"></a>
Add to your  `.stylelintrc` file on the root of the project.

```javascript
{
  "extends": "stylelint-config-cuemby"
}
```

### Global Usage <a name="usage--global"></a>
In case you want to follow this ruleset for all of the projects in your machine or don't want to set up a `.stylelintrc` file for each project, you can create a root machine file, and StyleLint will throw errors based on such a file when it doesn't find one in your project.

In any bash or unix based CLI:
```sh
npm install -g stylelint-config-cuemby stylelint-scss
touch ~/.stylelintrc
echo '{"extends": "stylelint-config-cuemby"}' >> ~/.stylelintrc
```

## StyleLint Approved Code  <a name="eslint-approved"></a>

### Git Hook  <a name="eslint-approved--git-hook"></a>
Only allow eslint-compliant code into the commits, this ensures only great-quality code to be present in the repository.

1. Get inside the `.git` folder for the project
2. Go to `hooks/` and rename `commit-msg.sample` to `commit-msg`
3. Inside `commit-msg`, add the following code

```sh
#!/bin/bash
stylefiles=$(git diff --cached --name-only | grep '\.s?css\?$')

# Prevent StyleLint help message if no files matched
if [[ $stylefiles = "" ]] ; then
  exit 0
fi

stylefailed=0
for file in ${stylefiles}; do
  git show :$file | stylelint $file
  if [[ $? != 0 ]] ; then
    stylefailed=1
  fi
done;

if [[ $stylefailed != 0 ]] ; then
  echo "StyleLint failed, improve your code to commit!"
  exit $stylefailed
fi
```
4. Try to committing a file with StyleLint errors, you should receive a message and being unable to commit.

   You can also run "npm run stylelint-commit" locally or "stylelint-config-cuemby commit" globally to test the Git Hook.

### Disable StyleLint <a name="eslint-approved--disable"></a>

If for some given reason, you need to disable ESLint for a code snippet, you can do it this way wrapping the desired code, but allowing to be parsed all across the document:
```scss
/* stylelint-disable */
@includes placeHolder(){
  color: $gray;
}
/* stylelint-enable */
```

If for some given reason, you need to disable StyleLint for file, you can do it only by ignoring the whole file via a `.stylelintignore` file which uses the `.gitignore` syntax.

In case you need to commit not stylelint-compliant code for a strong reason, disable only what you need and add a comment explaining why the StyleLint was disabled or that instance is not indicated to have it prevent you from committing your code.

```sh
# Disabling it because it's production code
dev/*.css
```

## License  <a name="license"></a>

(The MIT License)

Copyright © 2015-2018 Cuemby LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided 'as is', without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

