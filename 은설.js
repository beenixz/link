const API_KEY = 'AIzaSyDlZGoRBHYjUl2ByorGnCsqBJ1-Obq4bW8'; // 발급받은 API 키를 입력하세요
const searchBtn = document.getElementById('searchBtn');
const videoList = document.getElementById('videoList');
const videoPlayer = document.getElementById('videoPlayer');
const player = document.getElementById('player');
const closeBtn = document.getElementById('closeBtn');

searchBtn.addEventListener('click', () => {
    const query = document.getElementById('search').value;
    fetchVideos(query);
});

function fetchVideos(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayVideos(data.items))
        .catch(error => console.error('Error:', error));
}

function displayVideos(videos) {
    videoList.innerHTML = ''; // 기존 비디오 목록 초기화
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <h3>${video.snippet.title}</h3>
            <img src="${video.snippet.thumbnails.default.url}" alt="${video.snippet.title}">
            <p>${video.snippet.description}</p>
        `;
        videoItem.addEventListener('click', () => openPlayer(video.id.videoId));
        videoList.appendChild(videoItem);
    });
}

function openPlayer(videoId) {
    videoPlayer.classList.add('show'); // 모달 표시
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // 자동 재생
}

closeBtn.addEventListener('click', () => {
    closePlayer();
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (event) => {
    if (event.target === videoPlayer) {
        closePlayer();
    }
});

function closePlayer() {
    videoPlayer.classList.remove('show'); // 모달 숨기기
    player.src = ''; // 비디오 정지
}
