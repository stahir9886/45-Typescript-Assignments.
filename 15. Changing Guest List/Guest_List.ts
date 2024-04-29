
let Guest_List :string[] = ['Zohaib Khan', 'Mishaal Sharif', 'Ali Zafar'] ;

for (let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_Guest :string = 'Zohaib Khan' ;
let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for (let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)