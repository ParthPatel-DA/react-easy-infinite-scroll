# react-easy-infinite-scroll <br/> [![npm](https://img.shields.io/npm/dt/react-easy-infinite-scroll.svg?style=flat-square)](https://www.npmjs.com/package/react-easy-infinite-scroll) [![npm](https://img.shields.io/npm/v/react-easy-infinite-scroll.svg?style=flat-square)](https://www.npmjs.com/package/react-easy-infinite-scroll) ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

A component to make all your infinite scrolling!

## Install

```jsx
  npm install --save react-easy-infinite-scroll

  or

  yarn add react-easy-infinite-scroll

  // in code ES6
  import ReactEasyInfiniteScroll from 'react-easy-infinite-scroll';

  // or commonjs
  var ReactEasyInfiniteScroll = require('react-easy-infinite-scroll');
```

## Using

```jsx
// payload: { skip: 0 }
const getData = (payload) => {
  // api call
};

<ReactEasyInfiniteScroll
  listLength={data.list.length}
  totalRecords={data.totalRecords}
  apiCallBack={getData}
/>;
```

## props

| name                      | type     | description                                                                   |
| ------------------------- | -------- | ----------------------------------------------------------------------------- |
| **listLength**            | number   | pass length of current data list.                                             |
| **totalRecords**          | number   | pass total records to show                                                    |
| **apiCallBack**           | function | api call back function, you will get `skip` value as object                   |
| **loader** (optinal)      | node     | you can change the loader by this property, by default we have set the loader |
| **loaderColor** (optinal) | string   | default loader color can be change by this property                           |

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ParthPatel-DA"><img src="https://avatars.githubusercontent.com/u/35848924?s=100&v=4" width="100px;" alt=""/><br /><sub><b>Parth Patel</b></sub></a></td>
  </tr>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

[MIT](LICENSE)
