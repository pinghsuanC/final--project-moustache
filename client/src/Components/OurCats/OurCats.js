import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
import { useLan } from "../../Context/LanguageContext";
import { COLORS, ip, LINKSADDED } from "../../constants";
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
	const tokenPF = useSelector((state) => state.pfReducer.token);

	//console.log(status);
	useEffect(() => {
		// get tokenPF
		const getToken = async () => {
			try {
				let info = await fetch(`${ip}/api/petfinder/token`);
				info = await info.json();
				return info;
			} catch (err) {
				console.log(err);
				throw new Error();
			}
		};
		const scheduler_task = {
			request: pfActions.getPfToken,
			success: pfActions.receivePfAccessToken,
			error: pfActions.receivePfAccessTokenErr,
		};
		const getTokenProcess = async () => {
			dispatch(scheduler_task.request());
			try {
				const d = await getToken();
				if (d.success) {
					dispatch(scheduler_task.success());
				} else {
					console.log(d.message);
					dispatch(scheduler_task.error());
				}
			} catch (err) {
				console.log(err);
				dispatch(scheduler_task.error());
			}
		};

		if (!tokenPF && status !== "error") {
			getTokenProcess();
		}
	}, []);

	// retrieve info
	useEffect(() => {
		// steps to get the data
		// 1. get token
		// 2. get adoptable cat info
		// 3. get total cat adopted through orga

		const scheduler = [
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

		// go through the scheduler and the tasks only iftoken retrieved
		if (status === "ready") {
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
	}, [tokenPF]);

	return !animals || status === "loading" || status === "initial" ? (
		<OurCatsWrapper>
			<Loading />
		</OurCatsWrapper>
	) : status === "idle" ? (
		<OurCatsWrapper>
			<OurCatsSuccess>
				{ourcatsT.success[0]}&nbsp;
				<OurCatSuccessNum
					target="_blank"
					href={LINKSADDED.link_moustacheAdopted}
				>
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
