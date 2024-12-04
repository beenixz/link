document.getElementById('fashion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('user_name').value.trim();
    const bodyType = document.getElementById('body_type').value;
    const favoriteColors = document.getElementById('favorite_colors').value.split(',').map(color => color.trim());

    if (!userName || !bodyType || favoriteColors.length === 0) {
        alert('모든 필드를 올바르게 입력하세요.');
        return;
    }

    const recommendations = recommendOutfit(bodyType, favoriteColors);
    const randomOutfits = getRandomOutfits(recommendations);
    displayRecommendations(userName, randomOutfits);
});

function recommendOutfit(bodyType, favoriteColors) {
    const upperWear = [];
    const lowerWear = [];
    const shoes = [];

    // 슬림한 신체 유형 추천
    if (bodyType === "슬림") {
        upperWear.push("H&M 핏되는 셔츠 - 깔끔한 디자인으로 데일리 룩에 적합합니다.");
        upperWear.push("Uniqlo 니트 스웨터 - 따뜻하고 편안한 스타일입니다.");
        upperWear.push("ZARA 블레이저 - 세련된 오피스 룩에 잘 어울립니다.");
        upperWear.push("Mango 반팔 티셔츠 - 여름철 시원하게 입기 좋습니다.");
        upperWear.push("COS 버튼업 셔츠 - 클래식하면서도 모던한 느낌을 줍니다.");
        upperWear.push("Nike 스포츠 탑 - 활동적인 날에 최적입니다.");
        upperWear.push("Adidas 오버사이즈 후드티 - 편안한 캐주얼 룩에 좋습니다.");
        upperWear.push("Levi's 그래픽 티셔츠 - 스트리트 스타일에 잘 어울립니다.");
        upperWear.push("Everlane 크루넥 스웨터 - 기본 아이템으로 활용도가 높습니다.");
        upperWear.push("J.Crew 체크 셔츠 - 캐주얼하면서도 세련된 느낌을 줍니다.");
        
        lowerWear.push("Levi's 511 슬림 진 - 클래식한 스타일로 다양한 상의와 매치 가능합니다.");
        lowerWear.push("COS 모던한 팬츠 - 심플하면서도 세련된 느낌을 줍니다.");
        lowerWear.push("ZARA 화이트 팬츠 - 여름철에 잘 어울리는 아이템입니다.");
        lowerWear.push("H&M 조거 팬츠 - 편안하고 스타일리시한 선택입니다.");
        lowerWear.push("Uniqlo 치노 팬츠 - 기본 아이템으로 활용도가 높습니다.");
        lowerWear.push("Gap 데님 스커트 - 다양한 상의와 매치하기 좋습니다.");
        lowerWear.push("Mango 플리츠 스커트 - 여성스러운 느낌을 줍니다.");
        lowerWear.push("Nike 운동용 레깅스 - 활동적인 룩에 적합합니다.");
        lowerWear.push("Adidas 트레이닝 팬츠 - 편안한 착용감과 스타일을 제공합니다.");
        lowerWear.push("Puma 카고 팬츠 - 캐주얼하면서도 실용적인 아이템입니다.");
        
        shoes.push("Nike 에어포스 1 - 편안하면서도 스타일리시한 스니커즈입니다.");
        shoes.push("Adidas 스타크래프트 - 캐주얼한 데일리 룩에 잘 어울립니다.");
        shoes.push("Converse 척 테일러 올스타 - 클래식한 스니커즈로 어떤 룩에도 잘 어울립니다.");
        shoes.push("Puma 스웨이드 - 스트리트 스타일에 적합한 신발입니다.");
        shoes.push("New Balance 574 - 편안한 착용감과 스타일을 제공합니다.");
        shoes.push("Vans 올드스쿨 - 캐주얼한 데일리 스타일에 잘 어울립니다.");
        shoes.push("Dr. Martens 1460 부츠 - 강한 인상을 주는 아이템입니다.");
        shoes.push("H&M 슬리퍼 - 여름철 편안한 착용감에 적합합니다.");
        shoes.push("ASICS 젤-카야노 - 러닝에 최적화된 신발입니다.");
        shoes.push("Reebok 클래식 레더 - 클래식한 스타일의 스니커즈입니다.");
    } 
    // 통통한 신체 유형 추천
    else if (bodyType === "통통") {
        upperWear.push("Mango 루즈한 티셔츠 - 편안하고 여유로운 스타일을 제공합니다.");
        upperWear.push("Gap 디자이너 후드티 - 캐주얼하면서도 멋스러운 아이템입니다.");
        upperWear.push("ZARA 오버사이즈 스웨터 - 따뜻하고 스타일리시한 선택입니다.");
        upperWear.push("Uniqlo 플리스 재킷 - 겨울철 따뜻하게 입기 좋은 아이템입니다.");
        upperWear.push("H&M 롱 슬리브 티셔츠 - 다양한 하의와 매치하기 쉬운 아이템입니다.");
        upperWear.push("ASOS 루즈핏 블라우스 - 여성스러운 느낌을 주는 선택입니다.");
        upperWear.push("Mango 니트 탑 - 부드럽고 편안한 착용감입니다.");
        upperWear.push("Everlane 크롭 탑 - 다양한 스타일에 활용 가능합니다.");
        upperWear.push("J.Crew 버튼업 셔츠 - 클래식한 아이템으로 포멀한 자리에서도 좋습니다.");
        upperWear.push("Nike 스포츠 탑 - 활동적인 날에 적합합니다.");
        
        lowerWear.push("Levi's 스트레이트 진 - 어떤 상의와도 잘 어울리는 기본 아이템입니다.");
        lowerWear.push("ASOS 부츠컷 팬츠 - 다리 라인을 길어 보이게 해줍니다.");
        lowerWear.push("Gap 레깅스 - 편안하고 활동적인 데일리 룩에 적합합니다.");
        lowerWear.push("H&M 플리츠 스커트 - 여성스러운 느낌을 주는 아이템입니다.");
        lowerWear.push("Mango 스트레이트 팬츠 - 클래식한 스타일로 다양한 상의와 매치 가능합니다.");
        lowerWear.push("Uniqlo 조거 팬츠 - 캐주얼하고 편안한 선택입니다.");
        lowerWear.push("ZARA 스커트 - 다양한 상의와 매치하기 좋은 아이템입니다.");
        lowerWear.push("Nike 운동용 레깅스 - 활동적인 룩에 적합합니다.");
        lowerWear.push("Adidas 트레이닝 팬츠 - 편안한 착용감과 스타일을 제공합니다.");
        lowerWear.push("Puma 카고 팬츠 - 캐주얼하면서도 실용적인 아이템입니다.");
        
        shoes.push("New Balance 운동화 - 편안한 착용감과 스타일을 제공합니다.");
        shoes.push("Nike 에어맥스 - 스타일리시한 선택으로 데일리 룩에 적합합니다.");
        shoes.push("Sketchers 슬립온 - 편안한 착용감의 캐주얼 신발입니다.");
        shoes.push("Vans 슬립온 - 캐주얼한 데일리 스타일에 잘 어울립니다.");
        shoes.push("Dr. Martens 1461 - 클래식한 디자인의 신발입니다.");
        shoes.push("H&M 플랫 슈즈 - 편안하고 여성스러운 스타일에 적합합니다.");
        shoes.push("Adidas 스탠 스미스 - 클래식한 스타일의 스니커즈입니다.");
        shoes.push("Converse 척 70 - 빈티지한 매력을 주는 아이템입니다.");
        shoes.push("Puma 리트로 스니커즈 - 레트로 감각의 캐주얼 신발입니다.");
        shoes.push("Reebok 클래식 레더 - 클래식한 스타일의 스니커즈입니다.");
    }

    // 색상별 추천 추가
    if (favoriteColors.includes("검정")) {
        upperWear.push("Mango 블랙 재킷 - 어떤 룩에도 잘 어울리는 필수 아이템입니다.");
    }
    if (favoriteColors.includes("화이트")) {
        upperWear.push("Everlane 화이트 블라우스 - 포멀한 자리에서 적합합니다.");
    }
    if (favoriteColors.includes("파랑")) {
        upperWear.push("J.Crew 네이비 블루 셔츠 - 차분하면서도 세련된 느낌을 줍니다.");
    }
    if (favoriteColors.includes("빨강")) {
        upperWear.push("ZARA 레드 블라우스 - 생동감을 주는 스타일링에 좋습니다.");
    }


    return { upperWear, lowerWear, shoes };
}

function getRandomOutfits(recommendations) {
    const randomUpper = getRandomItem(recommendations.upperWear);
    const randomLower = getRandomItem(recommendations.lowerWear);
    const randomShoes = getRandomItem(recommendations.shoes);

    return { randomUpper, randomLower, randomShoes };
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayRecommendations(userName, randomOutfits) {
    const title = document.getElementById('recommendation-title');
    const list = document.getElementById('recommendations');

    title.style.display = 'block';
    title.innerText = `${userName}님을 위한 추천 스타일:`;

    list.innerHTML = '';
    const liUpper = document.createElement('li');
    liUpper.innerText = `상의: ${randomOutfits.randomUpper}`;
    list.appendChild(liUpper);

    const liLower = document.createElement('li');
    liLower.innerText = `하의: ${randomOutfits.randomLower}`;
    list.appendChild(liLower);

    const liShoes = document.createElement('li');
    liShoes.innerText = `신발: ${randomOutfits.randomShoes}`;
    list.appendChild(liShoes);
}
