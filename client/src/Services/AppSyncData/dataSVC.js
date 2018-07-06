import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../appsync';
import dataQuery from './dataQuery';

Amplify.configure(awsconfig);

export default class dataSVC {
  static listAppSyncData(first) {
    const promise = new Promise((resolve, reject) => {
      API.graphql(graphqlOperation(dataQuery.listAppSyncData(first)))
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          console.error(err);
        })
    });
    return promise;
  }
}