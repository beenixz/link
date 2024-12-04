function calculate() {
    const consumption = parseFloat(document.getElementById('consumption').value);
    let rate;

    // 요금 단가 설정
    if (consumption <= 200) {
        rate = 100; // kWh당 요금
    } else if (consumption <= 400) {
        rate = 200; // kWh당 요금
    } else {
        rate = 300; // kWh당 요금
    }

    // 기본 요금 계산
    const basicCharge = consumption * rate;
    // 세금 계산 (부가세 10%)
    const tax = basicCharge * 0.10;
    // 최종 요금 계산
    const totalCharge = basicCharge + tax;

    // 결과 표시
    document.getElementById('basicCharge').innerText = `기본 요금: ${basicCharge.toFixed(2)} 원`;
    document.getElementById('tax').innerText = `세금: ${tax.toFixed(2)} 원`;
    document.getElementById('totalCharge').innerText = `최종 요금: ${totalCharge.toFixed(2)} 원`;
}
