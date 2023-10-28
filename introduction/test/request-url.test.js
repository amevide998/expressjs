import express from "express";
import request from "supertest";

const app = express();

app.get("/hello/world", (req, res) => {
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,
        query: req.query.name
    })
})


test("request test", async () => {
    const response = await request(app).get("/hello/world").query({name: "vide"});
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        path: "/hello/world",
        originalUrl: "/hello/world?name=vide",
        hostname: "127.0.0.1",
        protocol: "http",
        secure: false,
        query: "vide"
    })
})