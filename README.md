
# iQR

So, iQR is a platform which is made using JAVA SCRIPT, can generate QR with RAW data and can send email.


## API Reference

#### POST qr data

```http
  POST /api/v1/qrcode
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| "qr"  | `string` | **Required**. Your API key |

#### POST MAIL item

```http
  POST /api/v1/mail
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | Receipent EmAIL|
| `message`      | `img using html` | Includes Attachments|



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SMTP_HOST`

`SMTP_PORT`

`SMTP_USERNAME`

`SMTP_PASSWORD`


## BUILD

To deploy this project run

```bash
  npm run build 
```


## Demo



SITE HOSTED ON

https://iqr-fowc.onrender.com


