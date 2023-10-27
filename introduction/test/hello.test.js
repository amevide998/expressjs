import app from "../src/hello.js";
import request from "supertest";

test("hello test", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
})