import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate
} from 'react-router-dom'

const SharedPageTemplate = lazy(() => import('src/shared/SharedPageTemplate'))
const LandingPage = lazy(() => import('src/landing/LandingPage'))
const DashboardPage = lazy(() => import('src/dashboard/DashboardPage'))
const ProfilePage = lazy(() => import('src/profile/ProfilePage'))

const ChallengePage = lazy(() => import('src/challenges/pages/ChallengePage'))
const ChallengeFormPage = lazy(
  () => import('src/challenges/pages/ChallengeFormPage')
)
const ChallengeListPage = lazy(
  () => import('src/challenges/pages/ChallengeListPage')
)

const ResultPage = lazy(() => import('src/results/pages/ResultPage'))
const ResultListPage = lazy(() => import('src/results/pages/ResultListPage'))

const LoginPage = lazy(() => import('src/auth/pages/LoginPage'))
const RegisterPage = lazy(() => import('src/auth/pages/RegisterPage'))

export const Routes = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<SharedPageTemplate />}>
            <Route index element={<LandingPage />} />
            <Route path="challenge">
              <Route path=":challengeId">
                <Route path="edit" element={<ChallengeFormPage />} />
                <Route index element={<ChallengePage />} />
              </Route>
              <Route path="new" element={<ChallengeFormPage />} />
              <Route index element={<Navigate to="/challenges" />} />
            </Route>
            <Route path="challenges" element={<ChallengeListPage />} />

            <Route path="result">
              <Route path=":resultId" element={<ResultPage />} />
              <Route index element={<Navigate to="/results" />} />
            </Route>
            <Route path="results" element={<ResultListPage />} />

            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </ReactRoutes>
      </BrowserRouter>
    </Suspense>
  )
}
