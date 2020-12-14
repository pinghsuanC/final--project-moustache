const Yes = ({ color, width, height }) => {
	return (
		<svg
			width={width ? width : "25px"}
			height={height ? height : "25px"}
			viewBox="0 0 16 16"
			className="bi bi-check"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
			/>
		</svg>
	);
};
export default Yes;
