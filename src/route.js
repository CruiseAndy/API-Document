/**
 * tool
 */
import { Routes, Route } from "react-router-dom";

/**
 * pages
 */
import LayoutContainer from './components/LayoutContainer';
import NoPage from './pages/404';
import Cashier from './pages/cashier';
import KYC from './pages/kyc';

const Router = () => {
  return (
    <Routes>
      <Route path="cashier" element={
        <LayoutContainer>
          <Cashier windowDomain={domainHost} />
        </LayoutContainer>
      } />
      <Route path="kyc" element={
        <LayoutContainer>
          <KYC windowDomain={domainHost}/>
        </LayoutContainer>
      } />
      <Route path="*" element={
        <LayoutContainer sectionStyle={{ justifyContent: "center" }}>
          <NoPage />
        </LayoutContainer>
      } />
    </Routes>
  );
}

export default Router