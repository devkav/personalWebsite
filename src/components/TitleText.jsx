function TitleText(props) {
	const getDegrees = () => {
		let centerX = window.innerWidth / 2
		let centerY = window.innerHeight / 2
		let currentX = props.mouseX
		let currentY = props.mouseY
		let rise = centerY - currentY
		let run = currentX - centerX

		let radians = Math.atan(rise / run)
		let degrees = radians * (180 / Math.PI)

		if (run >= 0) {
			if (rise <= 0) {
				degrees += 360
			}
		} else {
			degrees += 180
		}

		degrees = Math.round(degrees)
		return degrees
	}

	return (
		<h1 className="welcome-text" style={{
			"backgroundImage": "-webkit-linear-gradient(" + getDegrees() + "deg, #7E3FF2, #f23fb3)",
			"backgroundClip": "text",
			"WebkitTextFillColor": "transparent"
		}}>
			{props.text}
		</h1>
	);
}

export default TitleText;