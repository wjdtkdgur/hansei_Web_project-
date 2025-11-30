/* 글로벌 설정 및 폰트 */
:root {
    --color-primary: #FF6600; /* 주황 */
    --color-secondary: #0077B6; /* 파랑 */
    --color-dark: #1C1C1C;
    --color-light: #F4F4F9;
    --color-dark-gray: #252525;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.6;
    color: var(--color-light);
    background-color: var(--color-dark);
    scroll-behavior: smooth;
    /* Parallax 효과를 위해 필요: 스크롤 영역 설정 */
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 1px; /* 깊이감 설정 */
}

/* ---------------------------------------------------- */
/* 🌌 PARALLAX SCROLL & MOUSE TRAIL */
/* ---------------------------------------------------- */

/* Mouse Trail 캔버스 */
#mouse-trail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100; /* 최상단 */
    pointer-events: none; /* 마우스 이벤트 무시 */
}

/* Parallax 배경 */
.parallax-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    /* 배경을 뒤로 밀어 스크롤 시 느리게 움직이게 함 */
    transform: translateZ(-1px) scale(2); 
    z-index: -10;
}

/* 모든 콘텐츠를 묶는 컨테이너 (스크롤 가능) */
header, main, footer {
    position: relative;
    z-index: 1; 
    /* Parallax 배경과 동일한 transform을 받지 않도록 격리 */
    transform-style: preserve-3d; 
}


/* ---------------------------------------------------- */
/* 🌟 HERO ZONE STYLES */
/* ---------------------------------------------------- */
#hero-zone {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    padding-top: 50px; /* Header 공간 확보 */
}

.hero-content {
    z-index: 10;
}

#dynamic-logo {
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;
    cursor: pointer;
    /* JS에서 업데이트할 변수 초기화 */
    --rotate-X: 0deg;
    --rotate-Y: 0deg;
}

#dynamic-logo img {
    width: 90vw;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    padding: 20px;
    transition: filter 0.5s ease, transform 0.1s linear;
    
    transform: perspective(1000px) rotateX(var(--rotate-X)) rotateY(var(--rotate-Y));
}

.dynamic-glow img {
    filter: drop-shadow(0 0 35px rgba(255, 102, 0, 1)) brightness(1.2);
}

.subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    color: #ccc;
    margin-top: 25px;
}

.scroll-link {
    /* ... (스타일 유지) ... */
    display: inline-block;
    margin-top: 30px;
    padding: 12px 30px;
    background-color: var(--color-primary);
    color: var(--color-dark);
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-decoration: none;
    border-radius: 50px;
    transition: background-color 0.3s, transform 0.3s;
    animation: bounce 1.5s infinite; /* 부드러운 애니메이션 유지 */
}

.scroll-link:hover {
    background-color: #e65c00;
    transform: translateY(-3px);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

/* ---------------------------------------------------- */
/* 🏆 TEAM ROSTER SECTION & PLAYER DETAIL */
/* ---------------------------------------------------- */
#team-roster-section {
    padding: 100px 5%;
    background-color: var(--color-dark);
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;
    color: var(--color-primary);
    position: relative;
}

.team-logos-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

/* 팀 로고 카드 */
.team-card {
    background: var(--color-dark-gray);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    width: 220px;
    cursor: pointer;
    border: 2px solid transparent;
    opacity: 0; /* WAAPI 애니메이션을 위해 초기 투명도 설정 */
}

.team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(255, 102, 0, 0.4);
    border-color: var(--color-primary);
}

.team-card img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 15px;
    border-radius: 8px;
}

/* ... (나머지 .player-card, .role-tag 등은 이전과 동일하게 유지) ... */

#player-detail-section {
    padding: 40px;
    background-color: #101010;
    border-radius: 15px;
    min-height: 500px;
    margin-top: 50px;
}

#detail-team-name {
    text-align: center;
    font-size: 3rem;
    color: var(--color-secondary);
    margin-bottom: 40px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 0 0 10px rgba(0, 119, 182, 0.5);
}

#player-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    justify-content: center;
}

.player-card {
    background: #202020;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    border-left: 5px solid var(--color-primary);
    opacity: 0; /* WAAPI 애니메이션을 위해 초기 투명도 설정 */
}

/* 역할별 색상 (이전 코드에서 가져오세요) */
.role-tank { background-color: #F89B2B; color: var(--color-dark); }
.role-dps { background-color: #E84964; color: var(--color-dark); }
.role-support { background-color: #00B171; color: var(--color-dark); }

.hidden {
    display: none;
}

/* ---------------------------------------------------- */
/* 📱 반응형 디자인 (모바일 최적화) */
/* ---------------------------------------------------- */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    #dynamic-logo img {
        width: 100%;
        max-width: 400px;
    }
    .team-logos-container {
        gap: 20px;
    }
    .team-card {
        width: 45%; /* 모바일에서 2열 배치 */
    }
    #detail-team-name {
        font-size: 2rem;
    }
}