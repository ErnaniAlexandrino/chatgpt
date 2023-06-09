const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")

module.exports = {

    async sendText(req, resp) {

        const openAI = openai.configuration()
        const inputModel = new InputPrompt(req.body)

        try {
            const response = await openAI.createCompletion(openai.textCompletion(inputModel))
            return resp.status(200).json(
                {
                    sucess: true,
                    data: response.data.choices[0].text
                }
            )

        } catch (error) {
            return resp.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : 'error no serviço'
            })
        }

    }

}