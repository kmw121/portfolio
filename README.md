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

---

## 🌟 2.28 - AWS 메모리 오류 수정 및 빌드 설정
- **Node.js** 빌드의 최대 메모리 설정을 **4096MB**로 조정 (`max-old-space-size=4096`)
- AWS EC2에서 발생한 메모리 오류 해결

---

## 🌟 3.1 - Scene 테스트 코드 추가
- **Scene** 테스트 코드 추가하여 각 요소의 동작 및 렌더링 확인

---

## 🌟 3.2 - 좌표계 구현 (World, Local)
- **World 좌표계**와 **Local 좌표계**를 구현하여 객체의 위치를 기준 좌표계에 맞춰 조정
- 각 객체의 위치 및 변환에 따라 **월드 좌표계**와 **로컬 좌표계** 간의 변환 처리

---

## 🌟 3.3 - Mesh의 다양한 추가 방법 구현 (Drei, Property)
- **Drei** 라이브러리를 활용하여 다양한 방식으로 **Mesh** 객체 추가 및 설정
- **Property**를 사용하여 **Mesh**의 속성 및 설정을 동적으로 변경 가능하도록 구현

---

## 🌟 3.4 - Wireframe 구현 및 Mesh 간 Geometry 공유 로직 구현
- **Wireframe** 구현하여 객체의 외곽선을 표시
- **Mesh** 간의 **Geometry**를 공유하는 로직 추가

---

## 🌟 3.5 - CircleGeometry 추가, MeshBasicMaterial 및 MeshLambertMaterial Property 테스트
- **CircleGeometry** 객체 추가
- **MeshBasicMaterial** 및 **MeshLambertMaterial**의 속성 테스트

---

## 🌟 3.6 - MeshPhongMaterial Property 테스트 및 MeshNormalMaterial 추가
- **MeshPhongMaterial**의 속성 테스트
- **MeshNormalMaterial** 추가하여 표면의 법선 벡터 기반 재질 구현

---

## 🌟 3.7 - MeshStandardMaterial 및 MeshPhysicalMaterial Property 테스트
- **MeshStandardMaterial**과 **MeshPhysicalMaterial**의 속성 테스트
- **금속** 및 **유리** 재질의 **Mesh** 구현

---

## 🌟 3.8 - MeshMatcapMaterial 및 MeshToonMaterial 추가
- **MeshMatcapMaterial** 추가하여 **Matcap 설정**을 통해 특정 재질 구현
- **MeshToonMaterial** 추가하여 **만화적 표현**을 구현

---

## 🌟 3.9 - AmbientLight, HemisphereLight 추가 (간접광 구현)
- **AmbientLight**와 **HemisphereLight** 추가하여 **간접광**을 구현

---

## 🌟 3.10 - DirectionalLight, PointLight, SpotLight 추가 및 프로퍼티 테스트
- **DirectionalLight**, **PointLight**, **SpotLight** 추가
- 각 **Light**의 속성 및 동작 테스트
- **LightHelper** 구현하여 빛의 방향 및 범위 시각화
