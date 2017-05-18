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

    it ("传入'he' 返回‘he 1’", function () {

        var result = main('he');
        var expect_string = 'he 1';

        expect(expect_string).to.equal(result);

    })

})