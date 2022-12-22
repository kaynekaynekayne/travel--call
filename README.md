# [Travel Emergency call](https://travel-call.herokuapp.com/)

## 프로젝트 소개
**해외 여행, 출장 등의 이유로 외국에 있을 때 만일의 상황을 대비하여, 대사관의 연락처와 현지의 긴급전화 번호들을 편리하게 검색하고 저장할 수 있는 플랫폼을 구현하였습니다.**

## 구현 기능
- 로그인  
- 회원가입  
- 검색  
- 국가별 긴급 연락처 (대사관, 긴급 번호, 의료기관 연락처 등) 출력  
- 현지 위험 지도 출력  
- 유저리스트 페이지에 국가별 긴급 연락처 저장 · 삭제

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
- 국가 공공 데이터 포털의 [외교부 국가·지역별 현지연락처 openAPI](https://www.data.go.kr/data/15076242/openapi.do)를 이용하였습니다.  
- Node.js+express로 서버를 구축하였습니다.  
- Firebase를 통해서 회원가입 · 로그인이 가능하도록 구현하였습니다.  
- 본 사이트에 가입을 하지 않아도 검색 기능을 이용할 수 있지만, 매번 검색하는 것이 불편한 사용자들을 위해서 회원에 한하여 현지 긴급 연락처가 적힌 페이지를 mongoDB에 저장할 수 있도록 구현하였습니다.  

## 미리보기  
### 홈 화면  
![tc-home](https://user-images.githubusercontent.com/96046698/209086714-9e79df2f-c064-4b8c-9588-a1b3831e1041.png)  


### 회원가입  
![tc-signup](https://user-images.githubusercontent.com/96046698/209087169-6027c484-fb38-41d2-8514-ba501fb94d37.png)  


### 로그인  
![tc-login](https://user-images.githubusercontent.com/96046698/209087407-538561c4-3e94-478f-afce-4b946ab5eae0.png)  


### 검색  
![screen-recording-_1_](https://user-images.githubusercontent.com/96046698/201464993-130e6f4f-ee68-49e6-9739-17e94d84fdf4.gif)  


### 유저리스트 페이지  
![screen-recording-_2_](https://user-images.githubusercontent.com/96046698/201464773-ac5c66a8-6425-4415-909a-2f1a5553a4b0.gif)  



