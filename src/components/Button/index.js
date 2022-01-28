import React from 'react'

export default function Button({func, text, numA, numB}) {
	return (
		<button onClick={() => func(numA, numB)}>
			{text}
		</button>
	)
}
