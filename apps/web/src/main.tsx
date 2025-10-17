import React from 'react';
import ReactDOM from 'react-dom/client';

import { Apex } from '~apex';
import { APP_MOUNTING_POINT, getVersion } from '~common/constants';

const rootElement = document.getElementById(APP_MOUNTING_POINT)!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  void root.render(
    <React.StrictMode>
      <Apex key={getVersion()} />
    </React.StrictMode>,
  );
}
