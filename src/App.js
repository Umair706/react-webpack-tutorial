const API_KEY = process.env.API_KEY;
const APP_URL = process.env.APP_URL;
const App = () => {
    return <div style={{ color: "white" }}>
        APP_URL = {APP_URL},
        API_KEY = {API_KEY}
    </div>
}

export default App;