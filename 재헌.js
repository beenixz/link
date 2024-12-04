function showDetails(robot) {
    let name = '';
    let description = '';

    switch (robot) {
        case 'roomba':
            name = 'iRobot Roomba 980';
            description = 'iRobot Roomba 980은 최신 스마트 청소 기능을 갖춘 로봇 청소기로, Wi-Fi 연결을 통해 스마트폰 앱으로 제어할 수 있습니다. ' +
                          '자체적으로 청소 경로를 계획하고, 장애물을 감지하여 충돌을 피하며, 최대 2시간 동안 지속적으로 작동할 수 있습니다. ' +
                          '또한, 특정 구역을 지정하여 집중 청소를 할 수 있는 기능이 있어, 바쁜 가정에서 특히 유용합니다.';
            break;
        case 'neato':
            name = 'Neato Botvac D7';
            description = 'Neato Botvac D7은 레이저 네비게이션 기술을 사용하여 집안의 구조를 정확하게 파악하고, 최적의 청소 경로를 계산합니다. ' +
                          '이 로봇은 2000Pa의 강력한 흡입력을 자랑하며, 반려동물 털이나 먼지를 효과적으로 제거합니다. ' +
                          '사용자는 앱을 통해 청소 일정을 설정하고, 특정 구역 청소를 요청할 수 있어 편리합니다.';
            break;
        case 'ecovacs':
            name = 'Ecovacs Deebot Ozmo T8';
            description = 'Ecovacs Deebot Ozmo T8은 진공 청소와 물걸레 청소를 동시에 수행할 수 있는 다기능 로봇입니다. ' +
                          '고급 센서와 카메라를 사용하여 주변 환경을 인식하고, 장애물을 회피하며, 더러운 부분을 집중적으로 청소합니다. ' +
                          '또한, 스마트폰 앱을 통해 다양한 청소 모드를 설정할 수 있어, 각 방의 바닥 상태에 맞춰 청소를 최적화합니다.';
            break;
        case 'roborock':
            name = 'Roborock S6 MaxV';
            description = 'Roborock S6 MaxV는 AI 기반의 장애물 회피 시스템을 갖춘 로봇 청소기입니다. ' +
                          '이 로봇은 2500Pa의 강력한 흡입력을 가지고 있으며, 정밀한 청소를 위해 다양한 센서를 사용합니다. ' +
                          '특히, 고양이와 개와 같은 반려동물의 장난감을 감지하여 청소 중 충돌을 방지하는 기능이 있어, 반려동물과 함께 사는 가정에 적합합니다.';
            break;
        case 'bostonDynamics':
            name = 'Boston Dynamics Spot';
            description = 'Boston Dynamics Spot은 다양한 환경에서 작업할 수 있도록 설계된 로봇 개입니다. ' +
                          '이 로봇은 뛰어난 기동성과 안정성을 가지고 있으며, 산업 현장에서 주로 사용됩니다. ' +
                          'Spot은 카메라와 센서를 통해 주변 환경을 인식하며, 원격 제어가 가능하여 다양한 작업을 수행할 수 있습니다. ' +
                          '예를 들어, 건설 현장에서의 데이터 수집이나 감시 작업에 유용합니다.';
            break;
        case 'ubtech':
            name = 'UBTech Jimu Robot';
            description = 'UBTech Jimu Robot은 어린이를 위한 코딩 교육용 조립식 로봇입니다. ' +
                          '이 로봇은 사용자가 직접 조립하고 프로그래밍할 수 있어, STEM 교육에 적합합니다. ' +
                          '아이들은 앱을 통해 로봇을 제어하고, 다양한 동작을 프로그래밍하여 창의력과 문제 해결 능력을 키울 수 있습니다.';
            break;
        case 'sphero':
            name = 'Sphero Mini';
            description = 'Sphero Mini는 스마트폰으로 조정 가능한 미니 로봇입니다. ' +
                          '이 로봇은 아이들이 프로그래밍을 배우는 데 도움을 주는 다양한 게임과 활동을 제공합니다. ' +
                          '작고 귀여운 디자인 덕분에 아이들이 쉽게 사용하고 조작할 수 있으며, 블루투스를 통해 스마트폰과 연결됩니다.';
            break;
        case 'miko':
            name = 'Miko 3';
            description = 'Miko 3는 어린이를 위한 AI 로봇으로, 교육과 놀이 기능을 제공합니다. ' +
                          '이 로봇은 아이들과 상호작용하며, 다양한 게임, 퀴즈, 그리고 학습 자료를 제공하여 재미있게 배울 수 있도록 돕습니다. ' +
                          'Miko는 감정 인식 기능이 있어, 아이들의 기분에 맞춰 반응할 수 있어 더욱 친근한 경험을 제공합니다.';
            break;
        case 'dji':
            name = 'DJI RoboMaster S1';
            description = 'DJI RoboMaster S1은 교육용 로봇으로, 코딩과 게임 기능을 제공합니다. ' +
                          '이 로봇은 사용자에게 프로그래밍과 로봇 공학에 대한 흥미를 불러일으키며, 다양한 센서와 카메라를 통해 실시간으로 데이터를 처리합니다. ' +
                          '학생들은 RoboMaster S1을 사용하여 팀워크와 문제 해결 능력을 기를 수 있으며, 경쟁적인 게임 모드를 통해 재미를 더할 수 있습니다.';
            break;
    }

    document.getElementById('robotName').innerText = name;
    document.getElementById('robotDescription').innerText = description;
    document.getElementById('details').style.display = 'block';
}

function closeDetails() {
    document.getElementById('details').style.display = 'none';
}
