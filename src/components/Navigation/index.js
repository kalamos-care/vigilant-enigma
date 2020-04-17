import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import {
	CartCounter,
	Columns,
	Container,
	NavLink,
	MenuLink,
	Rows,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
				<Columns>
					<MenuLink to='/'>
						{siteTitle}
					</MenuLink>
					<Rows>
						<NavLink to="/register-kit">Register Kit</NavLink>
						<NavLink to="/get-tested">Get Tested</NavLink>
						<NavLink to="/account/order-history">Order History</NavLink>
					</Rows>
				</Columns>
				<MenuLink to='/cart'>
					{hasItems &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					Cart 🛍
				</MenuLink>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
