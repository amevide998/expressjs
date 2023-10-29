import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.redirect('/hello');
})

app.get("/hello", (req, res) => {
    res.send("Hello World");
})


test("request test", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(302);
    expect(response.get('location')).toBe("/hello");
})
