const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
var cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(
  "/routes",
  routes,
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);

app.get("/", (req, res) => {
  res.send("Server Running......");
});

app.listen(8000, console.log("Server Connected...."));
