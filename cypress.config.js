const { defineConfig } = require("cypress");
// const { readPdf } = 'cypress/support/utils.js'
const fs = require('fs');
const path = require("path");
const pdf = require('pdf-parse');
const dotenv = require('dotenv');
dotenv.config();

const removeDir = function (path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)

    if (files.length > 0) {
      files.forEach(function (filename) {
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          fs.rmdirSync(path + "/" + filename, {
            recursive: true,
          });
        } else {
          fs.unlinkSync(path + "/" + filename)
        }
      })
    } else {
      console.log("No files found in the directory.")
    }
  } else {
    console.log("Directory path not found.")
  }
}

module.exports = defineConfig({
  e2e: {

    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // on('task', {
      //   readPdf
      // }),
      on('task', {
        getPdfContent(pdfName) {
          return new Promise((resolve) => {
            let dataBuffer = fs.readFileSync(path.resolve(__dirname, `${pdfName}`))
            pdf(dataBuffer).then(function ({ text }) {
              resolve(text)
            });
          })
        }
      }),
        on('task', {
          readDir(folderName) {
            return new Promise((resolve, reject) => {
              fs.readdir(folderName, (err, files) => {
                if (err) {
                  return reject(err)
                }
                resolve(files)
              })
            })
          },
        });
      on('task', {
        removeFiles(path) {
          removeDir(path);
          return true;
        }
      });
      //   on('after:spec', (spec, results) => {
      //     if (results && results.video) {
      //       const failures = results.tests.some((test) =>
      //         test.attempts.some((attempt) => attempt.state === 'failed')
      //       )
      //       if (!failures) {
      //         fs.unlinkSync(results.video)
      //       }
      //     }
      //   })
    },
    env: {
      "username": process.env.CYPRESS_USERNAME,
      "password": process.env.CYPRESS_PASSWORD,
      "oldApp": false,
      MAILISK_API_KEY: "muLIyGMSLMUmmnxOINlXxkjSVt9jZmUO21_xW5C83gU",
      MAILISK_NAMESPACE: "0xjifpujw30x",
      dotNumberSignup: "656",
      apiUrl: process.env.CYPRESS_URL_API
    },
    baseUrl: process.env.CYPRESS_BASE_URL,
    pageLoadTimeout: 80000,
    chromeWebSecurity: false,
    requestTimeout: 60000,
    responseTimeout: 60000,
    defaultCommandTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/reports/mochareports/assets",
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies: true,
    animationDistanceThreshold: 20,
    experimentalMemoryManagement: true,
    watchForFileChanges: false,
    viewportWidth: 1536,
    viewportHeight: 720,
    retries: {
      "runMode": 0,
      "openMode": 0
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        reportFilename: "[name]-report",
        quite: true,
        overwrite: false,
        html: false,
        json: true
      },
    }
  }
});
