require('dotenv').config({ path: '.env.local' });

module.exports = {
    overwrite: true,
    schema: {
        [`${process.env.HASURA_URL}/v1/graphql`]: {
            headers: {
                'x-hasura-admin-secret': process.env.HASURA_ADMIN,
            },
        },
    },
    generates: {
        './generated/data-schemas.ts': {
            documents: [
                './graphql/**/*.graphql'
            ],
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-urql'
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                scalars: {
                    uuid: 'string'
                },
            }
        },
        './generated/config-schemas.ts': {
            documents: ['./config/**/*.graphql'],
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request'
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                scalars: {
                    uuid: 'string'
                },
            }
        },

        './generated/graphql.schema.json': {
            plugins: [
                'introspection'
            ]
        },
        './graphql.schema.graphql': {
            plugins: ['schema-ast'],
        },
    }
}
