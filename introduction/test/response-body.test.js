import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send("<h1>Hello World</h1>");
})


test("request test", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.get("Content-Type")).toContain("text/html");
    expect(response.text).toBe("<h1>Hello World</h1>");
})