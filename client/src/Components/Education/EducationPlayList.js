import styled from "styled-components";

const EducationPlayList = ({ playListId, height }) => {
	const playlistTxt = "https://www.youtube.com/embed/videoseries?list=PLID_PLACEHOLDER".replace(
		"PLID_PLACEHOLDER",
		playListId
	);

	return (
		<EducationPlayer
			//width={`${width}`}
			height={`${height}`}
			src={playlistTxt}
			frameBorder="0"
			allow="autoplay; encrypted-media"
			allowFullScreen
		/>
	);
};

const EducationPlayer = styled.iframe`
	width: 45%;
	margin: 5px;
	display: inline-block;
`;
export default EducationPlayList;
