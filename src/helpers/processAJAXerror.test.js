const processAJAXerror = require("./processAJAXerror")
// @ponicode
describe("processAJAXerror.default", () => {
    test("0", () => {
        let callFunction = () => {
            processAJAXerror.default({ request: 500, response: { data: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            processAJAXerror.default({ request: 400, response: { data: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            processAJAXerror.default({ request: 200, response: { data: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            processAJAXerror.default({ request: 429, response: { data: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            processAJAXerror.default({ request: 404, response: { data: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            processAJAXerror.default({ request: NaN, response: {} })
        }
    
        expect(callFunction).not.toThrow()
    })
})
