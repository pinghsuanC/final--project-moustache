// get access token for pet finder
const getPfToken = () => ({
	type: "GET_PF_ACCESS_TOKEN",
});
const receivePfAccessToken = () => ({
	type: "RECEIVE_PF_ACCESS_TOKEN",
});
const receivePfAccessTokenErr = () => ({
	type: "RECEIVE_PF_ACCESS_TOKEN_ERROR",
});
// get all cats
const getPfAnimals = () => ({
	type: "GET_PF_ANIMALS",
});
const receivePfAnimals = (animals) => ({
	type: "RECEIVE_PF_ANIMALS",
	animals: animals,
});
const receivePfAnimalsErr = () => ({
	type: "RECEIVE_PF_ANIMALS_ERROR",
});

// get the adopted count
const getPfAdoptedCount = () => ({
	type: "GET_PF_ADOPTED_COUNT",
});
const receivePfAdoptedCount = (count) => ({
	type: "RECEIVE_PF_ADOPTED_COUNT",
	count: count,
});
const receivePfAdoptedCountErr = () => ({
	type: "RECEIVE_PF_ADOPTED_COUNT_ERROR",
});

const pfActions = {
	getPfToken,
	receivePfAccessToken,
	receivePfAccessTokenErr,
	getPfAnimals,
	receivePfAnimals,
	receivePfAnimalsErr,
	getPfAdoptedCount,
	receivePfAdoptedCount,
	receivePfAdoptedCountErr,
};
export default pfActions;
