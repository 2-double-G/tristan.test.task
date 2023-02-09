import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {ROUTES.map(({ id, path, exact, element }) => (
            <Route key={id} path={path} exact={exact} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
