# <div align="center"> SERVER </div>

<div align="center">

Anonymous Server

account, login, board, comment CRUD 기능을 간단하게 적용하여 구현한 게시판입니다. 서버에서는 JSON 형태로 클라이언트에게 전송합니다. 현재 지원 가능한 HTTP 메소드는 DELETE, POST, GET, PATCH 가 있으며, 메소드를 통해 테스트 해보실 수 있습니다.

</div>

<br>

## ERD

<img src="./public/img/diagram.png">

<br>

## Step

1. Maria-DB를 설치합니다.
2. .env 파일에 디비를 설정합니다.
3. 아래 쿼리문을 실행하여 데이터베이스 및 테이블을 생성해주세요.

```sql
-- 데이터베이스 생성
create database Anonymous
```

```sql
-- 유저 테이블 생성
CREATE TABLE USERS ( user_id VARCHAR(100) NOT NULL, user_pw VARCHAR(200) NOT NULL, user_name VARCHAR(100) NOT NULL, user_email VARCHAR(100), user_regdate DATE, primary key (user_id) );
```

```sql
-- 게시판 테이블 생성
CREATE TABLE BOARD ( board_no INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, board_title VARCHAR(200) NOT NULL, board_content TEXT(65535) NOT NULL, board_regdate DATE, user_id  VARCHAR(100) NOT NULL, FOREIGN KEY(user_id) REFERENCES USERS(user_id) );
```

```sql
-- 댓글 테이블 생성
create table COMMENT ( comment_no INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, comment_parent INT(10) DEFAULT NULL, comment_content TEXT(65535) NOT NULL, comment_regdate DATE NOT NULL, comment_status CHAR(1) DEFAULT 'Y', board_no INT(10) NOT NULL, user_id VARCHAR(100) NOT NULL, FOREIGN KEY(board_no) REFERENCES BOARD(board_no) on delete cascade , FOREIGN KEY(user_id) REFERENCES USERS(user_id) on delete cascade);
```

<br>

4. node 설치 후 패키지를 설치합니다.

```sh
npm install --save
npm install -g nodemon ts-node
```

<br>

5. 서버를 실행합니다.

```sh
npm start
```

<br>

## ErrorCode

| ErrorCode | Description                                           |
| --------- | ----------------------------------------------------- |
| 200       | 성공                                                  |
| 301       | 필수 파라미터가 존재하지 않습니다.                    |
| 302       | 파라미터 값의 최소값 혹은 최대값이 일치하지 않습니다. |
| 303       | 회원정보가 일치하지 않습니다.                         |
| 304       | 현재 로그아웃 상태입니다.                             |
| 305       | 권한이 존재하지 않습니다.                             |
| 306       | 유저아이디가 일치하지 않습니다.                       |
| 307       | COMMENT가 일치하지 않습니다.                          |
| 401       | 데이터베이스에 INSERT 도중 에러가 발생하였습니다.     |
| 402       | 데이터베이스에 SELECT 도중 에러가 발생하였습니다.     |
| 403       | 데이터베이스에 DELETE 도중 에러가 발생하였습니다.     |
| 404       | 데이터베이스에 UPDATE 도중 에러가 발생하였습니다.     |
| 999       | 알 수 없는 오류가 발생하였습니다.                     |
