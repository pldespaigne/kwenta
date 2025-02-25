import Head from 'next/head'
import { ReactNode, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { MobileHiddenView, MobileOnlyView } from 'components/Media'
import Spacer from 'components/Spacer'
import DashboardLayout from 'sections/dashboard/DashboardLayout'
import HistoryTabs, { HistoryTab } from 'sections/dashboard/HistoryTabs'
import TradesTab from 'sections/futures/MobileTrade/UserTabs/TradesTab'
import { usePollDashboardFuturesData } from 'state/futures/hooks'

type HistoryPageProps = React.FC & { getLayout: (page: ReactNode) => JSX.Element }

const HistoryPage: HistoryPageProps = () => {
	const { t } = useTranslation()

	usePollDashboardFuturesData()

	const [currentTab, setCurrentTab] = useState(HistoryTab.Positions)

	const handleChangeTab = useCallback(
		(tab: HistoryTab) => () => {
			setCurrentTab(tab)
		},
		[]
	)

	return (
		<>
			<Head>
				<title>{t('dashboard-history.page-title')}</title>
			</Head>
			<MobileHiddenView>
				<Spacer height={10} />
				<HistoryTabs onChangeTab={handleChangeTab} currentTab={currentTab} />
				<Spacer height={50} />
			</MobileHiddenView>
			<MobileOnlyView>
				<TradesTab />
			</MobileOnlyView>
		</>
	)
}

HistoryPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default HistoryPage
