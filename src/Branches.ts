let score = 90;

if (score > 80) {
    console.log('素晴らしい！');
} else if (score > 60) {
    console.log('頑張りましたね！');
} else {
    console.log('より良い結果を目指しましょう。');
}

let color = 'red';

switch (color) {
    case 'red':
        console.log('止まれ！');
        break;
    case 'yellow':
        console.log('注意！');
        break;
    case 'green':
        console.log('進め！');
        break;
    default:
        console.log('無効な色です。');
}

let isAuthenticated = true;
console.log(isAuthenticated ? 'ログイン済み' : 'ログインしてください');
