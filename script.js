function analyzeDream() {
    const dreamContent = document.getElementById('dream').value;
    let result = "普通の夢です";

    // 簡単な診断ロジック
    if (dreamContent.includes("幸せ") || dreamContent.includes("成功")) {
        result = "吉夢です";
    }

    document.getElementById('result').innerText = result;
}
