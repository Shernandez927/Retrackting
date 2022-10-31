# Retrackting

## Description

- This Employee Tracker was created to better understand using mySQL to get more familiarized with creating and manipulating databases.

- This project uses input from the Inquirer npm to update and add to the existing tables within the created database from mySQL and displays them in the terminal via the console.table npm.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To ensure the proper dependencies are installed, use the following terminal commands within the root directory:

```
    npm install
```

```
    npm install inquirer@8.2.4
```

```
    npm install console.table
```

```
    npm install asciiart-logo
```

```
    npm install mysql
```

```
    npm install dotenv --save
```


## Usage

Before initializing application, source the schema.sql and seeds.sql file with the following commands:

mySQL Login:

```
    mysql -u root -p
```

Source Schema File:

```
    source db/schema.sql;
```

Source Seeds File:

```
    source db/seeds.sql;
```

To Quit mySQL:

```
    quit;
```

Before Initializing, go the the .env.EXAMPLE file, enter your mySQL information, and rename the file to a .env file.


To initialize application:

```
    node server.js
```

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Debugging:

- Salissa Hernandez: (https://github.com/Salissa4)

- Shawn Tschoepe: (https://github.com/shawn220a)

## License

MIT License

Copyright (c) [2022] [Shelby Hernandez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

![licensebadge](https://img.shields.io/github/license/shernandez927/retrackting?style=for-the-badge) ![reposizebadge](https://img.shields.io/github/repo-size/shernandez927/retrackting?style=for-the-badge) ![languagebadge](https://img.shields.io/github/languages/count/shernandez927/retrackting?style=for-the-badge)

## Features

- Inquirer v8.2.4

- mySQL

- Console.table

- Asciiart-logo


## Tests

No Tests written... yet.