import express from "express";
import request from "supertest";


const app = express();

app.get("/", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Expose-Headers": "Content-Type",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Request-Headers": "Content-Type",
        "Access-Control-Request-Method": "GET",
        "Cache-Control": "no-cache"
    }).end();
})

test("request test", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.get("Access-Control-Allow-Origin")).toBe("*");
    expect(response.get("Access-Control-Allow-Methods")).toBe("GET");
    expect(response.get("Access-Control-Allow-Headers")).toBe("Content-Type");
    expect(response.get("Content-Type")).toBe("application/json; charset=utf-8");
    expect(response.get("Access-Control-Allow-Credentials")).toBe("true");
    expect(response.get("Access-Control-Expose-Headers")).toBe("Content-Type");
    expect(response.get("Access-Control-Max-Age")).toBe("3600");
    expect(response.get("Access-Control-Request-Headers")).toBe("Content-Type");
    expect(response.get("Access-Control-Request-Method")).toBe("GET");
    expect(response.get("Cache-Control")).toBe("no-cache");
})