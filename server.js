const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require("http");
const port = 6000;

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'ours.cohoyi0rdiro.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    password: 'junseok12!',
    database: 'user',
});

connection.connect((error) => {
    if (error) {
        console.error('연결 실패:', error);
        return;
    }
    http.createServer(app).listen(port, () => {
        console.log(`app listening at ${port}`);
    });
});

const app = express();
app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
    res.set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Date: Date.now()
    });
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 예약확정
app.post('/user', (req, res) => {
    const { address, date, service, event, collect, time } = req.body;
    console.log(time);
    if (!address || !date || !service || !collect) {
        res.status(400).json({ error: 'address, date, service, collect 필드가 필요합니다.' });
        return;
    }

    const query = `INSERT INTO ours (name, phoneNumber, email, spot ,place, shop, date, collect, inquiry, event, time) VALUES ('${service.service.name}','${service.service.phoneNumber}','${service.service.email}','${address.add.spot}','${address.add.address}','${address.add.shop}','${date.date}','${collect.collect}','${service.service.inquiry}','${event.event}', '${time.time}' )`;
    const values = [address, date, service, event, collect];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('insert 쿼리 오류:::', error);
            res.status(500).json({ error: '데이터를 삽입하는 중에 오류가 발생했습니다.' });
            return;
        }
        res.json({ success: results });
    });
});


// 예약확인 내역
app.post('/check', (req, res) => {
    const { name, phoneNumber } = req.body;

    const query = `SELECT * FROM ours WHERE name ='${name}' AND phoneNumber='${phoneNumber}'`;

    connection.query(query, (error, result) => {
        if (error) {
            console.error('select 쿼리 오류::::', error);
            res.status(500).json({ error: '데이터베이스 조회 중에 오류가 발생했습니다.' });
            return;
        }

        if (result.length > 0) {
            // 레코드가 존재하는 경우
            res.json({ exists: true, result });
        } else {
            // 레코드가 존재하지 않는 경우
            res.json({ exists: false });
        }
        console.log(result);
    })
})

//예약 내역 삭제!!!!
app.post('/delete', (req, res) => {
    console.log("연결", req.body);
    const { date, name } = req.body;

    const query = `DELETE FROM ours WHERE name='${name}' AND date='${date}'`;

    connection.query(query, (error, result) => {
        if (error) {
            console.error("delete 쿼리 오류:::", error);
        }

        res.json({ result })
    })
})

// 서버 종료 시 MySQL 연결을 끊습니다.
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});






