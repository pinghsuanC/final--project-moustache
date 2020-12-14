import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
import { useLan } from "../../Context/LanguageContext";
import { COLORS, ip } from "../../constants";
import Loading from "../Reusable/Loading";
import CatTab from "./CatTab";
import ErrorPage from "../Reusable/ErrorPage";

const OurCats = () => {
	// language context
	const { ourcatsT } = useLan().text;
	// redux & redux vars
	const dispatch = useDispatch();
	const { pfActions } = allActions;
	const animals = useSelector((state) => state.pfReducer.animals);
	const adoptedCount = useSelector((state) => state.pfReducer.adoptedCount);
	const status = useSelector((state) => state.pfReducer.status);
	//console.log(status);

	// retrieve info
	useEffect(() => {
		// steps to get the data
		// 1. get token
		// 2. get adoptable cat info
		// 3. get total cat adopted through orga

		const scheduler = [
			async () => {
				try {
					const data = await fetch(`${ip}/api/petfinder/token`).then((info) =>
						info.json()
					);
					return data;
				} catch (err) {
					console.log(err);
					throw new Error();
				}
			},
			async () => {
				try {
					const data = await fetch(
						`${ip}/api/petfinder/moustache/animals`
					).then((info) => info.json());
					return data;
				} catch (err) {
					console.log(err);
					throw new Error();
				}
			},
			async () => {
				try {
					const data = await fetch(
						`${ip}/api/petfinder/moustache/adoptedCount`
					).then((info) => info.json());
					return data;
				} catch (err) {
					console.log(err);
					throw new Error();
				}
			},
		];
		const scheduler_task = [
			{
				request: pfActions.getPfToken,
				success: (token) => pfActions.receivePfAccessToken(token),
				error: pfActions.receivePfAccessTokenErr,
			},
			{
				request: pfActions.getPfAnimals,
				success: (animals) => pfActions.receivePfAnimals(animals),
				error: pfActions.receivePfAnimalsErr,
			},
			{
				request: pfActions.getPfAdoptedCount,
				success: (count) => pfActions.receivePfAdoptedCount(count),
				error: pfActions.receivePfAdoptedCountErr,
			},
		];

		// go through the scheduler and the tasks only if no data was found locally
		if (status === "initial") {
			scheduler.reduce((acc, ele, ind) => {
				dispatch(scheduler_task[ind].request());
				ele()
					.then((info) => {
						//console.log(info);
						if (info.success) {
							dispatch(scheduler_task[ind].success(info.data));
						} else {
							console.log(info.message);
							dispatch(scheduler_task[ind].error());
						}
					})
					.catch((err) => {
						console.log(err);
						dispatch(scheduler_task[ind].error());
					});
			}, []);
		}
	}, []);

	if (!animals || status === "loading" || status === "initial") {
		return (
			<OurCatsWrapper>
				<Loading />
			</OurCatsWrapper>
		);
	}

	return status === "idle" ? (
		<OurCatsWrapper>
			<OurCatsSuccess>
				{ourcatsT.success[0]}&nbsp;
				<OurCatSuccessNum href="https://www.petfinder.com/search/pets-adopted/?shelter_id%5B0%5D=QC64&sort%5B0%5D=recently_added">
					{adoptedCount}
				</OurCatSuccessNum>
				&nbsp;{ourcatsT.success[1]}
			</OurCatsSuccess>
			<OurCatsAdoptable>{ourcatsT.adoptable}</OurCatsAdoptable>
			<OurCatsGrid>
				{animals.map((ele) => {
					return <CatTab key={`cat-${ele.id}`} cat={ele} />;
				})}
			</OurCatsGrid>
		</OurCatsWrapper>
	) : (
		<OurCatsWrapper>
			<ErrorPage />
		</OurCatsWrapper>
	);
};

const OurCatsWrapper = styled.div`
	padding-top: 100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	color: ${COLORS.white};
`;
const OurCatsSuccess = styled.div`
	width: 90%;
	height: auto;
	font-size: 2.5rem;
	border: 1px solid ${COLORS.white};
	border-radius: 10px;
	margin: 20px;
	padding: 10px;
	-webkit-box-shadow: 0px 0px 12px 0px #000000;
	box-shadow: 0px 0px 12px 0px #000000;
`;
const OurCatSuccessNum = styled.a`
	font-style: italic;
	color: ${COLORS.lightYellow};
	text-decoration: none;
	text-decoration: underline;
`;
const OurCatsAdoptable = styled.div`
	width: 50%;
	font-size: 1.5rem;
	margin: 40px;
	line-height: 40px;
`;
const OurCatsGrid = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
export default OurCats;
