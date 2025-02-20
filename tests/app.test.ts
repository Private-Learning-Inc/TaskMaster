import request from "supertest";
import { app } from "../src/routes/main";

describe("GET /hello endpoint", () => {
  it("should return a 200 status code and hello world message", async () => {
    const response = await request(app).get("/hello");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello World!" });
  });
});
