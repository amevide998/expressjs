import express from "express";
import request from "supertest";

const app = express();


app.get("/header", (req, res) => {
    const type = req.get("accept")
    res.send(`type is ${type}`);
})


test("request test", async () => {
    const response = await request(app).get("/header")
        .set("Accept", "text/html");
    expect(response.status).toBe(200);
    expect(response.text).toBe("type is text/html");
})