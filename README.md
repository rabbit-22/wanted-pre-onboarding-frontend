# 📘 Todo

- 로그인 및 회원가입을 통해 유저의 Todo List를 제공하는 사이트
- Todo CRUD 기능 제공

**배포 사이트: https://jimi-todo.vercel.app/**

<br/>

# 🚀 프로젝트 실행 방법

```
git clone https://github.com/rabbit-22/wanted-pre-onboarding-frontend.git

npm install
npm start
```

<br/>

# 📹 Demo

### 1. 로그인 및 회원가입

<img width="600" alt="user" src="https://user-images.githubusercontent.com/77673029/231063576-43588139-dff1-40d1-a406-696b537f0ff4.gif">

<br/>

### TODO

<img width="300" alt="todo" src="https://user-images.githubusercontent.com/77673029/231063852-76f99808-9980-4e79-b70c-f0da0f47ab7a.gif">

<br/>

# 💡 2. 기술스택

<p align="center">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
</p>

<br/>

# 📗 API

https://github.com/walking-sunset/selection-task#api

<br/>

# 📂 폴더 구조

<details>
<summary>자세히 보기</summary>
<div>

```
📦src
 ┣ 📂api
 ┃ ┣ 📜authAxios.ts
 ┃ ┣ 📜constant.ts
 ┃ ┣ 📜login.ts
 ┃ ┗ 📜todo.ts
 ┣ 📂components
 ┃ ┣ 📂signin
 ┃ ┃ ┗ 📜SigninForm.tsx
 ┃ ┣ 📂signup
 ┃ ┃ ┗ 📜SignupForm.tsx
 ┃ ┣ 📂todo
 ┃ ┃ ┣ 📜DeleteButton.tsx
 ┃ ┃ ┣ 📜SubmitButton.tsx
 ┃ ┃ ┣ 📜TodoInput.tsx
 ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┗ 📜TodoList.tsx
 ┃ ┣ 📜CenterLayout.tsx
 ┃ ┣ 📜Division.tsx
 ┃ ┣ 📜FormButton.tsx
 ┃ ┣ 📜Input.tsx
 ┃ ┣ 📜InputTitle.tsx
 ┃ ┣ 📜OtherFormButton.tsx
 ┃ ┗ 📜ValidateBox.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useForm.ts
 ┃ ┣ 📜useGetTodo.ts
 ┃ ┗ 📜validate.ts
 ┣ 📂pages
 ┃ ┣ 📜HomePage.tsx
 ┃ ┣ 📜SigninPage.tsx
 ┃ ┣ 📜SignupPage.tsx
 ┃ ┗ 📜TodoPage.tsx
 ┣ 📂types
 ┃ ┣ 📜todo.ts
 ┃ ┗ 📜user.ts
 ┣ 📂utils
 ┃ ┣ 📜isLoggedIn.ts
 ┃ ┗ 📜saveTokenToLocalStorage.ts
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

</div>
</details>
