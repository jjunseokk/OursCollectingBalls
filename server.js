const mysql = require('mysql2');
const express = require('express');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'junseok12',
    database: 'testDB',
});

connection.connect((error) => {
    if (error) {
        console.error('연결 실패:', error);
        return;
    }
    console.log('연결 성공');
});

const app = express();

// 여기에 Express 애플리케이션의 미들웨어와 라우트를 추가하세요.

const port = 5000;
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 시작되었습니다.`);
});

// 서버 종료 시 MySQL 연결을 끊습니다.
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});
