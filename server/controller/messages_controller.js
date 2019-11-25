let messages = [];
let id = 0;

module.exports = {
    read: (req, res, next) => {
        res.status(200).send(messages);
    },
    create: (req, res, next) => {
        const { text, time } = req.body;
        const newMessage = {
            id, 
            text, 
            time
        }

        messages.push(newMessage);
        id++

        res.status(200).send(messages);
    },
    update: (req, res, next) => {
        const { text } = req.body;
        const id = req.params.id;
        const index = messages.findIndex(message => {
            return message.id === +id;
        });
        if (index !== -1){
            let message = messages[index];
    
            messages[index] = {
                id: message.id,
                text: text || message.text,
                time: message.time
            };
    
            res.status(200).send(messages);
        }else {
            res.status(404).send('Message not found!');
        }
    },
    delete: (req, res, next) => {
        const id = req.params.id;
        const index = messages.findIndex(message => {
            return message.id === +id;
        });

        if (index !== -1) {
            messages.splice(index, 1);
            res.status(200).send(messages);
        }else {
            res.status(404).send('Message not found!');
        }
    }
}