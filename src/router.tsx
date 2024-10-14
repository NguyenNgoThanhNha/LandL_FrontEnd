import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import { Suspense } from 'react'
import Loading from '@/components/templates/Loading.tsx'
import AdminTruckPage from './components/pages/Admin/AdminTruckPage'
import AdminCustomerPage from './components/pages/Admin/AdminCustomerPage'
import AdminOrderPage from './components/pages/Admin/AdminOrderPage'
import { useAuth } from './context/authContext'
import AuthCallbackPage from '@/components/pages/Auth0/AuthCallbackPage.tsx'
import SignupPage from '@/components/pages/Signup/SignupPage.tsx'
import ForgotPasswordPage from '@/components/pages/ForgotPassword/ForgotPasswordPage.tsx'
import LoginPage from '@/components/pages/Login/LoginPage.tsx'
import VerifyCodePage from '@/components/pages/VerifyCode/VerifyCodePage.tsx'
import SetPasswordPage from '@/components/pages/SetPassword/SetPasswordPage.tsx'
import HomeLayout from '@/components/templates/HomeLayout.tsx'
import MainLayout from '@/components/templates/MainLayout.tsx'
import ServicePage from '@/components/pages/Service/ServicePage.tsx'
import CostPage from '@/components/pages/Cost/CostPage.tsx'
import BlogPage from '@/components/pages/Blog/BlogPage.tsx'
import AboutUsPage from '@/components/pages/AboutUs/AboutUsPage.tsx'
import ProfilePage from '@/components/pages/Profile/ProfilePage.tsx'
import BlogDetailPage from '@/components/pages/Blog/BlogDetailPage.tsx'
import MyOrderPage from '@/components/pages/MyOrder/MyOrderPage.tsx'
import OrderDetailPage from '@/components/pages/OrderDetail/OrderDetailPage.tsx'
import AdminLayout from '@/components/templates/AdminLayout.tsx'
import DeleteAccountPage from '@/components/pages/DeleteAccount/DeleteAccountPage.tsx'

const AppRoutes = () => {
  const { auth } = useAuth()
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route path={ROUTES.DELETE_ACCOUT} element={<DeleteAccountPage />} />,
        <Route path={ROUTES.SIGN_UP} element={<SignupPage />} />,
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />,
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />,
        <Route path={ROUTES.VERIFY_CODE} element={<VerifyCodePage />} />,
        <Route path={ROUTES.SET_PASSWORD} element={<SetPasswordPage />} />,
        <Route path={ROUTES.ROOT} element={<HomeLayout />} />,
        <Route path={ROUTES.ROOT} element={<MainLayout />}>
          <Route path={ROUTES.CREATE_ORDER} element={<ServicePage />} />,
          <Route path={ROUTES.COST} element={<CostPage />} />,
          <Route path={ROUTES.BLOG} element={<BlogPage />} />,
          <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />,
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />,
          <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailPage />} />,
          <Route path={ROUTES.MY_ORDER} element={<MyOrderPage />} />,
          <Route path={ROUTES.ORDER_DETAIL_ID} element={<OrderDetailPage />} />,
        </Route>
        ,
        {auth.user?.roleID == 1 ? (
          <Route path={ROUTES.DASH_BOARD} element={<AdminLayout />}>
            <Route path={ROUTES.TRUCK} element={<AdminTruckPage />} />
            <Route path={ROUTES.CUSTOMER} element={<AdminCustomerPage />} />
            <Route path={ROUTES.ORDER} element={<AdminOrderPage />} />
          </Route>
        ) : (
          <Route path='*' element={<Navigate to='/' />} />
        )}
        {/* <Route path={ROUTES.DASH_BOARD} element={<AdminLayout />}>
          <Route path={ROUTES.TRUCK} element={<AdminTruckPage />} />
          <Route path={ROUTES.CUSTOMER} element={<AdminCustomerPage />} />
          <Route path={ROUTES.ORDER} element={<AdminOrderPage />} />
        </Route> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}
export default AppRoutes
