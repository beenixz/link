const weatherData = {
    "서울": { temp: "-2°C", description: "눈" },
    "도쿄": { temp: "5°C", description: "흐림" },
    "상하이": { temp: "6°C", description: "비" },
    "홍콩": { temp: "14°C", description: "맑음" },
    "뉴욕": { temp: "-3°C", description: "눈" },
    "로스앤젤레스": { temp: "15°C", description: "맑음" },
    "시카고": { temp: "-5°C", description: "눈" },
    "런던": { temp: "4°C", description: "비" },
    "베를린": { temp: "1°C", description: "흐림" },
    "파리": { temp: "5°C", description: "흐림" },
    "모스크바": { temp: "-10°C", description: "눈" },
    "시드니": { temp: "22°C", description: "맑음" },
    "요하네스버그": { temp: "20°C", description: "맑음" },
    "두바이": { temp: "20°C", description: "맑음" },
    "뭄바이": { temp: "24°C", description: "맑음" },
    "싱가포르": { temp: "26°C", description: "흐림" },
    "방콕": { temp: "26°C", description: "맑음" },
    "자카르타": { temp: "27°C", description: "비" },
    "마닐라": { temp: "26°C", description: "흐림" },
    "로마": { temp: "8°C", description: "흐림" },
    "마드리드": { temp: "5°C", description: "맑음" },
    "브뤼셀": { temp: "3°C", description: "비" },
    "암스테르담": { temp: "3°C", description: "흐림" },
    "취리히": { temp: "2°C", description: "눈" },
    "샌프란시스코": { temp: "10°C", description: "흐림" },
    "퍼스": { temp: "30°C", description: "맑음" },
    "호놀룰루": { temp: "25°C", description: "맑음" },
    "카라카스": { temp: "20°C", description: "맑음" },
    "에드먼턴": { temp: "-15°C", description: "눈" },
    "리자이나": { temp: "-10°C", description: "눈" },
    "콜롬보": { temp: "27°C", description: "맑음" },
    "알마티": { temp: "-6°C", description: "눈" },
    "타슈켄트": { temp: "-2°C", description: "흐림" },
    "예카테린부르크": { temp: "-15°C", description: "눈" },
    "블라디보스토크": { temp: "-10°C", description: "눈" }
};

document.getElementById('getTimeButton').addEventListener('click', () => {
    const timezone = document.getElementById('timezone').value;
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = new Intl.DateTimeFormat([], options).format(new Date());
    document.getElementById('result').innerHTML = `<p>${timezone}의 현재 시간: ${timeString}</p>`;
});

document.getElementById('getWeatherButton').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    const weather = weatherData[city];

    if (weather) {
        const weatherInfo = `현재 ${city}의 날씨: ${weather.description}, 온도: ${weather.temp}`;
        document.getElementById('result').innerHTML += `<p>${weatherInfo}</p>`;
    } else {
        document.getElementById('result').innerHTML += `<p class="error">정보를 찾을 수 없습니다.</p>`;
    }
});
