/***********************************
 * logon controller expose UI to enable users sign in and manage authentication flow with Strava
 ************************************/

/***********************************
 * Module dependencies.
 * @private
 ************************************/
var express = require('express');
var Logger = require('../lib/logger');
var base = require('airtable').base('appdK77fBnr8jkoUn');

/***********************************
 * Private functions
 ************************************/
function insertUserInAirtable (user){
  /*base('Table 1').create({displayName:user.displayName,strava:JSON.stringify(user)}, function(err, record) {
    if (err) { console.log(err); return; }
    console.log(record);
  });*/
  base('Table 1').create({user}, function(err, record) {
    if (err) { console.log(err); return; }
    console.log(record);
  });

}
/***********************************
 * rendering functions
 ************************************/

/**
 * welcome screen
 *
 * @param {req} request
 * @param {res} response
 */
function renderWelcome(req,res){
  insertUserInAirtable(req.user);
  res.render('welcome', {
    title: 'Welcome', user: req.user,json:JSON.stringify(req.user),
    layout: 'single-page'
  });
}

/***********************************
 * Module exports.
 ************************************/
module.exports={
    index :function(req, res) {
      renderIndex(req,res);
    },
    welcome :function(req, res) {
      renderWelcome(req,res);
    }
}