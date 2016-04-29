module.exports = {
  profile: 'lambda profile name',
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
  alias: '<%= name %>',
  aliasDescription: '<%= name %>',
  version: '<%=  %>',
   <%}%>
  env: '<%= name %>',
  publish: true,//will add a new version of function every time published if true. i false it will replace $LATEST
  handler: 'index.handler',
  role: 'arn:aws:iam::594833901287:role/lambda_basic_execution',
  functionName: '<%= name %>',
  timeout: 10,
  memorySize: 128
};


