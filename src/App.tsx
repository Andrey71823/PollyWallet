import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import WalletA from "./components/variant-a/WalletA.jsx";
import NFTA from "./components/variant-a/NFTA.jsx";
import PointA from "./components/variant-a/PointA.jsx";
import RankA from "./components/variant-a/RankA.jsx";
import WalletB from "./components/variant-b/WalletB.jsx";
import NFTB from "./components/variant-b/NFTB.jsx";
import PointB from "./components/variant-b/PointB.jsx";
import RankB from "./components/variant-b/RankB.jsx";
import WalletADesktop from "./components/desktop/WalletADesktop.jsx";
import NFTADesktop from "./components/desktop/NFTADesktop.jsx";
import PointADesktop from "./components/desktop/PointADesktop.jsx";
import RankADesktop from "./components/desktop/RankADesktop.jsx";
import NotFound from "./pages/NotFound.tsx";
import { LocaleProvider } from "./i18n.jsx";
import { AuthProvider } from "./AuthContext.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <LocaleProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />

              <Route path="/soft-white" element={<WalletA />} />
              <Route path="/soft-white/wallet" element={<WalletA />} />
              <Route path="/soft-white/nft" element={<NFTA />} />
              <Route path="/soft-white/point" element={<PointA />} />
              <Route path="/soft-white/rank" element={<RankA />} />

              <Route path="/neumorph" element={<WalletB />} />
              <Route path="/neumorph/wallet" element={<WalletB />} />
              <Route path="/neumorph/nft" element={<NFTB />} />
              <Route path="/neumorph/point" element={<PointB />} />
              <Route path="/neumorph/rank" element={<RankB />} />

              <Route path="/desktop" element={<WalletADesktop />} />
              <Route path="/desktop/wallet" element={<WalletADesktop />} />
              <Route path="/desktop/nft" element={<NFTADesktop />} />
              <Route path="/desktop/point" element={<PointADesktop />} />
              <Route path="/desktop/rank" element={<RankADesktop />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LocaleProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
