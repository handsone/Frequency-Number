/**
 * Created by gregrory on 17-5-18.
 */
"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../testmain/main.js");


describe("测试描述",function () {
    sinon.spy(console, 'log');

    it("传入'he' 返回‘he 1’", function () {

        var result = main('he');
        var expect_string = 'he 1';

        expect(expect_string).to.equal(result);

    });
    it("传入'he is' 返回‘he 1\nis 1’", function () {

        var result = main('he is');
        var expect_string = 'he 1\nis 1';

        expect(expect_string).to.equal(result);

    });
    it("传入'he    is    ' 返回‘he 1\nis 1’", function () {

        var result = main('   he    is    ');
        var expect_string = 'he 1\nis 1';

        expect(expect_string).to.equal(result);

    });
    it("传入'he    he  is ' 返回‘he 2\nis 1’", function () {

        var result = main('   he    he  is   ');
        var expect_string = 'he 2\nis 1';

        expect(expect_string).to.equal(result);

    });
    it("传入'he is a he he is is is' 返回‘is 4\nhe 3\na 1’", function () {

        var result = main('he is a he he is is is');
        var expect_string = 'is 4\nhe 3\na 1';

        expect(expect_string).to.equal(result);

    });
});