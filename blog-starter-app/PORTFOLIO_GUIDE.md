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
      "slug": "project-url-slug",
      "title": "프로젝트 제목",
      "description": "프로젝트 설명 (목록에 표시)",
      "image": "/images/project1.jpg",
      "tags": ["React", "Node.js"],
      "links": {
        "github": "https://github.com/username/project",
        "demo": "https://project-demo.com"
      },
      "featured": true,
      "fullDescription": "프로젝트에 대한 상세한 설명\n\n여러 단락으로 작성 가능",
      "duration": "2023.01 - 2023.06 (6개월)",
      "role": "Full Stack Developer",
      "teamSize": "4명",
      "challenges": [
        "해결해야 했던 기술적 문제 1",
        "해결해야 했던 기술적 문제 2"
      ],
      "solutions": [
        "문제 해결 방법 1",
        "문제 해결 방법 2"
      ],
      "features": [
        "주요 기능 1",
        "주요 기능 2"
      ],
      "techStack": {
        "Frontend": ["React", "TypeScript"],
        "Backend": ["Node.js", "PostgreSQL"]
      },
      "screenshots": [
        "/images/project1-screenshot1.jpg",
        "/images/project1-screenshot2.jpg"
      ]
    }
  ]
}
```

**프로젝트 필드 설명:**
- `slug` - URL에 사용될 고유 식별자 (예: "e-commerce-platform")
- `featured: true` - Featured 배지가 표시됩니다
- `links.demo` - 선택사항입니다
- `fullDescription` - 프로젝트 상세 페이지에 표시되는 긴 설명
- `duration` - 프로젝트 진행 기간
- `role` - 프로젝트에서의 역할
- `teamSize` - 팀 규모
- `challenges` - 직면했던 문제들
- `solutions` - 문제 해결 방법들
- `features` - 주요 기능 목록
- `techStack` - 카테고리별 상세 기술 스택
- `screenshots` - 프로젝트 스크린샷 목록

**프로젝트 상세 페이지:**
- 각 프로젝트 카드를 클릭하면 `/projects/[slug]` 페이지로 이동
- 프로젝트에 대한 상세 정보, 기술 스택, 챌린지, 솔루션 등을 표시

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

### 메인 페이지 (/)
- **Hero Section**: 프로필 사진과 기본 정보
- **About**: 상세한 자기소개
- **Experience**: 경력 타임라인
- **Skills**: 기술 스택
- **Projects**: 프로젝트 포트폴리오 (카드 클릭 시 상세 페이지로 이동)
- **Contact**: 연락처 정보

### 프로젝트 상세 페이지 (/projects/[slug])
- **프로젝트 개요**: 제목, 설명, 태그, 링크
- **프로젝트 정보**: 기간, 역할, 팀 규모
- **Overview**: 상세 설명
- **Key Features**: 주요 기능 목록
- **Challenges & Solutions**: 문제와 해결 방법
- **Tech Stack**: 카테고리별 기술 스택
- **Screenshots**: 프로젝트 스크린샷 갤러리

## 추가 커스터마이징

- 컴포넌트: `src/app/_components/portfolio/`
- 스타일: Tailwind CSS 사용
- 레이아웃: `src/app/layout.tsx`
- 메인 페이지: `src/app/page.tsx`
