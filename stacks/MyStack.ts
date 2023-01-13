import { StackContext, Api, NextjsSite } from 'sst/constructs'

export function API({ stack, app }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  })
  stack.addOutputs({
    ApiEndpoint: api.url,
  })

  const site = new NextjsSite(stack, 'Site', {
    path: 'frontend',
    environment: {
      // Pass the table details to our app
      REGION: app.region,
      // TABLE_NAME: table.tableName,
    },
  })
}
