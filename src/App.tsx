import InfoApp from "./components/modules/section-info/ui/info-app"
import MapApp from "./components/modules/section-map/ui/map-app"
import FooterApp from "./components/modules/footer/ui/footer-app"
import './index.css'





const App: React.FC = () => {
    return (
        <>
            <main className="main">
                <InfoApp />
                <MapApp/>
                <FooterApp/>
            </main>

        </>
    )
}


export default App