import ApiHelper from './ApiHelper'
import fetchMock from 'fetch-mock'
import chai from 'chai'

describe('API Call', function () {
  beforeEach(function(){
    fetchMock.get("*", {features :
      [{properties :
      {label : "Coucou tu veux voir ma skool?"}
      }]
    });
  })
  afterEach(function(){
   fetchMock.restore()
    })
  it('call the Api', function () {

    return ApiHelper.callApi()
      .then(function(response){
        chai.expect(fetchMock.calls().matched).to.have.length(1)
        chai.expect(response).to.deep.equals(["Coucou tu veux voir ma skool?"])
      });
  });
});