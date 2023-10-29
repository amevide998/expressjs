import Redis from "ioredis";

describe("redis test", () => {

    let redis = null;

    beforeEach(async () =>{
        redis = new Redis({
            host: "127.0.0.1",
            port: 6379,
            db: 0
        });
    })

    afterEach(async () => {
        await redis.quit()
    })


    it("should connect to redis", async ()=>{
        const res = await redis.ping();
        expect(res).toBe("PONG");
    })

    it("should support string", async ()=>{
        await redis.setex("name", 2,"ame");
        const res = await redis.get("name");
        expect(res).toBe("ame");

        // sleep for 3 second
        await new Promise(resolve => setTimeout(resolve, 3000));
        const res2 = await redis.get("name");
        expect(res2).toBe(null);
    })

})