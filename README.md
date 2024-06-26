# Algo Plus

Baekjoon Chrome Extension으로, 백준 사이트에 부가 기능을 제공합니다.

- 오답노트 기능: 제출한 두 개의 코드를 비교해서 바뀐 부분을 표시하고 메모할 수 있는 기능 제공
- 실제 코딩테스트 환경 조성
    - 웹 IDE를 제공하여 웹에서도 문제풀이를 할 수 있게 도움
    - 기존 백준 형식이 아닌 시험에 자주 사용되는 프로그래머스 입출력 함수를 제공


## 사용자 및 시장에 제공되는 가치

취업준비생들이 코딩테스트를 준비할 때 백준 사이트에서도 실제 코딩테스트 환경과 유사한 환경에서의 연습으로 더 효율적인 알고리즘 공부를 할 수 있을것으로 기대합니다.

또한 알고리즘은 수학과 비슷하게 논리적으로 생각하는 문제가 많기 때문에 오답을 정리하는 것이 알고리즘 실력을 쌓는데 많은 도움이 될 것이라 생각합니다.

## 오픈소스 기여 방안
1. 오답노트 기능
    - 제출 기록 중 2개 이하를 선택하여 markdown 형식의 오답노트 기록 에디터 제공
    - 두 파일을 비교하여 변한 부분 (삭제된 부분 : 붉은색 / 추가된 부분 : 초록색) 표시
    - 코드에서 원하는 부분에 코멘트 기능
    - 오답노트를 깃허브 레포지토리에 저장 기능
2. 프로그래머스 스타일 웹 에디터 제공
    - 프로그래머스처럼 함수 시그니처를 제공하여 입출력을 처리할 수 있는 기능
    - 다양한 프로그래밍 언어 지원 (C++, Java, Python, Javascript 등)
    - 테스트 케이스 자동 입력 및 결과 비교 기능
3. 기여 가이드라인 제공
    - 프로젝트 설정, 빌드, 테스트 방법 등 개발 환경 구축 방법 안내
    - 코딩 스타일, 커밋 메시지 conventions 등 코딩 규칙 명시
    - 이슈 등록 및 Pull Request 제출 절차 가이드

[기여 가이드](./docs/ContributorGuide.md)

## 전제조건

-   [node + npm](https://nodejs.org/) (v20.11.1)


## 프로젝트 구조

-   src: 컨텐츠 스크립트 파일
-   public: 정적 파일
-   dist: 크롬 익스텐션 디렉토리
-   dist/js: 생성된 자바스크립트 파일

## 설치

```
npm install
```

## 빌드

```
npm run build
```

## 와치 모드로 빌드

```
npm run watch
```

## 크롬으로 로드 확장

Load `dist` directory

## 테스트

`npx jest` or `npm run test`

## 참조

- BaekjoonHub
- Prism Code Editor
- React Diff Viewer
