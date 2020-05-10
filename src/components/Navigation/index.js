import React, { useContext, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import AppAppBar from '~/theme/modules/views/AppAppBar';
import AppDrawer from '~/theme/modules/views/AppDrawer'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle, menuLinks }) => {
	const [hasItems, quantity] = useQuantity()
	const [drawerOpen, setDrawerOpen] = useState(false)
	return(
		<>
			<AppAppBar
				title={siteTitle}
				cart={{
					hasItems,
					quantity
				}}
				openClicked={() => setDrawerOpen(true)}
				links={menuLinks}
			/>
			<AppDrawer
				open={drawerOpen}
				onDrawerClose={() => setDrawerOpen(false)}
				links={menuLinks}
			/>
		</>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
