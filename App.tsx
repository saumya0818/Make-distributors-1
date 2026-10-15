import React, { useState, useEffect } from 'react';
import { db } from './services/db';
import { authService } from './services/auth';
import { BrandOpportunity, DistributorProfile, Category, ResourceArticle } from './types';
import { RESOURCE_ARTICLES } from './data/sampleResources';

// Layout & Global Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SEOHelmet from './components/layout/SEOHelmet';

// Homepage Sections
import HeroSection from './components/home/HeroSection';
import QuickRequirementSection from './components/home/QuickRequirementSection';
import MarketplaceShowcaseSection from './components/home/MarketplaceShowcaseSection';
import AdvertisementBannersSection from './components/home/AdvertisementBannersSection';
import DistributorLeadsSection from './components/home/DistributorLeadsSection';
import RecommendedBrandsSection from './components/home/RecommendedBrandsSection';
import SuppliersSection from './components/home/SuppliersSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import CommercialLocationNetworkSection from './components/home/CommercialLocationNetworkSection';
import FloatingContactWidgets from './components/layout/FloatingContactWidgets';

// Modals
import GlobalCommandSearch from './components/modals/GlobalCommandSearch';
import OpportunityComparisonModal from './components/modals/OpportunityComparisonModal';
import EnquiryModal from './components/modals/EnquiryModal';
import AuthModal from './components/modals/AuthModal';
import PostRequirementModal from './components/modals/PostRequirementModal';
import LatestUpdatesModal from './components/modals/LatestUpdatesModal';
import WelcomeGrowModal from './components/modals/WelcomeGrowModal';
import WelcomePopup from './components/modals/WelcomePopup';

// Dedicated Pages
import BrowseOpportunitiesPage from './components/pages/BrowseOpportunitiesPage';
import OpportunityDetailPage from './components/pages/OpportunityDetailPage';
import ShowcaseDetailPage from './components/pages/ShowcaseDetailPage';
import DistributorsDirectoryPage from './components/pages/DistributorsDirectoryPage';
import DistributorDetailPage from './components/pages/DistributorDetailPage';
import ResourcesDirectoryPage from './components/pages/ResourcesDirectoryPage';
import ResourceArticlePage from './components/pages/ResourceArticlePage';
import CategoriesDirectoryPage from './components/pages/CategoriesDirectoryPage';
import CategoryDetailPage from './components/pages/CategoryDetailPage';
import BrandDashboardPage from './components/pages/BrandDashboardPage';
import DistributorDashboardPage from './components/pages/DistributorDashboardPage';
import AdminModerationDeskPage from './components/pages/AdminModerationDeskPage';
import {
  AboutPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsPage,
  FaqPage,
} from './components/pages/StaticPages';
import {
  CreateBrandProfilePage,
  PostOpportunityPage,
  ReceiveEnquiriesPage,
  ScaleSalesCorridorsPage,
  RegisterDistributorPage,
  BuildBrandDigitalProcessPage,
} from './components/pages/HowItWorksStepsPages';
import StateTerritoryDetailPage from './components/pages/StateTerritoryDetailPage';
import BuildDigitalBrandLandingPage from './components/pages/BuildDigitalBrandLandingPage';
import DigitalBrandFeatureDetailPage from './components/pages/DigitalBrandFeatureDetailPage';
import AppointStockistPage from './components/pages/AppointStockistPage';

import { Layers, X } from 'lucide-react';

