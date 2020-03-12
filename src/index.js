// Make sure react-hot-loader is required before react and react-dom
import 'react-hot-loader';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDom from 'react-dom';

import App from '@/app';

ReactDom.render(<App />, document.getElementById('app'));
