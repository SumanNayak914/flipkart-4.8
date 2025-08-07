import React from "react";
import UserProfileCard from '../component/accountComponent/UserProfileCard'
import QuickActions from '../component/accountComponent/QuickActions';
import FinanceOptions from '../component/accountComponent/FinanceOptions';
import CreditOnUPI from '../component/accountComponent/CreditOnUPI';
import RecentlyViewedStores from '../component/accountComponent/RecentlyViewedStores';
import LanguageSelector from '../component/accountComponent/LanguageSelector';
import AccountSettings from '../component/accountComponent/AccountSettings';
import MyActivity from '../component/accountComponent/MyActivity';
import EarnWithFlipkart from '../component/accountComponent/EarnWithFlipkart';
import CustomerSupport from '../component/accountComponent/CustomerSupport';
import FooterButtons from '../component/accountComponent/FooterButtons';


const Account = () => {
  return <div className="bg-gray-100">
    <UserProfileCard />
    <QuickActions />
    <FinanceOptions />
    <CreditOnUPI />
    <RecentlyViewedStores />
    <LanguageSelector />
    <AccountSettings />
    <MyActivity />
    <EarnWithFlipkart />
    <CustomerSupport />
    <FooterButtons />
    
    </div>;
};

export default Account;