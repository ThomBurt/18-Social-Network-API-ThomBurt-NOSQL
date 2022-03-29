const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')

 const userSchema = new Schema(
     {
         username: {
             type: String,
             unique: true,
             required: 'You must enter a username',
             trim: true
         },
         email: {
            type: String,
            require: 'You MUST enter a valid email address',
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
          },
          thoughts: [thoughtSchema],
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User'
            }
          ]
     },
     {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
 );


 userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });


const User = model('User', userSchema);

module.exports = User;