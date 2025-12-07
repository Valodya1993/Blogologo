import './App.css'
import { ThemeProvider } from './context/themeContext/theme-context';
import { Router } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './helpers/ScrollToTop';

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
