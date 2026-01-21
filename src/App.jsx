import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import WalletA from './components/variant-a/WalletA';
import NFTA from './components/variant-a/NFTA';
import PointA from './components/variant-a/PointA';
import RankA from './components/variant-a/RankA';
import WalletB from './components/variant-b/WalletB';
import NFTB from './components/variant-b/NFTB';
import PointB from './components/variant-b/PointB';
import RankB from './components/variant-b/RankB';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />

                {/* Variant A: Ultra-Soft White */}
                <Route path="/soft-white" element={<WalletA />} />
                <Route path="/soft-white/wallet" element={<WalletA />} />
                <Route path="/soft-white/nft" element={<NFTA />} />
                <Route path="/soft-white/point" element={<PointA />} />
                <Route path="/soft-white/rank" element={<RankA />} />

                {/* Variant B: Neumorphism */}
                <Route path="/neumorph" element={<WalletB />} />
                <Route path="/neumorph/wallet" element={<WalletB />} />
                <Route path="/neumorph/nft" element={<NFTB />} />
                <Route path="/neumorph/point" element={<PointB />} />
                <Route path="/neumorph/rank" element={<RankB />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
