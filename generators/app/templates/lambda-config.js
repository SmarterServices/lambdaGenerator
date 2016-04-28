module.exports = {
  profile: 'lambda profile name',
  iot: {
    ruleName: 'iot rule name',
    sql: "SELECT * FROM '#' WHERE type='TYPE_TO_CATCH'",
    overWrite:true ,
    ruleDisabled:true,
    description:'rule description'
  },
  region: 'lambda region',
  version: 'function to use with alias (current|$LATEST|[0-9])',
  alias: 'alias name',
  aliasDescription: 'alias description',
  env: 'function env ex. prod or dev',
  publish: true,//will add a new version of function every time published if true. i false it will replace $LATEST
  handler: 'index.handler',
  role: 'arn:aws:iam::594833901287:role/lambda_basic_execution',
  functionName: '<%= name %>',
  timeout: 10,
  memorySize: 128/*,
   eventSource: {
   EventSourceArn: <event source such as kinesis ARN>,
   BatchSize: 200,
   StartingPosition: "TRIM_HORIZON"
   }*/
};


