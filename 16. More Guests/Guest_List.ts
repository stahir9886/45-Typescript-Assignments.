
let Guest_List :string[] = ['Zohaib Khan', 'Mishaal Sharif', 'Ali Zafar'] ;

// for (let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Zohaib Khan' ;
let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for (let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`) ;

console.log('Good News! We find Big Table so we are inviting 3 more guests.\n')

Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryam Nawaz') ;
Guest_List.push('Bilawal Bhutto Zardari') ;

for (let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}