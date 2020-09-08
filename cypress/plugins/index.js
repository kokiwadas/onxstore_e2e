const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

const path = require("path")
const gmail = require("gmail-tester");

module.exports = (on, config) => {
  on("task", {
    "gmail:get-messages": async args => {
      const messages = await gmail.get_messages(
        path.resolve('cypress/plugins/', "credentials.json"),
        path.resolve('cypress/plugins/', "token.json"),
        args.options
      )
      return messages
    }
  })
  on("task", {
    "gmail:check": async args => {
      const { from, to, subject } = args;
      const email = await gmail.check_inbox(
        path.resolve('cypress/plugins/', "credentials.json"),
        path.resolve('cypress/plugins/', "token.json"),
        args.options                                       // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
      );
      return email;
      }
  })
}
// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config)
// }