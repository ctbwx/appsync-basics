const dataQueries = {
  listAppSyncData(first) {
    return `query listAppSyncData {
      listAppSyncData(first: ${first}) {
        items {
          dataId
          description
          username
        }
        nextToken
      }
    }`
  }
};

export default dataQueries;