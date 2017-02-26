// Python RESTful API URL
var Config = {
    API_URL : "http://192.168.199.141:5000/sfmovie/query"
}
describe("Unit test for RESTful API,", function() {
    var result ;
    beforeEach(function() {
        $.post(
            Config.API_URL,
            {"type" : "name" , "key" : "ab"},
            function (e) {
                if (e.movies) {
                  result = e.movies[0].title;
                  console.log(result);
                }
            }
        );
    });

    it("first film name should be 'Red Diaper Baby'", function(done) {
        setTimeout(function() {
            expect(result).toBe( "Red Diaper Baby" );
            done();
        }, 2000);
    });
});
