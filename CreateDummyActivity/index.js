import { default as strava, Strava } from 'strava-v3';

module.exports = async function (context, myTimer) {
   
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};