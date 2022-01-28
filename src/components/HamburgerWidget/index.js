import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HamburguerWidget({icon, showSideDrawer}) {
	return (
		<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={showSideDrawer} className="icon-size" icon={icon} />
	)
}
