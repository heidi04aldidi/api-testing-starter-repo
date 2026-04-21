const chai = require("chai");
const chaiHTTP = require("chai-http");

const expect = chai.expect;
const app = require("../src/app");

chai.use(chaiHTTP);

describe("testing suite-1", () => {
    after(() => {

    });
    before(() => {

    });
    aftereach(() => {

    });
    beforeeach(() => {

    });

    it("sum of two numbers", () => {
        expect(3 + 9).to.be.equal(12);
    });

    it("testing API", async () => {
      const res = await chaiHTTP.request.execute(app).get("/");
      // .set({}).send();
      expect(res.status).to.be.equal(200);
      expect(res.body.success).to.be.equal(true);
      expect(res.body.message).to.be.equal("Welcome to the Todo API");
    });

    it("testing API-2", async () => {
        const res = await chai.request(app).post("/todos").send({ title: "New Todo" });
        expect(res.status).to.be.equal(201);
        expect(res.body.success).to.be.equal(true);
        expect(res.body.message).to.be.equal("Todo created successfully");
    });

});


