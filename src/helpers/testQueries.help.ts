const errorSpreads = `
  ... on ServerError {
    message
  }
  ... on Unauthenticated {
    message
  }
  ... on Unauthorized {
    message
  }
  ... on StorageNotFound {
    message
  }
`;

export const listQuery = {
  query: `
    query ListBucketContent($path: String!, $root: String) {
      listBucketContent(listInput: { path: $path, root: $root }) {
        __typename
        ... on ObjectList {
          objects {
            id
            name
            lastModified
            size
            path
            versions {
              id
              name
              lastModified
              size
              path
            }
          }
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <ListInput>{
    path: '',
    root: undefined,
  },
};

export const fetchDlUrlQuery = {
  query: `
    query GetDownloadUrl($fileName: String!, $path: String!, $root: String){
      getDownloadUrl(fileInput: {fileName: $fileName, path: $path, root: $root}) {
        __typename
        ... on SignedUrl {
          url
        }
        ... on FileNotFound {
          message
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <FileInput>{
    fileName: '',
    path: '',
    root: undefined,
  },
};

export const fetchUpUrlQuery = {
  query: `
    query GetUploadUrl($fileName: String!, $fileType: String!, $path: String!, $root: String) {
      getUploadUrl(uploadInput: {fileName: $fileName, fileType: $fileType, path: $path, root: $root}) {
        __typename
        ... on SignedPost {
          url
          fields
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <UploadInput>{
    fileName: '',
    fileType: '',
    path: '',
    root: undefined,
  },
};

export const getTextFileContentQuery = {
  query: `
    query GetTextFileContent($fileName: String!, $path: String!, $root: String, $versionId: String) {
      getTextFileContent(fileInput: {fileName: $fileName, path: $path, root: $root, versionId: $versionId}) {
        __typename
        ... on TextFileContent {
          content
        }
        ... on FileNotFound {
          message
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <FileInput>{
    fileName: '',
    path: '',
    versionId: '',
    root: undefined,
  },
};

export const deleteFileQuery = {
  query: `
    mutation DeleteOneFile($fileName: String!, $path: String!, $root: String) {
      deleteOneFile(fileInput: {fileName: $fileName, path: $path, root: $root}) {
        __typename
        ... on FileName {
          name
        }
        ... on FileNotFound {
          message
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <FileInput>{
    fileName: '',
    path: '',
    root: undefined,
  },
};

export const deleteManyFileQuery = {
  query: `
    mutation DeleteManyFiles($fileNames: [String!]!, $path: String!, $versionIds: [String!], $root: String) {
      deleteManyFiles(filesInput: { fileNames: $fileNames, path: $path, versionIds: $versionIds, root: $root }) {
        __typename
        ... on FileNameList {
          names
        }
        ... on FileNotFound {
          message
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <FilesInput>{
    fileNames: [''],
    path: '',
    versionIds: undefined,
    root: undefined,
  },
};

export const restoreFileVersionQuery = {
  query: `
  mutation RestoreFileVersion($fileName: String!, $path: String!, $versionId: String!, $root: String) {
    restoreFileVersion(fileInput: { fileName: $fileName, path: $path, versionId: $versionId, root: $root }) {
      __typename
      ... on VersionId {
        id
      }
      ... on FileNotFound {
          message
        }
      ${errorSpreads}
    }
  }
  `,
  variables: <FileInput>{
    fileName: '',
    path: '',
    versionId: '',
    root: undefined,
  },
};

export const deleteDirectoryQuery = {
  query: `
    mutation deleteDir($path: String!, $root: String, $bucketName: String){
      deleteDirectory(directoryInput: { path: $path, root: $root, bucketName: $bucketName }) {
        __typename
        ... on Directory {
          name
          path
          bucketName
        }
        ... on FileNotFound {
          message
        }
        ${errorSpreads}
      }
    }
  `,
  variables: <DirectoryInput>{
    path: '',
    root: undefined,
    bucketName: undefined,
  },
};

interface ListInput {
  path: string;
  root?: string;
}
interface FileInput {
  fileName: string;
  path: string;
  root?: string;
  versionId?: string;
}

interface FilesInput {
  fileNames: string[];
  path: string;
  versionIds?: string[];
  root?: string;
}

interface UploadInput {
  fileName: string;
  fileType: string;
  path: string;
  root?: string;
}

interface DirectoryInput {
  path: string;
  root?: string;
  bucketName?: string;
}
