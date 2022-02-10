import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteContent from './pages/SiteContent';
import { Fragment } from 'react/cjs/react.production.min';
import MetaTags from 'react-meta-tags';

const darkModeBgColor = 'rgb(30, 30, 30)';
const darkModeTextColor = '#fff';
const darkModeCardColor = 'rgb(40, 40, 40)';

const lightModeBgColor = '#fff';
const lightModeTextColor = '#212529';
const lightModeCardColor = '#fff'

function App(props) {
    const toggleDarkMode = (enabled) => {
        document.documentElement.style.setProperty(
            '--bs-body-color', enabled ? darkModeTextColor : lightModeTextColor
        );
        document.documentElement.style.setProperty(
            '--bs-body-bg', enabled ? darkModeBgColor : lightModeBgColor
        );
        document.documentElement.style.setProperty(
            '--bs-card-color', enabled ? darkModeCardColor : lightModeCardColor
        );
    }

    const getThemeColor = () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        toggleDarkMode(prefersDark)
        let themeColor = prefersDark ? darkModeBgColor : lightModeBgColor;

        return themeColor
    }

    return (
        <Fragment>
            <MetaTags>
                <meta name="theme-color" content={getThemeColor()} />
            </MetaTags>
            <Router>
                <Routes>
                    <Route path="/" element={<SiteContent />} exact />
                    <Route path="*" element={<div><h1>404 no</h1></div>} />
                </Routes>
            </Router>
        </Fragment>
    )
}

export default App;
