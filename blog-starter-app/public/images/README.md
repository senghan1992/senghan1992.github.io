# 이미지 가이드

이 디렉토리에 포트폴리오에 필요한 이미지를 추가하세요.

## 필요한 이미지

### 프로필 이미지
- **파일명**: `profile.jpg`
- **권장 크기**: 512x512px (정사각형)
- **설명**: 메인 페이지 Hero 섹션에 표시되는 프로필 사진

### 프로젝트 이미지
- **파일명**: `project1.jpg`, `project2.jpg`, `project3.jpg` 등
- **권장 크기**: 1200x630px (가로형)
- **설명**: 각 프로젝트의 썸네일 이미지

## 임시 placeholder 이미지 사용법

현재는 placeholder 이미지가 설정되어 있습니다.
실제 이미지를 추가할 때까지 빌드 시 에러가 발생할 수 있습니다.

임시로 사용하려면:
1. https://placehold.co/ 같은 서비스에서 이미지 생성
2. 또는 실제 이미지 파일을 이 디렉토리에 추가

## 이미지 업데이트 방법

`src/data/portfolio.json` 파일에서 이미지 경로를 수정:

```json
{
  "profile": {
    "profileImage": "/images/profile.jpg"
  },
  "projects": [
    {
      "image": "/images/project1.jpg"
    }
  ]
}
```
