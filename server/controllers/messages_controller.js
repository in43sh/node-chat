const messages = []
let id = 0;

module.exports = {
  create( req, res ) {
    // message.push({
    //   id: id,
    //   text: req.body.text,
    //   time: req.body.time
    // })
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send( messages );
  },

  read( req, res ) {
    res.status(200).send( messages );
  },

  update( req, res ) {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex( message => message.id == updateID );
    let message = messages[ messagesIndex ];

    messages[ messageIndex ] = {
      id: message.id,
      text: text
    }
    
  },

  delete( req, res ) {
    const deleteId = req.params.id;
    messagesIndex = messages.findIndex( message => message.od == deleteId );
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }


}
