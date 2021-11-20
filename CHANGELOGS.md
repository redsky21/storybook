### Change Logs

### 0.4.0 (2021-10-18)
- mui stable 버전으로 업데이트

### 0.3.5 (2021-09-29, HyeonIL, Choi)

- date-fns version upgrade (2.22.1 -> 2.23.1)
- cmn repo와 버전이 안맞아서, generate-app 시 충돌 발생

### 0.3.4 (2021-09-29, HyeonIL, Choi)

- 다음 컴포넌트들이 기본 className 가지도록 수정
- AutoComplete, Checkbox, DatePicker, DateRangePicker, ElementGroup, Select, SelectItem, Tab, TextField, YearPicker

### 0.3.3 (2021-09-29, HyeonIL, Choi)

- ElementGroup 컴포넌트가 "cnsui-elementgroup" 을 기본 className으로 가지도록 수정

### 0.3.2 (2021-09-15, HyeonIL, Choi)

- Button 패딩 조절 (top down 1.1rem -> 1.0rem)

### 0.3.1 (2021-09-15, HyeonIL, Choi)

- 폰트 크기 14px로 추가 조절 : Button, Select, AutoComplete

### 0.3.0 (2021-09-15)

- 모바일 환경에서 toast 위치 조정
- 셀렉트 선택안함 옵션 추가, width 관련 버그 수정
- 버튼 fullWidth 속성 추가

### 0.2.10 (2021-09-15, HyeonIL, Choi)

- label 폰트크기 조절 (13px -> 14px)
- required 마크 margin right 조절 (3px)
- textField borderBottom color 조절 (rgba(0,0,0,0.2))

### 0.2.9 (2021-09-06)

- DatePicker, DateRangePicker onClean 관련 오류 수정

### 0.2.8 (2021-09-07, HyeonIL, Choi)

- yoon_dev branch 변경사항 master에 반영
- yoon_dev 변경사항 :
  - DatePicker, DateRangePicker 스타일 조정
  - AutoComplete 스타일 조정

### 0.2.7 (2021-09-06)

- AutoComplete 오류 수정
- AutoComplete 포커스 상태 스타일 추가
- 모달 관련 오류 수정
- ElementGroup 속성, 타입 변경

<br/>

### 0.2.6 (2021-09-02)

- AutoComplete 컴포넌트 추가

<br/>

### 0.2.5 (2021-08-31)

- TextField readOnly 속성 추가
- Textarea 스타일 아메바에 맞게 조정
- ConfirmDialog 컴포넌트 추가
- Tab 컴포넌트 추가
- YearPicker 추가
- OverlaySpinner 속성 추가

<br/>

### 0.2.4 (2021-08-23)

- TextField > disabled Opacity 수정 (0.25 -> 0.75)
- Button 이 테마에 종속되도록 수정
- Textarea > useResize 속성 추가

<br/>

### 0.2.3 (2021-08-20)

- TextField를 상속하는 모든 영역에 disabled 표현 방식 변경

<br/>

### 0.2.2 (2021-08-18)

- Toast 위치 변경
- ElementGroup의 prop으로 flexbox 기본 속성 받도록 변경

<br/>

### 0.2.1 (2021-08-17)

- 라디오 그룹에 Label 속성 추가
- 라디오 그룹 타입오류 수정
- InputWrapper 에도 속성을 주입할 수 있도록 수정

<br/>

### 0.2.0 (2021-08-12)

- 셀렉트박스 > 셀렉트아이템 폰트사이즈 변경 (1.4rem -> 1.3rem)

<br/>

### 0.1.9 (2021-08-11)

- 머터리얼 UI 자체 테마 override 방식을 쓰지 않고, 컴포넌트 자체적으로 스타일 정의를 포함하게 변경

<br/>

### 0.1.8 (2021-08-11)

- TextField > 돋보기 버튼 좌측에서 우측으로 이동

<br/>

### 0.1.7 (2021-08-10)

- Toast, useToast 추가
- 마이너한 스타일 이슈들 수정

<br/>

### 0.1.6 (2021-08-06)

- Select 컴포넌트의 사이드 이펙트 제거
- Textarea 컴포넌트, 스토리 추가
- rsuite 버전업 반영 및 less 관련 설정 추가

<br/>

### 0.1.5 (2021-08-04)

- 셀렉트박스 관련 export 오류 수정
- 버튼 관련 콘솔 에러 수정

<br/>

### 0.1.4 (2021-08-03)

- 셀렉트박스 관련 스타일 수정 (아메바 기준)
- MUI global defs 값 조정 (폰트패밀리 등)

<br/>

### 0.1.3 (2021-08-03)

- 아메바 스타일과 충돌, 간섭 되는 부분 스타일 조정2

<br/>

### 0.1.2 (2021-08-03)

- 아메바 스타일과 충돌, 간섭 되는 부분 스타일 조정

<br/>

### 0.1.1 (2021-08-02)

- Modal 컴포넌트 기본 스타일 제거 및 style 속성 추가

<br/>

### 0.1.0 (2021-07-30)

- List, ListItem 컴포넌트 추가

<br/>

### 0.0.9 (2021-07-30)

- IconButton 컴포넌트 추가

<br/>

### 0.0.8 (2021-07-29)

- 버튼컴포넌트가 StyledComponent 타입을 상속받도록 수정

<br/>

### 0.0.7 (2021-07-28)

- Popover 컴포넌트, 스토리, 타입 정의 추가

<br/>

### 0.0.6 (2021-07-28)

- 몇몇 컴포넌트의 type 정의를 export 하지 않았던 문제 수정
- Modal 컴포넌트를 export 하지 않았던 문제 수정
- InputWrapper 에 Label 의 너비를 지정할 수 있는 속성 추가

<br/>

### 0.0.5 (2021-07-23)

- DatePicker, DateRangePicker를 Rsuite로 교체 (초안)
- Label에 align 속성 추가 (기본값 : right)

<br/>

### 0.0.4 (2021-07-21)

- TextField 형태 틀어짐 문제 수정

<br/>

### 0.0.3 (2021-07-20)

- 퍼블리싱 디자인 반영
  - primary 컬러 변경
  - Button font 사이즈 조정 (16 -> 14)

<br/>

### 0.0.2 (2021-07-20)

- generate 로직 업데이트
  - 설치 시 eslint rule을 업데이트 하는 함수 추가

<br/>

### 0.0.1 (2021-07-20)

- Button, TextField, Select, RadioGroup, Select, DatePicker 등 작은 단위의 컴포넌트 추가
- 컴포넌트, 타입정의 빌드 및 설치용 CLI 추가
- 설치 및 활용 가이드 (README.md) 추가
