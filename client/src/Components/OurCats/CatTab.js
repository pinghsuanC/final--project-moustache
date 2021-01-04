import styled from "styled-components";
import { LOGOS, COLORS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const CatTab = ({ cat }) => {
	const { curLan } = useLan();
	const {
		catTabT: { appearance, health, friendly, click },
	} = useLan().text;
	
	const {
		photos,
		attributes,
		name,
		url,
		gender,
		environment,
		coat,
		colors,
	} = cat;

	return (
		<CatTabWrapper>
			<CatTabLeftWrapper>
				{photos ? (
					<CatTabPhoto src={photos[0].large} />
				) : (
					<CatTabPhoto src={LOGOS.Moustache_logo} />
				)}

				<CatTabGIName>
					<CatTabGiNameSub>{name}</CatTabGiNameSub>&nbsp;
					<CatTabGIGen>{getGenderLogo(gender)}</CatTabGIGen>
				</CatTabGIName>
			</CatTabLeftWrapper>
			<CatTabRightWrapper>
				<CatTabRightInner>
					<CatTabRightInnerTitle>{appearance.title}</CatTabRightInnerTitle>
					<CatTabRightUl>
						<CatTabRightLi>
							{appearance.hair}:{" "}
							{coat ? (
								coat.toLowerCase()
							) : (
								<LOGOS.Unknown
									type="regular"
									color={COLORS.black}
									size="20px"
								/>
							)}
						</CatTabRightLi>
						<CatTabRightLi>
							{appearance.colors}: {getColors(colors)}
						</CatTabRightLi>
					</CatTabRightUl>
				</CatTabRightInner>
				<CatTabHR />
				<CatTabRightInner>
					<CatTabRightInnerTitle>{health.title}</CatTabRightInnerTitle>
					<CatTabRightUl>
						<CatTabRightLi>
							{health.declaw}: {getYNLogo(attributes.declawed)}
						</CatTabRightLi>
						<CatTabRightLi>
							{health.house}: {getYNLogo(attributes.houase_trained)}
						</CatTabRightLi>
						<CatTabRightLi>
							{health.shot}: {getYNLogo(attributes.shots_current)}
						</CatTabRightLi>
						<CatTabRightLi>
							{health.sterilize}: {getYNLogo(attributes.spayed_neutered)}
						</CatTabRightLi>
						<CatTabRightLi>
							{health.special}: {getYNLogo(attributes.special_needs)}
						</CatTabRightLi>
					</CatTabRightUl>
				</CatTabRightInner>
				<CatTabHR />
				<CatTabRightInner>
					<CatTabRightInnerTitle>{friendly.title}</CatTabRightInnerTitle>
					<CatTabRightUl>
						<CatTabRightLi>
							{friendly.cats}: {getYNLogo(environment.cats)}
						</CatTabRightLi>
						<CatTabRightLi>
							{friendly.dogs}: {getYNLogo(environment.dogs)}
						</CatTabRightLi>
						<CatTabRightLi>
							{friendly.children}: {getYNLogo(environment.children)}
						</CatTabRightLi>
					</CatTabRightUl>
				</CatTabRightInner>
				<CatTabRightInner>
					<CatTabRightA href={url} gender={gender} target="_blank">
						<CatTabRightUl>
							<CatTabRightLi>
								{`${click.click0} ${curLan === "en" ? getGender(gender) : ""} ${
									click.click1
								}`}
							</CatTabRightLi>
							<CatTabRightLi>
								<LOGOS.ArrowRight
									type="regular"
									color={COLORS.white}
									size="25px"
								/>
							</CatTabRightLi>
						</CatTabRightUl>
					</CatTabRightA>
				</CatTabRightInner>
			</CatTabRightWrapper>
		</CatTabWrapper>
	);
};

const getColors = (v) => {
	let arr = Object.values(v);
	arr = arr
		.filter((ele) => {
			return ele !== null;
		})
		.map((ele) => ele.toLowerCase());

	return arr.join(", ");
};
const getYNLogo = (v) => {
	if (v === null) {
		return <LOGOS.Unknown type="regular" color={COLORS.black} size="20px" />;
	}
	if (v) {
		return <LOGOS.Yes type="regular" color={COLORS.green} size="30px" />;
	} else {
		return <LOGOS.No type="regular" color={COLORS.red} size="30px" />;
	}
};
const getGenderLogo = (v) => {
	if (v === "Male") {
		return <LOGOS.Male type="regular" color={COLORS.blue} size="20px" />;
	} else if (v === "Female") {
		return <LOGOS.Female type="regular" color={COLORS.pink} size="20px" />;
	} else {
		return <LOGOS.Unknown type="regular" color={COLORS.black} size="20px" />;
	}
};
const getGender = (v) => {
	if (v === "Male") {
		return "him";
	} else {
		return "her";
	}
};

const CatTabWrapper = styled.div`
	width: 600px;
	height: auto;
	min-height: 300px;
	display: flex;
	overflow: hidden;
	border-radius: 10px;
	margin-bottom: 10px;
	background: ${COLORS.gray};
	border: 3px solid ${COLORS.black};
	color: ${COLORS.black};
	text-align: center;
	:hover {
		-webkit-box-shadow: 0px 0px 12px 0px #000000;
		box-shadow: 0px 0px 12px 0px #000000;
		background: ${COLORS.lightgray};
	}
`;
const CatTabHR = styled.hr`
	border: 0;
	height: 1px;
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0.75),
		rgba(0, 0, 0, 0)
	);
`;
const CatTabLeftWrapper = styled.div`
	max-width: 300px;
	width: 300px;
	overflow: hidden;
	border: none;
	border-right: 2px solid ${COLORS.black};
`;
const CatTabPhoto = styled.img`
	width: 300px;
	height: 300px;
	object-fit: cover;
	overflow: hidden;
`;
const CatTabGIName = styled.div`
	width: 100%;
	height: auto;
	margin: 10px;
	font-weight: 600;
	font-size: 1.3rem;
	overflow-wrap: normal;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CatTabGiNameSub = styled.div`
	width: 75%;
`;
const CatTabGIGen = styled.div``;
const CatTabRightWrapper = styled.div`
	width: 300px;
	height: 100%;
	padding-left: 5px;
	padding-right: 5px;
	outline: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const CatTabRightInner = styled.div`
	width: 300px;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
const CatTabRightUl = styled.ul`
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	list-style-type: none;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`;
const CatTabRightInnerTitle = styled.div`
	padding-top: 10px;
	text-decoration: underline;
`;
const CatTabRightLi = styled.li`
	display: flex;
	align-items: center;
	margin-top: 5px;
`;
const CatTabRightA = styled.a`
	border-radius: 10px;
	background: ${COLORS.darkPurple};
	padding: 10px;
	line-height: 28px;
	padding-top: 0px;
	color: white;
	cursor: pointer;
	text-decoration: none;
	margin-bottom: 3px;
	transition: background 0.3s;

	:hover {
		background: ${(prop) =>
			prop.gender === "Male" ? COLORS.blue : COLORS.pink};
	}
`;

const CatTabBtn = styled.button``;
export default CatTab;
