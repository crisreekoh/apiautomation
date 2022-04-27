/// <reference types ="Cypress" />

describe('get api user test', ()=>{

let accessToken = '2f2e2b47f18ddbc9ecbb1b3a752520c68e467cd276a530d79d3cf3e83332c637'


it('get users', ()=>{
    cy.request({

        method : 'GET',
        url : 'https://gorest.co.in/public/v1/users',
        headers : {
            'authorization' : "Bearer" + accessToken
        }


    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.meta.pagination.limit).to.eq(20)

    })

})

it('get users by id', ()=>{
    cy.request({

        method : 'GET',
        url : 'https://gorest.co.in/public/v1/users/2558',
        headers : {
            'authorization' : "Bearer" + accessToken
        }


    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data.name).to.eq('Krishnadasa Panicker')

    })

})


})