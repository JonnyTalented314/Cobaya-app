import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingLayout from '../components/Layouts/Landing';
import HomeLayout from '../components/Layouts/Home';
import MainLayout from '../components/Layouts/Main';
import PublicLayout from '../components/Layouts/Public';
import ScrollToTop from '../hooks/scrollToTop'

import LandingPage from '../pages/Landing';
import HomePage from '../pages/Home';
import HomeTestPage from '../pages/HomeTest';
// import SignUp from '../pages/SignUp';
// import SignIn from '../pages/SignIn';
import SolutionsPage from '../pages/Solutions';
import PricingPage from '../pages/Pricing';
import TermsPage from '../pages/Terms';
import PrivacyPage from '../pages/Privacy';
import TeamsPage from '../pages/Teams';
import PeacekeepersPage from '../pages/Peacekeepers'
import CookiePage from '../pages/Cookie';
import GetStartedPage from '../pages/GetStarted';
import RequestDemoPage from '../pages/RequestDemo';
import PageNotFound from '../pages/PageNotFound';
import MetaTag from '../components/MetaTag';

function userRedirect(nextState, replace) {
  var defaultLanguage = 'en';
  var redirectPath = defaultLanguage + nextState.location.pathname
  replace({
    pathname: redirectPath,
  })
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MetaTag />
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={
            <LandingLayout>
              <LandingPage />
            </LandingLayout>
          }
        />
        <Route
          path='/:locale'
          element={
            <LandingLayout>
              <LandingPage />
            </LandingLayout>
          }
        />
        <Route
          path='/getstarted'
          element={
            <HomeLayout>
              <GetStartedPage />
            </HomeLayout>
          }
        />
        <Route
          path='/:locale/getstarted'
          element={
            <HomeLayout>
              <GetStartedPage />
            </HomeLayout>
          }
        />
        <Route
          path='/request-demo'
          element={
            <HomeLayout>
              <RequestDemoPage />
            </HomeLayout>
          }
        />
        <Route
          path='/:locale/request-demo'
          element={
            <HomeLayout>
              <RequestDemoPage />
            </HomeLayout>
          }
        />
        <Route
          path='/home'
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />
        <Route
          path='/:locale/home'
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />
        <Route
          path='/home-test'
          element={
            <HomeLayout>
              <HomeTestPage />
            </HomeLayout>
          }
        />
        <Route
          path='/:locale/home-test'
          element={
            <HomeLayout>
              <HomeTestPage />
            </HomeLayout>
          }
        />
        <Route
          path='/solutions'
          element={
            <MainLayout>
              <SolutionsPage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/solutions'
          element={
            <MainLayout>
              <SolutionsPage />
            </MainLayout>
          }
        />
        <Route
          path='/pricing'
          element={
            <MainLayout>
              <PricingPage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/pricing'
          element={
            <MainLayout>
              <PricingPage />
            </MainLayout>
          }
        />
        <Route
          path='/terms'
          element={
            <MainLayout>
              <TermsPage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/terms'
          element={
            <MainLayout>
              <TermsPage />
            </MainLayout>
          }
        />
        <Route
          path='/privacy'
          element={
            <MainLayout>
              <PrivacyPage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/privacy'
          element={
            <MainLayout>
              <PrivacyPage />
            </MainLayout>
          }
        />
        <Route
          path='/cookie'
          element={
            <MainLayout>
              <CookiePage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/cookie'
          element={
            <MainLayout>
              <CookiePage />
            </MainLayout>
          }
        />
        <Route
          path='/peacekeepers'
          element={
            <MainLayout>
              <PeacekeepersPage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/peacekeepers'
          element={
            <MainLayout>
              <PeacekeepersPage />
            </MainLayout>
          }
        />
        <Route
          path='/teams/:teamsId'
          element={
            <MainLayout>
              <TeamsPage />
            </MainLayout>
          }
        />
        <Route
          path='/:locale/teams/:teamsId'
          element={
            <MainLayout>
              <TeamsPage />
            </MainLayout>
          }
        />
        <Route
          path='/*'
          onEnter={userRedirect}
          element={
            <PublicLayout>
              <PageNotFound />
            </PublicLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
