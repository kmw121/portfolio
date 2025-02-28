# 프로젝트 변경 내역

## 🌟 2.25 - 첫 번째 초기화 (First Init)
- 프로젝트 초기화 및 기본 설정
- 필수 라이브러리 및 의존성 설치
- 기본 파일 구조 설정

---

## 🌟 2.26 - Git Push 시 AWS EC2 자동 빌드 구성
- **GitHub**와 **AWS EC2** 연동을 통해 **자동 빌드** 시스템 구성
- `git push` 시 자동으로 EC2 인스턴스에서 빌드 및 배포 실행

---

## 🌟 2.27 - 카메라, 렌더러, 컨트롤러, 헬퍼 기능 추가, 위치 및 크기 변경 프로퍼티 추가
- **카메라** (Camera) 설정 및 초기 위치 지정
- **렌더러** (Renderer) 설정 및 화면 크기 맞추기
- **컨트롤러** (OrbitControls) 추가하여 마우스 상호작용 가능
- **헬퍼** (CameraHelper) 추가하여 카메라 시야 시각적으로 표시
- **위치** (Position) 및 **크기** (Scale) 변경 프로퍼티 추가하여 동적으로 객체 위치와 크기 조정 가능

2.28 node.js build의 메모리를 4096mb 까지 설정(max-old-space-size=4096)하여 aws 메모리 오류 수정
