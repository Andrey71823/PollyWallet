import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import WalletA from './components/variant-a/WalletA';
import NFTA from './components/variant-a/NFTA';
import WalletB from './components/variant-b/WalletB';
import NFTB from './components/variant-b/NFTB';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />

                {/* Variant A: Ultra-Soft White */}
                <Route path="/soft-white" element={<WalletA />} />
                <Route path="/soft-white/wallet" element={<WalletA />} />
                <Route path="/soft-white/nft" element={<NFTA />} />

                {/* Variant B: Neumorphism */}
                <Route path="/neumorph" element={<WalletB />} />
                <Route path="/neumorph/wallet" element={<WalletB />} />
                <Route path="/neumorph/nft" element={<NFTB />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
