# README

### 개발 환경

- nodejs (>= 14.17.3 lts)
- yarn (1.22.10)

### 기본 설치

Lerna 라는 모노레포식 다중 패키지 관리 툴을 사용하여, 패키지 간의 간섭 및 충돌을 방지하고, 손쉽게 의존성 라이브러리들을 설치할 수 있도록 도와줍니다.  다음과 같은 진행이 필요합니다.

```bash
// 레퍼지토리를 클론한 후 해당 경로로 이동합니다.
git clone {repository url} {projectName}
cd {projectName}

// 패키지들의 의존성 라이브러리들을 설치
yarn init-app

```

### **CLI (Command Line Tool)**

![/readme.1.png](/readme.1.png)

React 작업 영역을 지정하여, UI 프레임워크를 간편히 설치할 수 있도록 도와주는 프로그램입니다. 컴포넌트들과 각각에 정의된 타입 파일들을 빌드하여 압축한 후, 목표 경로로 복사하고 의존성 라이브러리들을 자동 설치하여, 해당 프로젝트에서 간단히 import 하여 사용할 수 있도록 지원합니다.

```bash
// 루트 경로 상에서 다음 명령어를 입력하세요.
yarn generate-app
```

### 스토리북

![/readme.2.png](/readme.2.png)

컴포넌트 종류, 속성 별 형태를 미리 볼 수 있고, 속성, 타입, 기본값 등에 대한 문서를 제공합니다.  

아래의 명령어를 입력해 개발 서버를 실행할 수 있습니다.

```bash
yarn storybook
```

### 사용 가이드

CLI 를 통해 설치를 완료하면, 프로젝트 워크스페이스 내 src 폴더 안에 cns-ui 폴더가 생성됩니다.

![/readme.3.png](/readme.3.png)

index.js 또는 App을 감싸는 다른 파일에서 CNSThemeProvider 와 globalStyles 를 세팅해줍니다. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { CNSThemeProvider, globalStyles } from 'cns-ui/theme';
import { Global } from '@emotion/react';

function Root() {
    return (
        <CNSThemeProvider>
            <Global styles={globalStyles} />
            <App /> 
        </CNSThemeProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
```

React 내부에서 컴포넌트를 import 해서 자유롭게 사용합니다. 

```javascript
import React from 'react';
import Layout from 'shared/components/Layout';
import { Button, DatePicker, TextField, ElementGroup, DateRangePicker, DateRangeType } from 'cns-ui';

function TestPage() {
  const [value, setValue] = React.useState('');
  const [dateValue, setDateValue] = React.useState(null);
  const [dateRangeValue, setDateRangeValue] = React.useState<DateRangeType<Date | null>>([null, null]);
  return (
    <Layout>
      <div style={{ padding: 30 }}>
        <ElementGroup direction="column" gap={20}>
          <ElementGroup gap={10} direction="row">
            <TextField width={180} helperText="에러가 발생했습니다!" error={true} />
            <TextField width={180} disabled={true} />
            <Button onClick={() => alert('테스트')}>테스트 버튼</Button>
          </ElementGroup>
          <TextField
            type="search"
            width={180}
            label="Search Field Label"
            required={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            SearchProps={{ onClear: () => setValue(''), onSearchClick: () => alert('search click') }}
          />
          <DatePicker
            value={dateValue}
            onChange={(newValue: any) => setDateValue(newValue)}
            TextFieldProps={{
              error: false,
              label: 'Date Picker',
            }}
          />
          <DateRangePicker
            value={dateRangeValue}
            onChange={(newValue: any) => setDateRangeValue(newValue)}
            TextFieldProps={{
              error: false,
              label: 'Date Range Picker',
            }}
          />
        </ElementGroup>
      </div>
    </Layout>
  );
}

export default TestPage;
```

![/readme.4.png](/readme.4.png)

### 문의사항

010-4933-0657 김문선