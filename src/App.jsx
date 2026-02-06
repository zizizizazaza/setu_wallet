import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import LandingPage from './pages/LandingPage';
import WelcomePage from './pages/WelcomePage';
import RecoveryPhrasePage from './pages/RecoveryPhrasePage';
import ImportPhrasePage from './pages/ImportPhrasePage';
import ConfirmPhrasePage from './pages/ConfirmPhrasePage';
import SetPasswordPage from './pages/SetPasswordPage';
import EmptyAssetsPage from './pages/EmptyAssetsPage';
import TokenListPage from './pages/TokenListPage';
import ActivityPage from './pages/ActivityPage';
import AccountsPage from './pages/AccountsPage';
import AccountDetailsPage from './pages/AccountDetailsPage';
import WalletDetailsPage from './pages/WalletDetailsPage';
import SettingsPage from './pages/SettingsPage';
import NetworksPage from './pages/NetworksPage';
import TokenDetailsPage from './pages/TokenDetailsPage';
import AddNetworkPage from './pages/AddNetworkPage';
import LockedPage from './pages/LockedPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="relative">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/recovery" element={<RecoveryPhrasePage />} />
            <Route path="/import" element={<ImportPhrasePage />} />
            <Route path="/confirm" element={<ConfirmPhrasePage />} />
            <Route path="/set-password" element={<SetPasswordPage />} />
            <Route path="/empty" element={<EmptyAssetsPage />} />
            <Route path="/tokens" element={<TokenListPage />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/account-details" element={<AccountDetailsPage />} />
            <Route path="/wallet-details" element={<WalletDetailsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/networks" element={<NetworksPage />} />
            <Route path="/token-details" element={<TokenDetailsPage />} />
            <Route path="/add-network" element={<AddNetworkPage />} />
            <Route path="/locked" element={<LockedPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>

        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
