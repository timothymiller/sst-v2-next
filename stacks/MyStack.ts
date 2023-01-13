import { StackContext, NextjsSite } from 'sst/constructs'

export function API({ stack, app }: StackContext) {
  // const api = new Api(stack, 'api', {
  //   routes: {
  //     'GET /': 'packages/functions/src/lambda.handler',
  //   },
  // })
  

  const site = new NextjsSite(stack, 'Site', {
    path: 'packages/frontend',
    environment: {
      // Pass the table details to our app
      REGION: app.region,
      // TABLE_NAME: table.tableName,
    },
  })

  stack.addOutputs({
    // ApiEndpoint: api.url,
    NextjsSite: site.url,
  })
}
