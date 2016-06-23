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
  region: '<%= region %>',
 <% if (alias) {%>
  alias: '<%= aliasName %>',
  aliasDescription: '<%= aliasDescription %>',
  version: '<%= version %>',
   <%}%>
  env: '<%= env %>',
  publish: true,//will add a new version of function every time published if true. i false it will replace $LATEST
  handler: 'index.handler',
  role: '<%= role %>',
  functionName: '<%= name %>',
  timeout:<%= timeout %>,
  memorySize: <%= memSize %>
};


