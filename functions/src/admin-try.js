'use strict'
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
exports.create_admin = functions.storage.object().onFinalize(file => {
  let claims = {}
  claims['admin'] = true
  admin.auth().setCustomUserClaims('mtHn4Rf4oGbF7qYOiooqBBTgCTt1', claims)
})
