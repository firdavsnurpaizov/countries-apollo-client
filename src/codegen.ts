import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://countries.trevorblades.com/graphql',
    generates: {
        './src/types.ts': {
            plugins: ['typescript']
        }
    },
    ignoreNoDocuments: true,
};

export default config;