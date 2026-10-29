import mongoose, {Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
{

    videofile:{
        type: String,  // cloudinary urll
        required: true
    },

    thumbnail:{
        type: String,  // cloudinary urll
        required: true
    },


        title:{
        type: String,  
        required: true
    },

      description:{
        type: String,  
        required: true
    },
      duration:{
        type: Number,  
        required: true
    },

      views:{
        type: Number,  // cloudinary urll
   default : 0
    },

      isPublished:{
        type: Boolean,  // cloudinary urll
    default : true
    },


      owner:{
        type: Schema.Types.ObjectId, 
        ref: "User"
   
    },
    
{

  videofile:{
    type: String,  // cloudinary urll 
    required : true

  },

    thumbnail:{
    type: String,  // cloudinary urll 
    required : true

  },

    title:{
    type: String,  // cloudinary urll 
    required : true

  },

    description:{
    type: String,  // cloudinary urll 
    required : true

  },


    duration:{
    type: Number,  // cloudinary urll 
    required : true

  },

    views:{
    type: Number,  // cloudinary urll 
default:0
  },

  isPublished:{
    type: Boolean,
    default:0
  },


    owner:{
    type: Schema.Types.ObjectId, 
    ref: "User",

  }
},


{
    timestamps:true
}
)


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
