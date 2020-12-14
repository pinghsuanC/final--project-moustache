import styled from "styled-components";
import react from "react";
import { device, COLORS, IMGS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import GoToBtn from "../Reusable/GoToBtn";
import Item from "./Item";

const Home = () => {
	const { text } = useLan();
	const {
		homeTitle,
		homeSubTitle,
		homeReadMore,
		homeMiddleIntro,
		homeItems,
		homeMiddleDonate,
		homeDonation,
	} = text["home"]; // get the texts

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
				<HomeIntroImg src={IMGS.cat_intro.src} />
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
				<HomeDonationBtn>{homeDonation.button}</HomeDonationBtn>
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
	z-index: 1000;
	@media ${device.xs} {
		left: 45%;
		top: 40%;
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
	}
	@media ${device.lg} {
		left: 7%;
		top: 30%;
	}
`;
const HomeTitle = styled.h1`
	color: ${COLORS.white};
	text-shadow: 2px 1px 6px rgba(255, 255, 255, 0.53);
	@media ${device.xs} {
		font-size: 2rem;
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
	}
	@media ${device.lg} {
		font-size: 8rem;
	}
`;
const HomeSubTitle = styled.h3`
	color: ${COLORS.white};
	text-shadow: 2px 1px 6px rgba(255, 255, 255, 0.53);
	font-size: 2rem;
`;

const HomeBanner = styled.img`
	width: 100%;
	object-fit: cover;
	overflow: hidden;
	position: relative;
	@media ${device.xs} {
		width: 500px;
		height: 150px;
		right: 170px;
	}
	@media ${device.lg} {
		width: 150%;
		height: 700px;
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
	height: 200px;
	width: 100%;
	line-height: 200px;
	font-size: 1.5rem;
`;

//== intro ==
const HomeIntroWrapper = styled.div`
	position: relative;

	@media ${device.xs} {
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
	}
	@media ${device.lg} {
	}
`;
const HomeIntroImg = styled.img`
	object-fit: cover;
	width: 100%;
	overflow: hidden;
	@media ${device.xs} {
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
	}
	@media ${device.lg} {
		height: 1200px;
	}
`;
const HomeIntroImgInfo = styled(HomeBannerInfo)``;
const HomeIntroInfoImgLink = styled(HomeBannerInfoLink)``;
const HomeIntroTitleWrapper = styled(HomeTitleWrapper)`
	top: 200px;
`;
const HomeIntroTitle = styled(HomeTitle)`
	width: 100%;
	color: black;
`;
const HomeIntroGrid = styled.div`
	position: absolute;
	top: 450px;
	display: flex;
	flex-wrap: wrap;
	width: 95%;
	left: 2.5%;
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
	z-index: 1000;
	font-size: 3rem;
	top: 300px;
	width: 70%;
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
	z-index: 900;
	top: 450px;
	outline: none;
	text-transform: uppercase;
	text-decoration: none;
	border-radius: 15px;
	background: ${COLORS.orange};
	transition: all 0.3s ease 0s;

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