export function App() {
  // Navigation Path
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return (window.location.pathname || '/') + (window.location.search || '');
  });

  // State
  const [opportunities, setOpportunities] = useState<BrandOpportunity[]>(() => db.getOpportunities());
  const [distributors, setDistributors] = useState<DistributorProfile[]>(() => db.getDistributors());
  const [categories] = useState<Category[]>(() => db.getCategories());
  const [savedOpportunityIds, setSavedOpportunityIds] = useState<string[]>(() => db.getSavedOpportunityIds());

  // Comparison drawer state
  const [comparedOpportunities, setComparedOpportunities] = useState<BrandOpportunity[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Search filter query state passed from Hero
  const [heroSearchParams, setHeroSearchParams] = useState<{
    query?: string;
    category?: string;
    state?: string;
    investment?: string;
  }>({});

  // Active Role filter passed from footer or role explorer
  const [activeRoleFilter, setActiveRoleFilter] = useState('');

  // Modal Visibility
  const [isCommandSearchOpen, setIsCommandSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [isLatestUpdatesModalOpen, setIsLatestUpdatesModalOpen] = useState(false);
  const [enquiryTargetOpp, setEnquiryTargetOpp] = useState<BrandOpportunity | null>(null);
  const [enquiryTargetDist, setEnquiryTargetDist] = useState<DistributorProfile | null>(null);

  // Sync DB changes across browser tabs & events
  useEffect(() => {
    const handleDbUpdate = () => {
      setOpportunities(db.getOpportunities());
      setDistributors(db.getDistributors());
      setSavedOpportunityIds(db.getSavedOpportunityIds());
    };
    window.addEventListener('nake_db_update', handleDbUpdate);
    return () => window.removeEventListener('nake_db_update', handleDbUpdate);
  }, []);

  // Handle browser popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname || '/') + (window.location.search || ''));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Save
  const handleToggleSave = (oppId: string) => {
    db.toggleSaveOpportunity(oppId);
    setSavedOpportunityIds(db.getSavedOpportunityIds());
  };

  // Toggle Compare (Max 3)
  const handleToggleCompare = (opp: BrandOpportunity) => {
    if (comparedOpportunities.some((o) => o.id === opp.id)) {
      setComparedOpportunities(comparedOpportunities.filter((o) => o.id !== opp.id));
    } else {
      if (comparedOpportunities.length >= 3) {
        alert('You can compare a maximum of 3 opportunities simultaneously.');
        return;
      }
      setComparedOpportunities([...comparedOpportunities, opp]);
    }
  };

  const handleHeroSearch = (params: { query?: string; category?: string; state?: string; investment?: string }) => {
    setHeroSearchParams(params);
    navigateTo('/opportunities');
  };

  const handleOpenEnquiryOpp = (opp: BrandOpportunity) => {
    setEnquiryTargetDist(null);
    setEnquiryTargetOpp(opp);
  };

  const handleOpenEnquiryDist = (dist: DistributorProfile) => {
    setEnquiryTargetOpp(null);
    setEnquiryTargetDist(dist);
  };

  // Routing renderer
  const renderCurrentView = () => {
    const [pathOnly, searchString] = currentPath.split('?');
    const queryParams = new URLSearchParams(searchString || '');

    // 1. Single Opportunity Detail Page: /opportunities/:slug
    if (pathOnly.startsWith('/opportunities/') && pathOnly !== '/opportunities') {
      const slug = pathOnly.replace('/opportunities/', '');
      return (
        <OpportunityDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenEnquiry={handleOpenEnquiryOpp}
          onSelectSimilar={(simSlug) => navigateTo(`/opportunities/${simSlug}`)}
        />
      );
    }

    // 1.1 Brand Detail Page: /brand/:slug
    if (pathOnly.startsWith('/brand/')) {
      const slug = pathOnly.replace('/brand/', '');
      return (
        <ShowcaseDetailPage
          slugOrId={slug}
          itemType="brand"
          onNavigate={navigateTo}
        />
      );
    }

    // 1.2 Distributor Lead Detail Page: /lead/:id
    if (pathOnly.startsWith('/lead/')) {
      const id = pathOnly.replace('/lead/', '');
      return (
        <ShowcaseDetailPage
          slugOrId={id}
          itemType="lead"
          onNavigate={navigateTo}
        />
      );
    }

    // 1.3 Brand Requirement Detail Page: /requirement/:id
    if (pathOnly.startsWith('/requirement/')) {
      const id = pathOnly.replace('/requirement/', '');
      return (
        <ShowcaseDetailPage
          slugOrId={id}
          itemType="requirement"
          onNavigate={navigateTo}
        />
      );
    }

    // 2. Single Distributor Detail Page: /distributors/:slug
    if (pathOnly.startsWith('/distributors/') && pathOnly !== '/distributors') {
      const slug = pathOnly.replace('/distributors/', '');
      return (
        <DistributorDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenEnquiry={handleOpenEnquiryDist}
        />
      );
    }

    // 3. Single Resource Article: /resources/:slug
    if (pathOnly.startsWith('/resources/') && pathOnly !== '/resources') {
      const slug = pathOnly.replace('/resources/', '');
      return (
        <ResourceArticlePage
          slug={slug}
          onNavigate={navigateTo}
          onSelectArticle={(artSlug) => navigateTo(`/resources/${artSlug}`)}
        />
      );
    }

    // 4. Main Browse Opportunities Page
    if (pathOnly === '/opportunities') {
      const urlCategory = queryParams.get('category') || heroSearchParams.category;
      const urlQuery = queryParams.get('query') || heroSearchParams.query;
      const urlState = queryParams.get('state') || heroSearchParams.state;
      const urlInvestment = queryParams.get('investment') || heroSearchParams.investment;
      return (
        <BrowseOpportunitiesPage
          opportunities={opportunities}
          savedIds={savedOpportunityIds}
          comparedIds={comparedOpportunities.map((o) => o.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onViewOpportunity={(slug) => navigateTo(`/opportunities/${slug}`)}
          onSendEnquiry={handleOpenEnquiryOpp}
          initialCategory={urlCategory}
          initialQuery={urlQuery}
          initialState={urlState}
          initialInvestment={urlInvestment}
        />
      );
    }

    // 5. Distributors Directory
    if (pathOnly === '/distributors') {
      const urlRole = queryParams.get('role') || activeRoleFilter;
      return (
        <DistributorsDirectoryPage
          distributors={distributors}
          onViewProfile={(slug) => navigateTo(`/distributors/${slug}`)}
          onSendEnquiry={handleOpenEnquiryDist}
          initialRole={urlRole}
        />
      );
    }

    // 6. Categories Directory & Single Category Detail Page
    if (pathOnly.startsWith('/category/') && pathOnly !== '/category') {
      const catSlug = pathOnly.replace('/category/', '');
      return (
        <CategoryDetailPage
          categorySlugOrName={catSlug}
          onNavigate={navigateTo}
          onOpenRequirement={(cat) => setIsRequirementModalOpen(true)}
          onOpenEnquiryOpp={handleOpenEnquiryOpp}
          onOpenEnquiryDist={handleOpenEnquiryDist}
        />
      );
    }

    if (pathOnly === '/categories') {
      return (
        <CategoriesDirectoryPage
          onSelectCategory={(catName) => {
            navigateTo(`/category/${encodeURIComponent(catName)}`);
          }}
        />
      );
    }

    // 7. Resource Knowledge Centre
    if (pathOnly === '/resources') {
      return (
        <ResourcesDirectoryPage
          onSelectArticle={(slug) => navigateTo(`/resources/${slug}`)}
          onNavigate={navigateTo}
        />
      );
    }

    // 8. Static Informational & Legal Pages
    if (pathOnly === '/about') return <AboutPage onNavigate={navigateTo} />;
    if (pathOnly === '/contact') return <ContactPage onNavigate={navigateTo} />;
    if (pathOnly === '/privacy') return <PrivacyPolicyPage onNavigate={navigateTo} />;
    if (pathOnly === '/terms') return <TermsPage onNavigate={navigateTo} />;
    if (pathOnly === '/faq') return <FaqPage onNavigate={navigateTo} />;
    if (pathOnly === '/how-it-works') {
      return (
        <div className="py-12 bg-white">
          <HowItWorksSection
            onNavigate={navigateTo}
            onOpenRequirement={() => setIsRequirementModalOpen(true)}
            onGetStarted={() => setIsRequirementModalOpen(true)}
          />
        </div>
      );
    }

    // 9. Simple 4 Steps Dedicated Onboarding & Corridor Pages
    if (pathOnly === '/create-brand-profile') {
      return (
        <CreateBrandProfilePage
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      );
    }

    if (pathOnly === '/post-opportunity') {
      return (
        <PostOpportunityPage
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      );
    }

    if (pathOnly === '/receive-enquiries') {
      return (
        <ReceiveEnquiriesPage
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      );
    }

    if (pathOnly === '/scale-sales-corridors') {
      return (
        <ScaleSalesCorridorsPage
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      );
    }

    if (pathOnly === '/register-distributor') {
      return (
        <RegisterDistributorPage
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      );
    }

    // Dedicated Full Page: Appoint Super Stockists & C&F Agents
    if (
      pathOnly === '/appoint-stockist' ||
      pathOnly === '/appoint-stockists' ||
      pathOnly === '/appoint-distributor' ||
      pathOnly.startsWith('/appoint-stockist/')
    ) {
      const stateFromSlug = pathOnly.startsWith('/appoint-stockist/')
        ? decodeURIComponent(pathOnly.replace('/appoint-stockist/', ''))
        : (queryParams.get('state') || undefined);
      return (
        <AppointStockistPage
          onNavigate={navigateTo}
          initialState={stateFromSlug}
        />
      );
    }

    // Step 5: Build Digital Brand Landing Page
    if (pathOnly === '/build-digital-brand' || pathOnly === '/build-brand-digital') {
      return (
        <BuildDigitalBrandLandingPage
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      );
    }

    // Dedicated Turnkey Scope Feature Detail Page: /digital-brand/feature/:slug or /digital-brand/:slug
    if (pathOnly.startsWith('/digital-brand/feature/') || (pathOnly.startsWith('/digital-brand/') && pathOnly !== '/digital-brand')) {
      const featureSlug = pathOnly.replace('/digital-brand/feature/', '').replace('/digital-brand/', '').trim();
      return (
        <DigitalBrandFeatureDetailPage
          slug={featureSlug}
          onNavigate={navigateTo}
        />
      );
    }

    // Dedicated State & Territory Districts Detail Pages: /state/:slug or /territory/:slug or /states
    if (pathOnly.startsWith('/state/') || pathOnly.startsWith('/territory/') || pathOnly === '/states' || pathOnly === '/territories') {
      const slug = (pathOnly === '/states' || pathOnly === '/territories')
        ? 'maharashtra'
        : pathOnly.replace('/state/', '').replace('/territory/', '').trim();
      const districtParam = queryParams.get('district') || undefined;
      return (
        <StateTerritoryDetailPage
          stateSlug={slug}
          selectedDistrictName={districtParam}
          onNavigate={navigateTo}
          onOpenRequirement={(territoryName) => {
            setIsRequirementModalOpen(true);
          }}
          onOpenEnquiry={handleOpenEnquiryDist}
        />
      );
    }

    // 10. Dashboards
    if (pathOnly === '/dashboard/brand') {
      return (
        <BrandDashboardPage
          onNavigate={navigateTo}
          onViewOpportunity={(slug) => navigateTo(`/opportunities/${slug}`)}
        />
      );
    }

    if (pathOnly === '/dashboard/distributor') {
      return (
        <DistributorDashboardPage
          onNavigate={navigateTo}
          onViewOpportunity={(slug) => navigateTo(`/opportunities/${slug}`)}
        />
      );
    }

    if (pathOnly === '/dashboard/admin') {
      return <AdminModerationDeskPage />;
    }

    // Default: Full Homepage (Structured in exact requested order for new users)
    return (
      <main>
        {/* 1. SEO Head */}
        <SEOHelmet
          title="Make Distributors – Where Brands Meet Growth Partners."
          description="Connect brands, manufacturers, wholesalers, suppliers, and distributors through Make Distributors. Where Brands Meet Growth Partners."
        />

        {/* 2. Main Flowing Marketplace Showcase (Positioned at top of first page, with single category slide, dominant center showcase, and right enquiry form) */}
        <MarketplaceShowcaseSection
          onNavigate={navigateTo}
          onOpenRequirementModal={() => setIsRequirementModalOpen(true)}
          onOpenLatestUpdates={() => setIsLatestUpdatesModalOpen(true)}
        />

        {/* 3. Dual Advertisement Banners / Verified Deal Flow */}
        <AdvertisementBannersSection
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />

        {/* 4. Recommended Brands grid */}
        <RecommendedBrandsSection
          opportunities={opportunities}
          savedIds={savedOpportunityIds}
          onToggleSave={handleToggleSave}
          onViewOpportunity={(slug) => navigateTo(`/opportunities/${slug}`)}
          onSendEnquiry={handleOpenEnquiryOpp}
          onViewAll={() => navigateTo('/opportunities')}
        />

        {/* 6. Suppliers grid */}
        <SuppliersSection
          suppliers={distributors}
          onViewProfile={(slug) => navigateTo(`/distributors/${slug}`)}
          onSendEnquiry={handleOpenEnquiryDist}
          onViewAll={() => navigateTo('/distributors')}
        />

        {/* 7. How It Works (very simple, 3–4 steps) */}
        <HowItWorksSection
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
          onGetStarted={() => setIsRequirementModalOpen(true)}
        />

        {/* 8. 3D Commercial Location Network & Trade Corridors at the bottom of the homepage */}
        <CommercialLocationNetworkSection
          onNavigate={navigateTo}
          onOpenRequirement={() => setIsRequirementModalOpen(true)}
        />
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F2F55] font-sans selection:bg-amber-400/30 selection:text-[#0F2F55]">
      {/* Global Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenAuth={(mode) => {
          setAuthMode(mode || 'login');
          setIsAuthModalOpen(true);
        }}
        onOpenRequirement={() => setIsRequirementModalOpen(true)}
        onOpenCommandSearch={() => setIsCommandSearchOpen(true)}
        onOpenLatestUpdates={() => setIsLatestUpdatesModalOpen(true)}
        onSearch={handleHeroSearch}
      />

      {/* Main Routed Page View */}
      <div className="flex-1 bg-white">{renderCurrentView()}</div>

      {/* Latest Updates Live Drawer / Modal */}
      <LatestUpdatesModal
        isOpen={isLatestUpdatesModalOpen}
        onClose={() => setIsLatestUpdatesModalOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Floating Comparison Drawer (When 1-3 opportunities selected) */}
      {comparedOpportunities.length > 0 && (
        <div className="fixed bottom-5 right-5 z-40 bg-white text-[#0A2540] border-2 border-amber-400 p-3.5 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A2540] text-amber-300 font-black flex items-center justify-center text-xs border border-amber-400">
              {comparedOpportunities.length}
            </div>
            <div>
              <div className="text-xs font-bold text-[#0A2540]">Comparing Brands</div>
              <div className="text-[10px] text-slate-500">Up to 3 side-by-side</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs cursor-pointer shadow-sm border border-amber-300"
            >
              Compare Now
            </button>
            <button
              onClick={() => setComparedOpportunities([])}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer"
              title="Clear comparison selection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenRequirement={() => setIsRequirementModalOpen(true)}
      />

      {/* Global Command Search Modal (⌘K) */}
      <GlobalCommandSearch
        isOpen={isCommandSearchOpen}
        onClose={() => setIsCommandSearchOpen(false)}
        opportunities={opportunities}
        categories={categories}
        distributors={distributors}
        resources={RESOURCE_ARTICLES}
        onSelectOpportunity={(slug) => navigateTo(`/opportunities/${slug}`)}
        onSelectCategory={(slug) => {
          const cat = categories.find((c) => c.slug === slug);
          setHeroSearchParams({ category: cat?.name });
          navigateTo('/opportunities');
        }}
        onSelectDistributor={(slug) => navigateTo(`/distributors/${slug}`)}
        onSelectResource={(slug) => navigateTo(`/resources/${slug}`)}
      />

      {/* Comparison Modal */}
      <OpportunityComparisonModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        opportunities={comparedOpportunities}
        onRemove={(id) => setComparedOpportunities(comparedOpportunities.filter((o) => o.id !== id))}
        onSendEnquiry={handleOpenEnquiryOpp}
        onViewDetails={(slug) => navigateTo(`/opportunities/${slug}`)}
      />

      {/* Direct Enquiry Modal */}
      <EnquiryModal
        isOpen={!!enquiryTargetOpp || !!enquiryTargetDist}
        onClose={() => {
          setEnquiryTargetOpp(null);
          setEnquiryTargetDist(null);
        }}
        targetOpportunity={enquiryTargetOpp}
        targetDistributor={enquiryTargetDist}
      />

      {/* Auth Modal (Login / Signup / Password Reset) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />

      {/* Fast Requirement Modal */}
      <PostRequirementModal
        isOpen={isRequirementModalOpen}
        onClose={() => setIsRequirementModalOpen(false)}
      />

      {/* Welcome B2B Popup Modal ("Looking for distributors" & "Become a distributor") with 0.5s auto-open and real photo slideshow */}
      <WelcomePopup />

      {/* Floating WhatsApp, Support Chat, and TOP Scroll widgets matching Screenshots 1 & 2 */}
      <FloatingContactWidgets
        onOpenEnquiry={() => setIsRequirementModalOpen(true)}
      />
    </div>
  );
}

export default App;
