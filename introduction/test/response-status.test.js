import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    if(req.query.name){
        res.status(200).send(`hello ${req.query.name}`);
    }else{
        res.status(400).end();
    }
})

test("request test", async () => {
    const response = await request(app).get("/").query({name: "ame"});
    expect(response.status).toBe(200);
    expect(response.text).toBe("hello ame");

    const response2 = await request(app).get("/");
    expect(response2.status).toBe(400);
})