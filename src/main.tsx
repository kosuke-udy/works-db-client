import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  gql, 
} from '@apollo/client';

import App from './App';
import './index.css';

const client = new ApolloClient({
  // GraphQLのサーバーを指定
  uri: 'http://localhost:4000',
  // ApolloClientがクエリの結果をキャッシュするのに使う場所を指定
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
