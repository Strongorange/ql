OVER-FETCHING
만약 user 의 사용자명만 원하는데 서버에서는 성,이름,주소,프로파일 사진 등을 다 보냄
내가 요청한 영역보다 더 많은 정보를 서버에서 받음
GraphQl 에서 프론트에 db 에 오직 내가 필요한 정보만 요청할 수 있음

UNDER-FETCHING
인스타에서 앱 시작시 피드,알람,유저 정보를 요청
하나를 완성하려고 많은 소스를 요청하게 됨

GraphQL 에서 URL 은 존재하지 않음
하나의 거대한 쿼리에서 정보를 얻어 옴 

create-react-app 같은 graphql yoga 셋팅
npm add graphph-yoga ? 설치
yarn add @babel/cli @babel/core @babel/node @babel/preset-env 로 babel 설치
.babelrc 에 {
    "presets": ["@babel/preset-env"]
}
붙혀넣어줌

GraphQLServer 를 임포트 하고 const server = new GraphQLServer({}) ==>> server.start(()=>console.log("start")) 로 서버 실행

GraphQl 익스텐션 설치 
스키마가 없다는 오류가 뜨는데 우리가 받고 줄 정보를 설정
Query 는 내가 정보를 받을때 사용 

type Query {
    name: String!
}

Query 에 name 을 요청하면 String 을 주는데 ! 를 붙혀서 required 설정
서버에서 typeDefs 로 graphql 을 설정
resolver 를 만들어서 Query 의 name 을 요청하면 "chanhwi" 라는 텍스트를 보냄