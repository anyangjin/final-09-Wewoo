import React from 'react';
import { StyledInputText, StyledInput } from '../loginPageCommonStyle';
import styled from 'styled-components';
import imageUpload from '../../../assets/images/loginPage/imageUpload.png';

export default function ProfileSettingsForm({ profileInfo, setProfileInfo }) {
  const handleDescription = (e) => {
    setProfileInfo((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleUsername = (e) => {
    setProfileInfo((prev) => ({ ...prev, username: e.target.value }));
  };

  const handleUploadImg = () => {
    const imgUploadInput = document.getElementById('img-upload');
    imgUploadInput.click();
    imgUploadInput.onchange = (e) => {
      setProfileInfo((prev) => ({ ...prev, imgFile: e.target.files[0] }));
    };
  };

  return (
    <>
      <StyledImgUpload onClick={handleUploadImg}>
        <input id='img-upload' type='file' accept='image/*' />
        <img src={imageUpload} alt='프로필 이미지' />
      </StyledImgUpload>

      <StyledInputText>사용자 이름</StyledInputText>
      <StyledInput
        value={profileInfo.username}
        onChange={handleUsername}
        className='mb-37'
        placeholder='사용자 이름을 입력해주세요.'
      />
      <StyledInputText>소개</StyledInputText>

      <StyledInput
        value={profileInfo.description}
        onChange={handleDescription}
        placeholder='자신을 소개해주세요.'
      />
      <div className='levelDot'>
        <StyledLevelDot></StyledLevelDot>
        <StyledLevelDot></StyledLevelDot>
        <StyledLevelDot></StyledLevelDot>
      </div>
    </>
  );
}

const StyledImgUpload = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;

  input {
    display: none;
  }
`;

const StyledLevelDot = styled.div`
  width: 8px;
  height: 8px;
  background: #eeeeee;
  border-radius: 8px;

  &.levelDot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;