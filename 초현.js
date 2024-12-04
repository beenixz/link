document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 사용자 입력 정보
    const strengths = document.getElementById('strengths').value;
    const weaknesses = document.getElementById('weaknesses').value;
    const skills = document.getElementById('skills').value;

    // 퀴즈 답변 수집
    const question1 = document.querySelector('input[name="question1"]:checked').value;
    const question2 = document.querySelector('input[name="question2"]:checked').value;
    const question3 = document.querySelector('input[name="question3"]:checked').value;
    const question4 = document.querySelector('input[name="question4"]:checked').value;

    // 직업 추천 로직 실행
    const jobRecommendations = getJobRecommendationsFromQuiz(question1, question2, question3, question4);

    // 추천 결과 표시
    displayRecommendations(jobRecommendations, strengths, weaknesses, skills);
});

// 관심 분야에 따른 직업 추천
function getJobRecommendationsFromQuiz(answer1, answer2, answer3, answer4) {
    let jobs = [];

    // 첫 번째 질문: 어떤 주제에 가장 관심이 있나요?
    if (answer1 === '과학') {
        jobs.push('과학자', '의사', '생물학자');
    } else if (answer1 === '예술') {
        jobs.push('디자이너', '화가', '뮤지션');
    } else if (answer1 === '기술') {
        jobs.push('프로그래머', '시스템 엔지니어', '웹 개발자');
    } else if (answer1 === '사회') {
        jobs.push('사회복지사', '교사', '정치인');
    }

    // 두 번째 질문: 어떤 유형의 작업을 좋아하나요?
    if (answer2 === '창의적') {
        jobs.push('광고 크리에이터', '예술 감독');
    } else if (answer2 === '분석적') {
        jobs.push('데이터 분석가', '연구원');
    } else if (answer2 === '실용적') {
        jobs.push('기술 지원 전문가', '설계사');
    } else if (answer2 === '협력적') {
        jobs.push('팀 매니저', 'HR 전문가');
    }

    // 세 번째 질문: 어떤 환경에서 일하는 것을 선호하나요?
    if (answer3 === '실외') {
        jobs.push('환경 과학자', '농업 전문가');
    } else if (answer3 === '사무실') {
        jobs.push('사무직 직원', '회계사');
    } else if (answer3 === '자유로운') {
        jobs.push('프리랜서', '작가');
    } else if (answer3 === '팀워크') {
        jobs.push('팀 매니저', '프로젝트 매니저');
    }

    // 네 번째 질문: 어떤 문제 해결 방식을 선호하나요?
    if (answer4 === '창의적') {
        jobs.push('광고 크리에이터', '예술 감독');
    } else if (answer4 === '논리적') {
        jobs.push('변호사', 'IT 컨설턴트');
    } else if (answer4 === '실용적') {
        jobs.push('기술 지원 전문가', '설계사');
    } else if (answer4 === '감정적') {
        jobs.push('상담사', '심리학자');
    }

    return [...new Set(jobs)]; // 중복 제거
}

// 추천 결과 표시
function displayRecommendations(jobs, strengths, weaknesses, skills) {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';

    // 사용자 정보 출력
    const userInfo = document.createElement('li');
    userInfo.textContent = `장점: ${strengths || "입력되지 않음"}, 단점: ${weaknesses || "입력되지 않음"}, 특기: ${skills || "입력되지 않음"}`;
    jobList.appendChild(userInfo);
    
    // 추천 직업 리스트 출력
    if (jobs.length === 0) {
        const li = document.createElement('li');
        li.textContent = '추천할 직업이 없습니다.';
        jobList.appendChild(li);
    } else {
        jobs.forEach(job => {
            const li = document.createElement('li');
            li.textContent = job;
            jobList.appendChild(li);
        });
    }

    document.getElementById('recommendations').classList.remove('hidden');
}

// 다시 시도하기 버튼 클릭 시 동작
document.getElementById('retryButton').addEventListener('click', function() {
    document.getElementById('recommendations').classList.add('hidden');
    document.getElementById('quizForm').reset();
    document.getElementById('strengths').value = '';
    document.getElementById('weaknesses').value = '';
    document.getElementById('skills').value = '';
});
