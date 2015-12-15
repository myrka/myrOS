import 'babel-polyfill';

import OSApp from 'components/os-app/OSApp';

import 'app.scss';

ReactDOM.render(<OSApp />, document.getElementById('react-app'));

// By default Lo-Dash will be exposed in global scope, which is not what we want when using Webpack.
_.noConflict();