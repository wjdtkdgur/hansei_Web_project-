const teams = [
  {
    name: "Crazy Raccoon",
    country: "🇯🇵 일본(스폰서)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Crazy_Raccoon_logo.svg/1200px-Crazy_Raccoon_logo.svg.png",
    players: ["JunBin", "MAX", "LIP" , "HeeSang" , "SP1NT" , "shu" , "CH0R0NG"],
    record: "OWCS Stage 3 한국 대표 팀",
    desc: "일본을 대표하는 e스포츠 팀으로 FPS 종목에서 활약 중입니다."
  },
  {
    name: "T1",
    country: "🇰🇷 대한민국",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/T1_logo.svg/800px-T1_logo.svg.png",
    players: ["DONGHAK", "Jasm1ne", "ZEST", "Proud", "Viper", "skewed", "vigilante"],
    record: "OWCS Stage 3 한국 대표 팀",
    desc: "전통적인 명문 구단으로, 많은 esports에서 활약 중입니다."
  },
  {
    name: "Team Falcons",
    country: "🇸🇦 사우디아라비아",
    logo: "https://owcdn.net/img/63d25e33aab65.png",
    players: ["Hanbin", "SOMEONE", "Proper", "MER1T", "ChiYo", "Fielder"],
    record: "MENA 지역 대표 팀",
    desc: "중동 지역의 강력한 신흥 세력으로 평가받습니다."
  },
  {
    name: "ZETA DIVISION",
    country: "🇯🇵 일본",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/ZETA_Division_logo.svg/800px-ZETA_Division_logo.svg.png",
    players: ["BERNAR", "MAG", "AlphaYi", "Pelican", "Probe", "FiNN", "Bliss"],
    record: "OWCS Stage 3 상위권 진출",
    desc: "수비적인 운영과 유연한 로스터 교체로 유명합니다."
  }
];

const teamList = document.getElementById("team-list");
const teamDetail = document.getElementById("team-detail");
const teamInfo = document.getElementById("team-info");
const backBtn = document.getElementById("backBtn");

// 팀 카드 생성
teams.forEach((team, index) => {
  const card = document.createElement("div");
  card.classList.add("team-card");
  card.innerHTML = `
    <img src="${team.logo}" alt="${team.name} logo">
    <h2>${team.name}</h2>
    <p>${team.country}</p>
  `;
  card.addEventListener("click", () => showTeamDetail(index));
  teamList.appendChild(card);
});

// 팀 상세정보 보기
function showTeamDetail(index) {
  const team = teams[index];
  teamList.classList.add("hidden");
  teamDetail.classList.remove("hidden");

  teamInfo.innerHTML = `
    <img src="${team.logo}" alt="${team.name}" width="150">
    <h2>${team.name}</h2>
    <p><strong>국가:</strong> ${team.country}</p>
    <p><strong>주요 선수:</strong> ${team.players.join(", ")}</p>
    <p><strong>주요 성적:</strong> ${team.record}</p>
    <p>${team.desc}</p>
  `;
}

backBtn.addEventListener("click", () => {
  teamList.classList.remove("hidden");
  teamDetail.classList.add("hidden");
});
