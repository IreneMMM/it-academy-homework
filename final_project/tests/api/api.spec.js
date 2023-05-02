const {
    test,
    expect
} = require('@playwright/test');

test.describe('API testing', async () => {

    const baseUrl = 'https://www.decathlon.com'

    test('Check response status', async ({
        request
    }) => {
        const response = await request.get(`${baseUrl}/collections/tennis`)
        expect(response.status()).toBe(200)
    })

    test('Check response status for invalid endpoint', async ({
        request
    }) => {
        const response = await request.get(`${baseUrl}/collections/hello`)
        expect(response.status()).toBe(404)
    })

    test('Check response data', async ({
        request
    }) => {

        const response = await request.post('https://www.decathlon.com/api/graphql', {
            data: {
                "query": "\n  query testStorefrontAPIQuery {\n    shop {\n      name\n    }\n  }\n"
            },

            headers: {
                authorization: `Basic dHQ0OTk5MjQxQGdtYWlsLmNvbTpxYXp3c3gxNDcyNTg=`,
                'X-Shopify-Storefront-Access-Token': 'f6c7c4e4db56de88295c2ba45762a331'
            }
        });

        const content = await response.json();
        expect(content).toBeDefined();
        expect(content).toMatchObject({ data: { shop: { name: 'Decathlon' } } })
    })


})