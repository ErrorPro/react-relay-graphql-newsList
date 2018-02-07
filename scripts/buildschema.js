import { introspectionQuery, graphql } from 'graphql';
import path from 'path';
import fs from 'fs';
import Schema from '../src/webserver/schema';

graphql(Schema, introspectionQuery).then(res => {
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'schema.json'),
    JSON.stringify(res, null, 2)
  );
})