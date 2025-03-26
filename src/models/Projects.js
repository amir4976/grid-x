
const mongoose = require("mongoose");

const projectsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ClientName: {
      type: String,
      required: true,
    },
    AboutProject: {
      type: String,
      required: true,
    },
    aboutClient: {
      type: String,
      required: true,
    },
    servisekind: {
      type: String,
      required: true,
    },
    projectKind: {
      type: String,
      required: true,
    },
    ProjectDescription: {
      type: String,
      required: true,
    },
    Year: {
      type: String,
      required: true,
    },
    ProjectCover: {
        type:String,
        required:true
    },
    ProjectPageCover: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Projects || mongoose.model("Projects", projectsSchema);
