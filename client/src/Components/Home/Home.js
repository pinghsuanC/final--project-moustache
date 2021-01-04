import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { device, COLORS, IMGS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import { useMedia } from "../../Context/MediaContext";
import Item from "./Item";

const Home = () => {
	const { text } = useLan();
	const history = useHistory();
	const {
		homeTitle,
		homeSubTitle,
		homeReadMore,
		homeMiddleIntro,
		homeItems,
		homeMiddleDonate,
		homeDonation,
	} = text["home"]; // get the texts
	const m = useMedia(); // get the media
	console.log(m);

	return (
		<HomeWrapper>
			{/*Banner & title*/}
			<HomeBannerWrapper>
				<HomeTitleWrapper>
					<HomeTitle>{homeTitle}</HomeTitle>
					<HomeSubTitle>{homeSubTitle}</HomeSubTitle>
				</HomeTitleWrapper>
				<HomeBanner src={IMGS.cat_banner.src} />
				<HomeBannerInfo>
					Photo by &nbsp;
					<HomeBannerInfoLink href={IMGS.cat_banner.authorLink}>
						{IMGS.cat_banner.author}
					</HomeBannerInfoLink>
				</HomeBannerInfo>
			</HomeBannerWrapper>
			<HomeMiddle>{homeMiddleIntro}</HomeMiddle>
			{/*General Intro*/}
			<HomeIntroWrapper>
				<HomeIntroTitleWrapper>
					<HomeIntroTitle>{homeReadMore}</HomeIntroTitle>
				</HomeIntroTitleWrapper>
				<HomeIntroGrid>
					{Object.keys(homeItems).map((ele) => {
						return (
							<Item
								key={`homeItems-${ele}`}
								imgInfo={IMGS[ele]}
								itemInfo={homeItems[ele]}
								media={m}
							/>
						);
					})}
				</HomeIntroGrid>
				<HomeIntroImgInfo>
					Photo by &nbsp;
					<HomeIntroInfoImgLink href={IMGS.cat_intro.authorLink}>
						{IMGS.cat_intro.author}
					</HomeIntroInfoImgLink>
				</HomeIntroImgInfo>
			</HomeIntroWrapper>
			{/*Donation*/}
			<HomeMiddle>{homeMiddleDonate}</HomeMiddle>
			<HomeDonationWrapper>
				<HomeDonationTitle>{homeDonation.donate}</HomeDonationTitle>
				<HomeDonationBtn onClick={() => history.push("/donation")}>
					{homeDonation.button}
				</HomeDonationBtn>
				<HomeDonationImg src={IMGS.donation.src} />
				<HomeDonationInfo>
					Photo by &nbsp;
					<HomeDonationInfoLink href={IMGS.donation.authorLink}>
						{IMGS.donation.author}
					</HomeDonationInfoLink>
				</HomeDonationInfo>
			</HomeDonationWrapper>
		</HomeWrapper>
	);
};
const HomeWrapper = styled.div`
	overflow: hidden;
	height: auto;
	width: 100%;
	@media ${device.xs} {
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
	}
	@media ${device.lg} {
	}
`;
const HomeBannerWrapper = styled.div`
	position: relative;
`;

const HomeTitleWrapper = styled.div`
	position: absolute;
	z-index: 150;
	@media ${device.xs} {
		left: 45%;
		top: 40%;
	}
	@media ${device.sm} {
		left: 7%;
		top: 30%;
	}
	@media ${device.md} {
		left: 3%;
		top: 55%;
	}
	@media ${device.lg} {
		left: 5%;
		top: 15%;
	}
`;
const HomeTitle = styled.h1`
	color: ${COLORS.white};
	text-shadow: 2px 1px 6px rgba(255, 255, 255, 0.53);
	@media ${device.xs} {
		font-size: 2rem;
	}
	@media ${device.sm} {
		font-size: 5rem;
	}
	@media ${device.md} {
		font-size: 5rem;
	}
	@media ${device.lg} {
		font-size: 10rem;
	}
`;
const HomeSubTitle = styled.h3`
	color: ${COLORS.white};
	text-shadow: 2px 1px 6px rgba(255, 255, 255, 0.53);

	@media ${device.xs} {
	}
	@media ${device.sm} {
		font-size: 1.5rem;
	}
	@media ${device.md} {
		font-size: 2rem;
	}
	@media ${device.lg} {
		font-size: 3rem;
	}
`;

const HomeBanner = styled.img`
	object-fit: cover;
	overflow: hidden;
	position: relative;
	@media ${device.xs} {
		width: 500px;
		height: 150px;
		right: 170px;
	}
	@media ${device.sm} {
		height: 300px;
		width: 150%;
	}
	@media ${device.md} {
		height: 400px;
		width: 150%;
	}
	@media ${device.lg} {
		width: 150%;
		height: 650px;
	}
`;

const HomeBannerInfo = styled.div`
	width: auto;
	height: auto;
	text-align: left;
	position: absolute;
	color: ${COLORS.gray};
	left: 5px;
	bottom: 10px;
	color: ${COLORS.white};
	font-style: italic;
	@media ${device.sm} {
		font-size: 0.3em;
	}
	@media ${device.lg} {
		font-size: 0.8em;
	}
`;
const HomeBannerInfoLink = styled.a`
	text-decoration: none;
	color: ${COLORS.white};
	text-decoration: underline;
`;

// == middle ==
const HomeMiddle = styled.div`
	color: ${COLORS.white};
	height: auto;
	text-align: center;
	width: 90%;
	line-height: 25px;
	font-size: 1.5rem;
	padding-top: 100px;
	padding-bottom: 100px;
	padding-left: 60px;
	padding-right: 60px;
`;

//== intro ==
const HomeIntroWrapper = styled.div`
	position: relative;
	background-image: url(${IMGS.cat_intro.src});
	@media ${device.xs} {
		height: 700px;
	}
	@media ${device.sm} {
		height: 600px;
	}
	@media ${device.md} {
		height: 900px;
	}
	@media ${device.lg} {
		height: 1000px;
	}
`;
const HomeIntroImgInfo = styled(HomeBannerInfo)``;
const HomeIntroInfoImgLink = styled(HomeBannerInfoLink)``;
const HomeIntroTitleWrapper = styled(HomeTitleWrapper)`
	top: 30px;
	width: 90%;
	text-align: center;
	padding-left: 10px;
`;
const HomeIntroTitle = styled(HomeTitle)`
	color: black;
	text-align: center;
	@media ${device.xs} {
	}
	@media ${device.sm} {
		font-size: 3rem;
	}
	@media ${device.md} {
		font-size: 7rem;
	}
	@media ${device.lg} {
		font-size: 8rem;
	}
`;
const HomeIntroGrid = styled.div`
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 97%;
	left: 1.5%;
	@media ${device.xs} {
	}
	@media ${device.sm} {
		top: 130px;
	}
	@media ${device.md} {
		top: 240px;
	}
	@media ${device.lg} {
		top: 300px;
	}
`;

// == Donation ==
const HomeDonationWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const HomeDonationTitle = styled(HomeIntroTitle)`
	position: absolute;
	color: ${COLORS.white};
	z-index: 100;
	font-size: 2.5rem;
	width: 70%;
	@media ${device.xs} {
	}
	@media ${device.sm} {
		top: 250px;
	}
	@media ${device.md} {
		top: 250px;
	}
	@media ${device.lg} {
		top: 300px;
	}
`;
const HomeDonationImg = styled.img`
	width: 100%;
	height: 800px;
	object-fit: cover;
	overflow: hidden;
	position: relative;
`;
const HomeDonationBtn = styled.button`
	cursor: pointer;
	font-weight: 800;
	font-size: 2rem;
	width: 200px;
	height: 100px;
	position: absolute;
	z-index: 100;
	outline: none;
	text-transform: uppercase;
	text-decoration: none;
	border-radius: 15px;
	background: ${COLORS.orange};
	transition: all 0.3s ease 0s;

	@media ${device.xs} {
	}
	@media ${device.sm} {
		top: 470px;
	}
	@media ${device.md} {
		top: 400px;
	}
	@media ${device.lg} {
		top: 450px;
	}

	:focus {
		outline: none;
	}

	:hover {
		width: 250px;
		height: 100px;
		background: ${COLORS.paleYellow};
		letter-spacing: 1px;
		-webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
		-moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
		box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
		transition: all 0.3s ease 0s;
	}
`;
const HomeDonationInfo = styled(HomeBannerInfo)``;
const HomeDonationInfoLink = styled(HomeBannerInfoLink)``;

export default Home;
