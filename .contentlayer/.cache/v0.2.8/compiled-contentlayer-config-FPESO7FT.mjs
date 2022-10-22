// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    }
  }
}));
var Recipie = defineDocumentType(() => ({
  name: "Recipie",
  filePathPattern: `recipes/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the recipie",
      required: true
    },
    calories: {
      type: "number",
      description: "calories",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (recipie) => `/recipes/${recipie._raw.sourceFileName.replace(/\.[^/.]+$/, "")}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Recipie]
});
export {
  Post,
  Recipie,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FPESO7FT.mjs.map
