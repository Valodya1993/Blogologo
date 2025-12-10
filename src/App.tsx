import './App.css'
import { ThemeProvider } from './context/themeContext/theme-context';
import { Router } from './router/AppRouter';
import { HashRouter } from 'react-router-dom';
import { ScrollToTop } from './helpers/ScrollToTop';

function App() {
  return (
    <>
      <ThemeProvider>
        <HashRouter>
          <ScrollToTop />
          <Router />
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
