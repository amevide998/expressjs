import express from "express";
import request from "supertest";

const app = express();


app.get("/request", (req, res) => {
    res.send(`hello ${req.query.name}`);
})


test("request test", async () => {
    const response = await request(app).get("/request?name=amevide");
    expect(response.status).toBe(200);
    expect(response.text).toBe("hello amevide");
})