# Boa Shop
![image](https://github.com/Stilllee/baoshop/assets/108785772/f231c432-27a4-4c52-a999-96e7b1fc9320)
<br>

바오패밀리 쇼핑몰 사이트 [Bao Shop](https://baoshop.netlify.app/)입니다. 
<br>

## 목차
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
<br>

## 기술 스택
<div>
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img alt="Create React App" src="https://img.shields.io/badge/Create React App-09D3AC?style=flat-square&logo=createreactapp&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white" />
  <img alt="React Query" src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white" />
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white" />
</div> 
<br>

## 주요 기능
### 1. 제품 목록
![chrome_wExpVvCas8](https://github.com/Stilllee/baoshop/assets/108785772/2d6ebd9a-64d4-493f-9c56-1810cdea5304)
- `useProducts` 커스텀 훅을 사용하여 Firebase에서 가져온 제품 데이터를 표시합니다. 
- `react-query`를 활용해 제품 정보가 변경될 때마다 자동으로 리스트를 갱신하도록 설계했습니다. 이를 통해 사용자는 항상 최신의 제품 정보를 볼 수 있습니다.
<br>

### 2. 제품 상세 정보
![image](https://github.com/Stilllee/baoshop/assets/108785772/f045ecbb-bd79-4887-82a2-588f4ac0f336)
- 각 제품 페이지에서는 제품의 상세 정보를 볼 수 있습니다.
<br>

![chrome_XLfY1u20KF](https://github.com/Stilllee/baoshop/assets/108785772/15e0d006-483f-4067-86fb-7eca95d5d843)
- 사용자는 제품의 옵션을 선택하고, "장바구니에 추가" 버튼을 통해 제품을 장바구니에 추가할 수 있습니다.
- `useCart` 커스텀 훅을 사용하여 장바구니에 제품을 추가하는 기능을 구현합니다. 이 훅은 Firebase와 react-query를 사용하여 장바구니 데이터를 관리합니다.
<br>

### 3. 사용자 계정 및 인증
![chrome_Yrh51FfZiD](https://github.com/Stilllee/baoshop/assets/108785772/f23bf371-3e64-4e49-bb2c-6b95186fdceb)
![image](https://github.com/Stilllee/baoshop/assets/108785772/f8eb81fc-2b7b-4345-bae4-2bc575d31c58)
- Firebase 인증을 통해 사용자는 Google 계정으로 로그인할 수 있습니다.
<br>

![chrome_TbuXGB38Y2](https://github.com/Stilllee/baoshop/assets/108785772/408210a9-3511-4016-a3f1-30f53414ee4e)
![chrome_vNvJXMLmzI](https://github.com/Stilllee/baoshop/assets/108785772/c9d26842-2c1a-49b2-b093-904922e1c411)
-  useAuthContext 훅을 사용하여 사용자의 로그인 상태를 관리하며, 이에 따라 장바구니, 로그인, 로그아웃 버튼의 표시 여부가 결정됩니다. 
<br>

### 4. 장바구니
![image](https://github.com/Stilllee/baoshop/assets/108785772/03d4116f-eb2e-40aa-88b3-6ecaf3d669c5)
- 사용자의 장바구니에 담긴 상품 목록을 보여줍니다. 이 페이지는 사용자가 추가한 상품들의 정보와 총액을 포함합니다.
<br>

![image](https://github.com/Stilllee/baoshop/assets/108785772/ff0ec8c7-430b-4dd3-a340-23be7cb1487b)
- `addOrUpdateItem` 뮤테이션은 사용자가 제품을 장바구니에 추가하면, `queryClient`를 통해 장바구니의 쿼리를 실시간으로 갱신합니다. 이를 통해 사용자는 즉각적으로 장바구니에 반영된 변경사항을 볼 수 있습니다.
<br>

### 5. 관리자 기능
![chrome_gW1QKW7BLb](https://github.com/Stilllee/baoshop/assets/108785772/8dd7192e-94e1-46fe-a0c7-2e25a5c749d1)
- 사용자의 권한을 확인하여 관리자인 경우에만 "제품 추가" 옵션을 표시합니다. 이는 `useAuthContext`를 사용하여 현재 로그인한 사용자가 관리자 권한을 가지고 있는지 판별합니다.
- 일반 사용자는 이 옵션을 볼 수 없으므로, 사이트의 관리 관련 기능에 대한 접근이 제한되어 있습니다. 또한, `ProtectedRoute` 컴포넌트를 사용하여 관리자 권한이 필요한 경로에 대한 접근을 제한합니다. 
<br>

![chrome_0GSSYSbArh](https://github.com/Stilllee/baoshop/assets/108785772/429139a6-2107-4b13-97b7-704a6328f37a)
![chrome_gka1G7HCGC](https://github.com/Stilllee/baoshop/assets/108785772/a33e0d1f-3449-4af6-b546-af9450c22b5d)
![image](https://github.com/Stilllee/baoshop/assets/108785772/a434bc68-d908-4333-bfbc-747f16a2e85f)
- 관리자는 상세내용을 입력하여 새로운 제품을 등록할 수 있습니다.
<br>

### 6. 반응형 레이아웃
![chrome_ZHSfkPlqJV](https://github.com/Stilllee/baoshop/assets/108785772/8a6e1fd9-671b-4a05-a432-aa576e6fa5c5)
![chrome_tLryDphUFi](https://github.com/Stilllee/baoshop/assets/108785772/853cc123-4d3c-4f5c-ad3e-027716c80296)
- Tailwind CSS를 활용해 다양한 화면 크기에 최적화된 사용자 경험을 제공합니다.
