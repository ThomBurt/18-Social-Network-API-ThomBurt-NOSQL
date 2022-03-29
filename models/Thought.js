const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: [
            {
              type: String,
              required: true,
              ref: 'User'
            }
          ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    }
)



const thoughtSchema = new Schema(
     {
         thoughtText: {
             type: String,
             required: 'You must enter a thought',
             minLength: 1,
             maxLength : 280
         },
         createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          },
          username: [
            {
              type: String,
              required: true,
              ref: 'User'
            }
          ],
          reactions: [reactionSchema]
     },
     {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
 );

 thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;