import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './components/App/App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </StrictMode>
);
