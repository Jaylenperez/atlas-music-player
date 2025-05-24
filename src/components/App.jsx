import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex flex-row">
      <div className="flex h-full min-h-screen flex-col justify-between p-8 font-sans">
        <MusicPlayer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
