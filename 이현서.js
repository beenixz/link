const destinations = [
    { 
        name: "부산, 한국 🇰🇷", 
        description: "바다와 해운대가 유명한 도시입니다. 🌊🏖️" 
    },
    { 
        name: "서울, 한국 🇰🇷", 
        description: "역사와 현대가 어우러진 수도입니다. 🏙️🏯" 
    },
    { 
        name: "제주도, 한국 🇰🇷", 
        description: "아름다운 자연과 경치를 자랑합니다. 🌴🌅" 
    },
    { 
        name: "파리, 프랑스 🇫🇷", 
        description: "에펠탑과 루브르 박물관으로 유명한 도시입니다. 🗼🎨" 
    },
    { 
        name: "도쿄, 일본 🇯🇵", 
        description: "현대와 전통이 조화를 이루는 도시입니다. 🏯🌸" 
    },
    { 
        name: "뉴욕, 미국 🇺🇸", 
        description: "자유의 여신상과 타임스퀘어가 있는 도시입니다. 🗽🌆" 
    },
    { 
        name: "로마, 이탈리아 🇮🇹", 
        description: "고대 유적과 맛있는 음식으로 유명합니다. 🍝🏛️" 
    },
    { 
        name: "바르셀로나, 스페인 🇪🇸", 
        description: "가우디의 건축물과 아름다운 해변이 있습니다. 🏖️🏰" 
    },
    { 
        name: "방콕, 태국 🇹🇭", 
        description: "화려한 사원과 맛있는 길거리 음식이 유명합니다. 🕌🍜" 
    },
    { 
        name: "시드니, 호주 🇦🇺", 
        description: "오페라 하우스와 아름다운 해변이 있는 도시입니다. 🎭🏖️" 
    },
    { 
        name: "상하이, 중국 🇨🇳", 
        description: "중국의 현대적 도시로, 유명한 스카이 라인이 있습니다. 🌆🏙️" 
    },
    { 
        name: "케이프타운, 남아프리카공화국 🇿🇦", 
        description: "테이블 마운틴과 아름다운 해변이 유명합니다. ⛰️🏖️" 
    },
    { 
        name: "리우데자네이루, 브라질 🇧🇷", 
        description: "카니발과 해변으로 유명한 나라의 도시입니다. 🎉🏖️" 
    },
    { 
        name: "이스탄불, 터키 🇹🇷", 
        description: "유럽과 아시아를 잇는 역사적인 도시입니다. 🌉🏰" 
    },
    { 
        name: "모스크바, 러시아 🇷🇺", 
        description: "붉은 광장과 크렘린이 있는 도시입니다. 🏰🇷🇺" 
    },
    { 
        name: "나이로비, 케냐 🇰🇪", 
        description: "야생 동물을 가까이에서 볼 수 있는 도시입니다. 🦁🌍" 
    },
];

const recommendedRoutes = [
    { 
        name: "부산 2박 3일 코스 🇰🇷", 
        description: "해운대, 광안리 해수욕장 방문 포함. 🏖️🌊" 
    },
    { 
        name: "서울 1박 2일 코스 🇰🇷", 
        description: "경복궁, 명동 쇼핑 포함. 🏯🛍️" 
    },
    { 
        name: "제주도 3박 4일 코스 🇰🇷", 
        description: "한라산, 성산일출봉 탐방 포함. ⛰️🌅" 
    },
    { 
        name: "파리 3박 4일 코스 🇫🇷", 
        description: "에펠탑, 루브르 박물관 탐방 포함. 🗼🎨" 
    },
    { 
        name: "도쿄 2박 3일 코스 🇯🇵", 
        description: "신주쿠, 시부야, 아사쿠사 방문 포함. 🌸🏙️" 
    },
    { 
        name: "뉴욕 4박 5일 코스 🇺🇸", 
        description: "타임스퀘어, 센트럴파크 탐방 포함. 🗽🌆" 
    },
    { 
        name: "로마 3박 4일 코스 🇮🇹", 
        description: "콜로세움, 바티칸 방문 포함. 🍝🏛️" 
    },
    { 
        name: "바르셀로나 2박 3일 코스 🇪🇸", 
        description: "사그라다 파밀리아, 고딕 지구 탐방. 🏰🏖️" 
    },
    { 
        name: "방콕 2박 3일 코스 🇹🇭", 
        description: "왕궁, 왓 아룬 방문 포함. 🕌🍜" 
    },
    { 
        name: "시드니 3박 4일 코스 🇦🇺", 
        description: "오페라 하우스, 본다이 비치 탐방. 🎭🏖️" 
    },
    { 
        name: "상하이 2박 3일 코스 🇨🇳", 
        description: "와이탄, 예원 탐방 포함. 🌆🏙️" 
    },
    { 
        name: "케이프타운 3박 4일 코스 🇿🇦", 
        description: "테이블 마운틴, 로벤섬 방문 포함. ⛰️🏖️" 
    },
    { 
        name: "리우데자네이루 4박 5일 코스 🇧🇷", 
        description: "코르코바도, 이파네마 해변 탐방. 🎉🏖️" 
    },
    { 
        name: "이스탄불 3박 4일 코스 🇹🇷", 
        description: "아야 소피아, 블루 모스크 방문 포함. 🌉🏰" 
    },
    { 
        name: "모스크바 3박 4일 코스 🇷🇺", 
        description: "붉은 광장, 크렘린 방문 포함. 🏰🇷🇺" 
    },
    { 
        name: "나이로비 2박 3일 코스 🇰🇪", 
        description: "나이로비 국립공원, 데이비드 셰드릭 재단 방문. 🦁🌍" 
    },
];

// 인기 여행지 출력
function displayPopularDestinations() {
    const container = document.getElementById('popular-destinations');
    destinations.forEach(destination => {
        const div = document.createElement('div');
        div.className = 'destination';
        div.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;
        container.appendChild(div);
    });
}

// 추천 코스 출력
function displayRecommendedRoutes() {
    const container = document.getElementById('recommended-routes');
    recommendedRoutes.forEach(route => {
        const div = document.createElement('div');
        div.className = 'route';
        div.innerHTML = `
            <h3>${route.name}</h3>
            <p>${route.description}</p>
        `;
        container.appendChild(div);
    });
}

// 검색 기능
function searchDestinations() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm)
    );

    const container = document.getElementById('popular-destinations');
    container.innerHTML = ''; // 기존 내용 지우기
    filteredDestinations.forEach(destination => {
        const div = document.createElement('div');
        div.className = 'destination';
        div.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;
        container.appendChild(div);
    });
}

// 초기 데이터 표시
displayPopularDestinations();
displayRecommendedRoutes();
