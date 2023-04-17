const axios = require('axios');
const {
    expect
} = require("chai");
const validator = require('jsonschema')
const microsoftScheme = require('../data/microsoftScheme.json')
const microsoftTranslationScheme = require('../data/microsoftTranslationScheme.json')


describe('Microsoft Translator Text testing', async () => {
    describe('GET API tests', async () => {
        let response;

        before(async () => {
            response = await axios({
                method: 'GET',
                url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
                params: {
                    'api-version': '3.0'
                },
                headers: {
                    'X-RapidAPI-Key': 'c56c70e81dmshb2393ec71806615p1dc6edjsnbcbcccf622b9',
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                }
            })
        })

        it('Status code should be 200', async () => {
            expect(response.status).to.be.equal(200)
        })

        it('Json schema should be valid', async () => {
            const result = validator.validate(response.data, microsoftScheme)
            expect(result.valid).to.be.equal(true)
        })
    })

    describe('POST API tests', async () => {
        let response;
       
        before(async () => {
            response = await axios({
                method: 'POST',
                url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
                params: {
                    'api-version': '3.0',
                    'to[0]': 'it',
                    textType: 'plain',
                    profanityAction: 'NoAction'
                },
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'c56c70e81dmshb2393ec71806615p1dc6edjsnbcbcccf622b9',
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                },
                data: '[{"Text":"Happy New Year!"}]'
            })
        })

        it('Status code should be 200', async () => {
            expect(response.status).to.be.equal(200)
        })

        it('Json schema should be valid', async () => {
            const result = validator.validate(response.data, microsoftTranslationScheme)
            expect(result.valid).to.be.equal(true)
        })

        it('Translated text should be correct', async () => {
            const translatedtext = await response.data[0].translations[0].text
            expect(translatedtext).to.contain('Felice anno nuovo!')
        })
    })
})