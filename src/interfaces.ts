// src/interfaces.ts

export interface User {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  }
  
  export interface FetchResult {
    results: User[];
  }
  