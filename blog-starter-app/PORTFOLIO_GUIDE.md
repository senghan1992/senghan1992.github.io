# 포트폴리오 사용 가이드

이 프로젝트는 개인 포트폴리오 웹사이트로 변환되었습니다.

## 포트폴리오 정보 수정 방법

모든 포트폴리오 정보는 `src/data/portfolio.json` 파일에서 관리됩니다.

### 1. 기본 프로필 정보

```json
{
  "profile": {
    "name": "당신의 이름",
    "title": "직함 (예: Full Stack Developer)",
    "bio": "간단한 소개",
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "profileImage": "/images/profile.jpg"
  }
}
```

### 2. 자기소개 (About)

```json
{
  "about": {
    "description": "상세한 자기소개 내용",
    "highlights": [
      "강조하고 싶은 포인트 1",
      "강조하고 싶은 포인트 2"
    ]
  }
}
```

### 3. 경력 (Experience)

```json
{
  "experience": [
    {
      "company": "회사명",
      "position": "직책",
      "period": "2022.03 - 현재",
      "description": "간단한 설명",
      "achievements": [
        "주요 성과 1",
        "주요 성과 2"
      ]
    }
  ]
}
```

### 4. 기술 스택 (Skills)

```json
{
  "skills": {
    "Frontend": ["React", "Next.js", "TypeScript"],
    "Backend": ["Node.js", "Express"],
    "DevOps": ["Docker", "AWS"]
  }
}
```

카테고리를 자유롭게 추가/제거할 수 있습니다.

### 5. 프로젝트 (Projects)

```json
{
  "projects": [
    {
      "title": "프로젝트 제목",
      "description": "프로젝트 설명",
      "image": "/images/project1.jpg",
      "tags": ["React", "Node.js"],
      "links": {
        "github": "https://github.com/username/project",
        "demo": "https://project-demo.com"
      },
      "featured": true
    }
  ]
}
```

- `featured: true` - Featured 배지가 표시됩니다
- `links.demo` - 선택사항입니다

## 이미지 추가

1. `public/images/` 디렉토리에 이미지 파일을 추가
2. `portfolio.json`에서 이미지 경로 참조

권장 이미지 크기:
- **프로필**: 512x512px (정사각형)
- **프로젝트**: 1200x630px (가로형)

## 개발 서버 실행

```bash
cd blog-starter-app
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 빌드 및 배포

```bash
cd blog-starter-app
npm run build
```

GitHub에 push하면 자동으로 배포됩니다.

## 페이지 구성

- **Hero Section**: 프로필 사진과 기본 정보
- **About**: 상세한 자기소개
- **Experience**: 경력 타임라인
- **Skills**: 기술 스택
- **Projects**: 프로젝트 포트폴리오
- **Contact**: 연락처 정보

## 추가 커스터마이징

- 컴포넌트: `src/app/_components/portfolio/`
- 스타일: Tailwind CSS 사용
- 레이아웃: `src/app/layout.tsx`
- 메인 페이지: `src/app/page.tsx`
