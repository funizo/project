## 코드 컨벤션

함수명, 변수명, 브랜치명, 파일명 → camelCase
    ㄴ 컴포넌트 명 : function Component(){}
    ㄴ 훅 명 : const Hook => (){}
    ㄴ 상수 관련 파일 명 : 대문자로 작성 e.g) COUNT.jsx

## 커밋 컨벤션

컨벤션이름/#n(n번쨰커밋)/커밋내용기술
e.g) 
feat/#1/커뮤니티 컴포넌트 기능 완성
fix/#2/커뮤니티 컴포넌트 버그 수정
...(약 5개의 커밋 생략)
revert/#7/커뮤니티 ~~기능 되돌리기

feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우.
refactor : 코드 리팩터링
test :  테스트 코드, 리펙터링 테스트 코드 추가(프로덕션 코드 변경x)
design : css 등 사용자 ui 디자인 변경
built : 관련 변경 사항 빌드
ci : CI 관련 변경 사항
perf : 성능을 향상시키는 코드 변경
revert : 되돌리기
rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행
remove : 파일 삭제 작업만 수행
!BREAKING CHANGE : 커다란 API 변경
!HOTFIX : 급한 버그 수정

e.g) feat. 맵 핑 찍는 기능 추가. => -m "fix : 맵 핑찍을 때 두번찍히는 버그 수정"

## 브랜치 관리
FE
ㄴmaster
    ㄴdev (default)
        ㄴFE_community
        ㄴFE_qna
        ㄴFE_지식

BE
ㄴmaster
    ㄴdev (default)
        ㄴBE_community
        ㄴBE_qna
        ㄴBE_지식