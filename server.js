const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 5000;



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
    app.listen(port, () => {
        console.log(`서버가 포트 ${port}에서 시작되었습니다.`);
    });
});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());


app.get("/*", (req, res) => {
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

// // 사용자가 직접 입력한 내용.
// app.post('/addData', (req, res)=>{
//     const {sopt, item, place, phone}
// })

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






