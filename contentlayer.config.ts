import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}))

export const Recipie = defineDocumentType(() => ({
  name: 'Recipie',
  filePathPattern: `recipes/**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the recipie',
      required: true,
    },
    calories: {
      type: 'number',
      description: 'calories',
      required: true,
    },
  
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (recipie) => `/${recipie._raw.flattenedPath}`,
    },
  },
}))


export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Recipie],
})