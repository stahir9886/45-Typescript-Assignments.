"use strict";
let Guest_List = ['Zohaib Khan', 'Mishaal Sharif', 'Ali Zafar'];
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Zohaib Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table so we are inviting 3 more guests.\n');
//I have added 3 guests here.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
//I have printed 6 guests in an array here.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
// Sorry message to guest for not invited.
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited. ');
// I have removed guests here by condition.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
// The remaining 2 invited guests.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
// I have removed all the guests from the Array.
Guest_List.splice(0, 2);
console.log(Guest_List);
