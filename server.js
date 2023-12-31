const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require("http");
const port = 5000;

require('dotenv').config();
console.log("ss",);

const connection = mysql.createConnection({
    host: process.env.MySQL_Host,
    port: 3306,
    user: process.env.MySQL_User,
    password: process.env.MySQL_Password,
    database: process.env.MySQL_Database,
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

http.createServer(app).listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});

connection.on('error', function (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Database connection was closed.');
        connection.connect(); // 재연결 시도
    } else {
        throw err;
    }
});

connection.connect((error) => {
    if (error) {
        console.error('연결 실패:', error);
        return;
    }
});

// 예약확정
app.post('/user', (req, res) => {
    const { address, date, service, event, collect, time } = req.body;
    console.log(address, date, service, event, collect, time);
    if (!address || !date || !service || !collect) {
        res.status(400).json({ error: 'address, date, service, collect 필드가 필요합니다.' });
        return;
    }

    const query = `INSERT INTO tbl_ours_trading (name, cellphone, email, spot ,place, shop, date, timezone, collect, inquiry, event, time) VALUES ('${service.service.name}','${service.service.phoneNumber}','${service.service.email}','${address.add.spot}','${address.add.address}','${address.add.shop}','${date.date}','${date.time}','${collect.collect}','${service.service.inquiry}','${event.event}', '${time.time}' )`;
    const values = [address, date, service, event, collect];
    console.log("추가")

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

    const query = `SELECT * FROM tbl_ours_trading WHERE name ='${name}' AND cellphone='${phoneNumber}'`;

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
        // console.log(result);
    });
});

//예약 내역 삭제!!!!
app.post('/delete', (req, res) => {
    console.log("연결", req.body);
    const { key, name } = req.body;


    const query = `DELETE FROM tbl_ours_trading WHERE name='${name}' AND keyid=${key}`;

    connection.query(query, (error, result) => {
        if (error) {
            console.error("delete 쿼리 오류:::", error);
        }

        res.json({ result });
    });
});


// qving 매장 db 접근
app.post('/qving', (req, res) => {
    console.log("연결");

    const query = `SELECT a.num,a.com_code_num,a.com_code_dealer_num,a.store_type,a.store_type_flag,a.com_code_store_id,a.com_code_store_name,a.com_type,a.com_style,a.owner_name,a.com_man_knum,a.tel,a.fax,a.hphone,a.store_area,a.com_post,a.com_address1,a.com_address2,a.com_num,a.com_email,a.open_day,a.close_day,a.is_valid,a.thumbnail,a.write_day,a.manager_name,a.bank_name,a.bank_num,a.pay_day,a.memo,a.gps_lat,a.gps_long,a.gps_lng,a.rep_tel_1,a.rep_tel_2,a.van_code,a.van_tid FROM tbl_com_code_store a INNER JOIN tbl_machine_master b ON b.com_code_store_num = a.num AND b.mac_type IN ('QB','QK') WHERE NOT (com_code_store_name LIKE '%(철수)%' OR com_code_store_name LIKE '%테스트%' OR com_code_store_name LIKE '%LENOVO%' OR com_code_store_name LIKE '%성남4차매장%' OR com_code_store_name LIKE '%사이니지%')
    UNION
    SELECT num,com_code_num,com_code_dealer_num,store_type,store_type_flag,com_code_store_id,com_code_store_name,com_type,com_style,owner_name,com_man_knum,tel,fax,hphone,store_area,com_post,com_address1,com_address2,com_num,com_email,open_day,close_day,is_valid,thumbnail,write_day,manager_name,bank_name,bank_num,pay_day,memo,gps_lat,gps_long,gps_lng,rep_tel_1,rep_tel_2,van_code,van_tid FROM tbl_ours_store`;

    connection.query(query, (error, result) => {
        if (error) {
            console.error('qving 접근 쿼리 오류:::', error);
        }

        res.json({ data: result });
    })
});

// ours DB에 추가.
app.post('/addData', (req, res) => {
    const { shop, address, phone } = req.body;

    const query = `INSERT INTO tbl_ours_store (com_code_store_name, com_address1, hphone) VALUES ('${shop}', '${address}', '${phone}')`;

    connection.query(query, (error, result) => {
        if (error) {
            console.error('DB추가 오류', error);
        }
        res.json({ data: result });
    })
});
