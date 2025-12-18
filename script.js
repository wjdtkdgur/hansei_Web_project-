// =========================================================
// 🏆 OWCS KOREA TEAM DATA
// =========================================================
const teamData = {
    // 로고 경로와 데이터는 이전과 동일
    'Crazy Raccoon': { logo: '../images/logo_cr.webp', players: [{ name: "JunBin", role: "Tank" }, { name: "MAX", role: "Tank" }, { name: "LIP", role: "DPS" }, { name: "HeeSang", role: "DPS" }, { name: "SP1NT", role: "DPS" }, { name: "shu", role: "Support" }, { name: "CH0R0NG", role: "Support" }] },
    'T1': { logo: '../images/logo_t1.png', players: [{ name: "DONGHAK", role: "Tank" }, { name: "Jasm1ne", role: "Tank" }, { name: "ZEST", role: "DPS" }, { name: "Proud", role: "DPS" }, { name: "Viper", role: "DPS" }, { name: "skewed", role: "Support" }, { name: "vigilante", role: "Support" }] },
    'Team Falcons': { logo: '../images/logo_tf.png', players: [{ name: "Hanbin", role: "Tank" }, { name: "SOMEONE", role: "Tank" }, { name: "Proper", role: "DPS" }, { name: "MER1T", role: "DPS" }, { name: "ChiYo", role: "Support" }, { name: "Fielder", role: "Support" }] },
    'ZETA DIVISION': { logo: '../images/logo_zd.png', players: [{ name: "BERNAR", role: "Tank" }, { name: "MAG", role: "Tank" }, { name: "AlphaYi", role: "DPS" }, { name: "Pelican", role: "DPS" }, { name: "Probe", role: "DPS" }, { name: "FiNN", role: "Support" }, { name: "Bliss", role: "Support" }] }
};

const teamLogosContainer = document.getElementById('team-logos-container');
const playerDetailSection = document.getElementById('player-detail-section');
const detailTeamName = document.getElementById('detail-team-name');
const playerCardsContainer = document.getElementById('player-cards-container');
const dynamicLogo = document.getElementById('dynamic-logo');
const heroZone = document.getElementById('hero-zone');


// =========================================================
// 1. Web Animations API (WAAPI) - 스크롤 등장 애니메이션
// =========================================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 뷰포트의 10%가 보일 때 애니메이션 실행
};

const fadeInKeyframes = [
    { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
];
const fadeInTiming = { duration: 800, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' };

const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.getAttribute('data-delay')) || 0;

            // WAAPI를 사용하여 애니메이션 실행
            entry.target.animate(fadeInKeyframes, {
                ...fadeInTiming,
                delay: delay
            });

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


// =========================================================
// 2. 초기 팀 로고 카드 렌더링 및 WAAPI 등록
// =========================================================
function renderTeamLogos() {
    let index = 0;
    Object.keys(teamData).forEach(teamName => {
        const teamInfo = teamData[teamName];
        
        const card = document.createElement('div');
        card.className = 'team-card';
        card.setAttribute('data-team', teamName);
        card.setAttribute('data-delay', index * 100); // 지연 시간 설정
        card.innerHTML = `
            <img src="${teamInfo.logo}" alt="${teamName} Logo" onerror="this.onerror=null;this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';">
            <h4>${teamName}</h4>
        `;
        
        card.addEventListener('click', () => showTeamDetails(teamName));
        teamLogosContainer.appendChild(card);
        
        // WAAPI 옵저버에 등록
        intersectionObserver.observe(card);
        index++;
    });
}


// =========================================================
// 3. 팀 로고 클릭 시 상세 정보 표시
// =========================================================
function showTeamDetails(teamName) {
    const teamInfo = teamData[teamName];
    
    detailTeamName.textContent = teamName;
    playerCardsContainer.innerHTML = '';
    
    // 상세 섹션 초기화 후 표시
    playerDetailSection.classList.remove('hidden');
    
    teamInfo.players.forEach((player, index) => {
        const roleClass = `role-${player.role.toLowerCase()}`;
        
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.setAttribute('data-delay', index * 50); // 선수 카드 등장 지연
        
        playerCard.innerHTML = `
            <img src="../images/player_default_placeholder.png" alt="${player.name} Photo" onerror="this.onerror=null;this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';">
            <h5>${player.name}</h5>
            <p>역할: <span class="role-tag ${roleClass}">${player.role}</span></p>
        `;
        playerCardsContainer.appendChild(playerCard);
        
        // 선수 카드 WAAPI 등록
        intersectionObserver.observe(playerCard);
    });
    
    // 스크롤을 상세 정보 섹션으로 부드럽게 이동
    playerDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// =========================================================
// 4. 히어로 존 동적 로고 효과 (3D Tilt) - 비활성화
// =========================================================
// 마우스 기반 로고 틸트와 글로우 효과는 디자인에서 제거했습니다.
// 이전에 사용하던 event listeners 및 관련 로직을 모두 제거하여
// 불필요한 연산과 상호작용을 중단합니다.


// =========================================================
// 5. Mouse Trail Effect (캔버스 기반) - 비활성화
// =========================================================
// 마우스 잔상(파티클) 효과는 사용자 요청에 따라 제거했습니다.
// 관련 캔버스 렌더링 및 이벤트 핸들러를 삭제하여 성능에
// 불필요한 부하를 주지 않습니다.


// =========================================================
// 6. 초기 실행
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    renderTeamLogos();
    // 부드러운 스크롤: '팀 로스터 보기' 버튼 클릭 시
    const scrollLink = document.querySelector('.scroll-link');
    const rosterSection = document.getElementById('team-roster-section');
    if (scrollLink && rosterSection) {
        scrollLink.addEventListener('click', (e) => {
            e.preventDefault();
            rosterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    // 시작할 때 히어로 애니메이션 초기화
    try {
        initHeroAnimation();
    } catch (err) {
        // 안전 장치: 실패해도 페이지는 정상 동작
        console.warn('Hero animation init failed', err);
    }
});


/* =========================================================
   Hero animation: lightweight parallax + activation
   - Adds `hero-animate` class to body to start CSS animations
   - Adds subtle mousemove parallax on #dynamic-logo (rAF)
   ========================================================= */
function initHeroAnimation() {
    // add class to trigger CSS entrance/float/glint
    document.body.classList.add('hero-animate');

    // lightweight parallax using requestAnimationFrame
    if (!heroZone || !dynamicLogo) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let rafId = null;

    function onMove(e) {
        const r = heroZone.getBoundingClientRect();
        const px = ((e.clientX - r.left) / r.width) - 0.5; // -0.5 .. 0.5
        const py = ((e.clientY - r.top) / r.height) - 0.5;
        // small angles
        targetX = px * 8; // yaw
        targetY = py * 6; // pitch
        if (!rafId) rafId = requestAnimationFrame(animateLogo);
    }

    function animateLogo() {
        // simple easing
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        // apply transform (rotateY, rotateX) and slight translateZ for depth
        dynamicLogo.style.transform = `perspective(900px) rotateY(${currentX}deg) rotateX(${ -currentY }deg) translateZ(10px)`;
        rafId = null;
    }

    function onLeave() {
        targetX = 0; targetY = 0;
        if (!rafId) rafId = requestAnimationFrame(animateLogo);
    }

    heroZone.addEventListener('mousemove', onMove, { passive: true });
    heroZone.addEventListener('mouseleave', onLeave);
}