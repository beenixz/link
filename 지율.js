const drugDatabase = {
    "아스피린": {
        ko: "아스피린은 통증 완화, 항염증, 해열 효과가 있는 약물입니다.",
        en: "Aspirin is a medication used to reduce pain, inflammation, and fever."
    },
    "타이레놀": {
        ko: "타이레놀은 주로 통증과 열을 완화하는 데 사용되는 약물입니다.",
        en: "Tylenol is used primarily for pain relief and fever reduction."
    },
    "이부프로펜": {
        ko: "이부프로펜은 비스테로이드 항염증제로, 통증과 염증을 완화합니다.",
        en: "Ibuprofen is a nonsteroidal anti-inflammatory drug that alleviates pain and inflammation."
    },
    "나프록센": {
        ko: "나프록센은 통증 완화 및 염증 치료에 사용됩니다.",
        en: "Naproxen is used to relieve pain and treat inflammation."
    },
    "파라세타몰": {
        ko: "파라세타몰은 통증 및 열을 낮추는 데 효과적입니다.",
        en: "Paracetamol is effective for reducing pain and fever."
    },
    "항히스타민제": {
        ko: "알레르기 증상을 완화하는 약물입니다.",
        en: "Antihistamines are medications that relieve allergy symptoms."
    },
    "아목시실린": {
        ko: "아목시실린은 항생제로, 세균 감염 치료에 사용됩니다.",
        en: "Amoxicillin is an antibiotic used to treat bacterial infections."
    },
    "메트로니다졸": {
        ko: "메트로니다졸은 항생제로, 특정 세균 및 기생충 감염 치료에 사용됩니다.",
        en: "Metronidazole is an antibiotic used to treat certain bacterial and parasitic infections."
    },
    "시프로플록사신": {
        ko: "시프로플록사신은 세균 감염 치료에 사용되는 항생제입니다.",
        en: "Ciprofloxacin is an antibiotic used to treat bacterial infections."
    },
    "리팜피신": {
        ko: "리팜피신은 결핵 치료에 사용되는 항생제입니다.",
        en: "Rifampicin is an antibiotic used to treat tuberculosis."
    },
    "플루옥세틴": {
        ko: "플루옥세틴은 우울증 및 불안 장애 치료에 사용되는 항우울제입니다.",
        en: "Fluoxetine is an antidepressant used to treat depression and anxiety disorders."
    },
    "세트랄린": {
        ko: "세트랄린은 우울증 및 불안 장애에 사용되는 항우울제입니다.",
        en: "Sertraline is an antidepressant used for depression and anxiety disorders."
    },
    "벤라팍신": {
        ko: "벤라팍신은 우울증 및 불안 장애 치료에 사용됩니다.",
        en: "Venlafaxine is used to treat depression and anxiety disorders."
    },
    "리튬": {
        ko: "리튬은 조울증 치료에 사용되는 기분 안정제입니다.",
        en: "Lithium is a mood stabilizer used in the treatment of bipolar disorder."
    },
    "발프로산": {
        ko: "발프로산은 간질 및 기분 장애 치료에 사용됩니다.",
        en: "Valproate is used to treat epilepsy and mood disorders."
    },
    "메트포르민": {
        ko: "메트포르민은 제2형 당뇨병 치료에 사용되는 약물입니다.",
        en: "Metformin is used to treat type 2 diabetes."
    },
    "인슐린": {
        ko: "인슐린은 당뇨병 관리에 필수적인 호르몬입니다.",
        en: "Insulin is a hormone essential for managing diabetes."
    },
    "아토르바스타틴": {
        ko: "아토르바스타틴은 고지혈증 치료에 사용되는 약물입니다.",
        en: "Atorvastatin is used to treat high cholesterol."
    },
    "심바스타틴": {
        ko: "심바스타틴은 콜레스테롤 수치를 줄이는 데 도움을 줍니다.",
        en: "Simvastatin helps reduce cholesterol levels."
    },
    "플라빅스": {
        ko: "플라빅스는 혈전 예방에 사용되는 약물입니다.",
        en: "Plavix is used to prevent blood clots."
    }
};

let currentLanguage = 'ko'; // 기본 언어 설정

function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    getDrugInfo(); // 언어 변경 시 정보 새로 고침
}

function getDrugInfo() {
    const drugName = document.getElementById('drugName').value;
    const resultDiv = document.getElementById('result');

    if (drugDatabase[drugName]) {
        resultDiv.innerHTML = `<p>${drugDatabase[drugName][currentLanguage]}</p>`;
    } else {
        resultDiv.innerHTML = `<p>해당 약물에 대한 정보가 없습니다.</p>`;
    }
}

function autocomplete() {
    const input = document.getElementById('drugName');
    const filter = input.value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (!filter) {
        suggestions.style.display = 'none';
        return;
    }

    const filteredDrugs = Object.keys(drugDatabase).filter(drug => drug.toLowerCase().includes(filter));
    
    filteredDrugs.forEach(drug => {
        const suggestion = document.createElement('div');
        suggestion.textContent = drug;
        suggestion.style.cursor = 'pointer';
        suggestion.onclick = () => {
            input.value = drug;
            suggestions.innerHTML = '';
            suggestions.style.display = 'none';
        };
        suggestions.appendChild(suggestion);
    });

    suggestions.style.display = filteredDrugs.length ? 'block' : 'none';
}
