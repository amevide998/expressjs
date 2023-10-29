import express from "express";
import request from "supertest";

const app = express();


app.get("/", (req, res) => {
    res.send(`hello ${req.query.firstName} ${req.query.lastName}`);
})


test("request test", async () => {
    const response = await request(app).get("/").query({firstName: "ame", lastName: "vide"});
    expect(response.status).toBe(200);
    expect(response.text).toBe("hello ame vide");
})