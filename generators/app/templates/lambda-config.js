module.exports = {
  profile: '<%= profile %>',
  <% if (iot) {%>
  iot: {
    ruleName: '<%= RuleName %>',
    sql: "<%= sql %>",
    overWrite:true ,
    ruleDisabled:true,
    description:'<%= iotDescription %>'
  },
 <% } %>
  region: 'lambda region',
 <% if (alias) {%>
  alias: '<%= aliasName %>',
  aliasDescription: '<%= aliasDescription %>',
  version: '<%= version %>',
   <%}%>
  env: '<%= env %>',
  publish: true,//will add a new version of function every time published if true. i false it will replace $LATEST
  handler: 'index.handler',
  role: 'arn:aws:iam::594833901287:role/lambda_basic_execution',
  functionName: '<%= name %>',
  timeout: 10,
  memorySize: 128
};


