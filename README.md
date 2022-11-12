# [Travel Emergency call](https://travel-call.herokuapp.com/)

## 프로젝트 소개
**해외 여행, 출장 등의 이유로 외국에 있을 때 만일의 상황을 대비하여, 대사관의 연락처와 현지의 긴급전화 번호들을 편리하게 검색하고 저장할 수 있는 플랫폼을 구현하였습니다.**

## 구현 기능
- 로그인  
- 회원가입  
- 검색  
- 국가 공공 데이터 포털의 [외교부 국가·지역별 현지연락처 openAPI](https://www.data.go.kr/data/15076242/openapi.do)를 이용한 데이터 출력
- 유저리스트 페이지에 국가별 현지 연락처 저장 · 삭제 (로그인 했을 시)  

## 기술
#### 프론트엔드
- React  
- Bootstrap  
- Material-UI  
- Styled-Components  

#### 백엔드
- Node.js  
- Express  
- MongoDB  
- Firebase  

#### 배포
- heroku

## 개요
-  Firebase를 통해서 회원가입과 로그인을 할 수 있도록 만들었으며 node.js로 서버를 구축하였습니다.
-  본 사이트에 가입을 하지 않아도 검색 기능을 이용하고 화면에 출력된 결과를 볼 수 있지만, 매번 검색하는 것이 불편한 사용자들을 위해서 mongoDB를 이용하여 현지 연락처가 적힌 페이지를 국가별로 저장할 수 있도록 설정하였습니다. 

## 미리보기  
### 홈 화면  
![home](https://user-images.githubusercontent.com/96046698/201464608-690a4e52-0636-4a48-b14c-ce26a12c6d43.png)  
  

### 회원가입  
![signup](https://user-images.githubusercontent.com/96046698/201464611-65599c86-eec3-458c-afbb-bfe0eb8be22a.png)    
  

### 로그인  
![login](https://user-images.githubusercontent.com/96046698/201464610-47348dc7-17a6-4ec7-9670-36f351ac6900.png)    
  

### 검색  
![screen-recording-_1_](https://user-images.githubusercontent.com/96046698/201464542-08c717da-6896-440a-be36-04efa333e3f6.gif)  


### 저장 페이지  
![screen-recording-_2_](https://user-images.githubusercontent.com/96046698/201464773-ac5c66a8-6425-4415-909a-2f1a5553a4b0.gif)  
