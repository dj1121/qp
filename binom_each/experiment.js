PennController.ResetPrefix(null) // Shorten command names (keep this line here) 
PennController.DebugOff()

Header() // void header
.log("PROLIFIC_ID" , GetURLParameter("PROLIFIC_PID")); // Log this experiment run with prolific

// Get participants to do consent form
newTrial( "consent" ,
    newHtml("consent", "consent.html")
    .print(),
    newButton("consent button", "By clicking this button I indicate my consent")
    .print()
    .wait()
);

// Run the experiment (items below)

// Send the results
SendResults( "send" );

// Show final screen of experiment (thanks/prolific)
newTrial( "final" ,
    newText("<p>All done! Thank you for your participation!</p>")
        .center()
        .print()
    ,
newText("<p><a href='https://app.prolific.co/submissions/complete?cc=9218A125' target='_blank'>Click here to confirm your participation on Prolific.</a></p> <p>This is a necessary step in order for you to receive payment!</p>")        //https://northwestern-linguistics.sona-systems.com/webstudy_credit.aspx?experiment_id=118&credit_token=b55eb18cbda54edb8d1df8aa12c0fa19&survey_code=XXXX
        .center()
        .print()
    ,
    newButton("void")
        .wait()
);

var items = [
	["intro-gram", "Message", {html: "<p>For this experiment, please place your left index finger on the 'e' key and your right index finger on the 'i' key.</p><p> You will read sentences word by word. On each screen you will see two options: one will be the next word in the sentence, and one will not. Select the word that continues the sentence by pressing 'e' (left-hand) for the word on the left or pressing 'i' (right-hand) for the word on the right. An error message will appear if you click a wrong answer and then the next sentence will appear.</p><p>Select the best word as quickly as you can, but without making too many errors.</p>"}],
	["intro-practice", "Message", {html: "The following items are for practice." }], // how does this know to connect to practice items?
	["end-practice", "Message", {html: "End of practice. The experiment will begin next."}],
	["sep", "MazeSeparator", {normalMessage: "Correct! Press any key to continue", errorMessage: "Incorrect! Press any key to continue."}],
	["done", "Message", {html: "All done!"}],
    
    // 1st Box = Condition Name + Number (4 items per condition (2*2 manipulation)) (Each participants gets random assignment of item from each condition)
    // 2nd Box = Type (Maze)
    // 3rd box = Real sentence (Different for all items of the condition)
    // 4th box = Distractor sentence (Same for all of the items in a condition)

[["CR-Pred-a", 1], "Maze", {s:"How soon after quietly making himself a healthy afternoon snack does the hardworking and responsible student think that the professor started working?", a:"x-x-x seat table bouquet myself protect pre courses determine horns ha eyes assimilated yeah republicans republic truth anti vote ourselves awesome nations?"}], 
[["CR-Pred-b", 1], "Maze", {s:"How soon after quietly making himself a healthy afternoon snack do the hardworking and responsible students think that the professor started working?", a:"x-x-x seat table bouquet myself protect pre courses determine horns ha eyes assimilated yeah republicans republic truth anti vote ourselves awesome nations?"}], 
[["CR-Pred-c", 1], "Maze", {s:"How soon after Bill's making himself a healthy afternoon snack does the hardworking and responsible student think that the professor started working?", a:"x-x-x seat table Bouquet myself protect pre courses determine horns ha eyes assimilated yeah republicans republic truth anti vote ourselves awesome nations?"}], 
[["CR-Pred-d", 1], "Maze", {s:"How soon after Bill's making himself a healthy afternoon snack do the hardworking and responsible students think that the professor started working?", a:"x-x-x seat table Bouquet myself protect pre courses determine horns ha eyes assimilated yeah republicans republic truth anti vote ourselves awesome nations?"}], 
[["CR-Pred-a", 2], "Maze", {s:"How soon after calmly knitting himself a warm winter sweater does the polite and quiet roommate believe that the farmer stopped shivering?", a:"x-x-x jack table suites coatings eastern yeah deny videos busiest ha west funded risk aside qualifies capital miss anti resign digital etymology?"}], 
[["CR-Pred-b", 2], "Maze", {s:"How soon after calmly knitting himself a warm winter sweater do the polite and quiet roommates believe that the farmer stopped shivering?", a:"x-x-x jack table suites coatings eastern yeah deny videos busiest ha west funded risk aside qualifies capital miss anti resign digital etymology?"}], 
[["CR-Pred-c", 2], "Maze", {s:"How soon after Jack's knitting himself a warm winter sweater does the polite and quiet roommate believe that the farmer stopped shivering?", a:"x-x-x jack table Suites coatings eastern yeah deny videos busiest ha west funded risk aside qualifies capital miss anti resign digital etymology?"}], 
[["CR-Pred-d", 2], "Maze", {s:"How soon after Jack's knitting himself a warm winter sweater do the polite and quiet roommates believe that the farmer stopped shivering?", a:"x-x-x jack table Suites coatings eastern yeah deny videos busiest ha west funded risk aside qualifies capital miss anti resign digital etymology?"}], 
[["Hyosik-A", 3, "Maze", {s:"The reporter asked who the announcer demonstrated that the recent news had agitated, but the mayor didn't tell who, although the mayor knew something.", a:"x-x-x reviewed miles jack wall regulates commonwealth ha miss except else fat causeway, ago holy forth female anti biggest, addition cup yours ears completed."}], 
[["Hyosik-B", 3], "Maze", {s:"The reporter asked who the announcer's demonstration of the recent news had agitated, but the mayor didn't tell who, although the mayor knew something.", a:"x-x-x reviewed miles jack wall regulates commonwealth ha miss except else fat causeway, ago holy forth female anti biggest, addition cup yours ears completed."}], 
[["Hyosik-C", 3], "Maze", {s:"The reporter asked who the announcer demonstrated that the recent news had agitated, but the mayor didn't tell anything, although the mayor knew something.", a:"x-x-x reviewed miles jack wall regulates commonwealth ha miss except else fat causeway, ago holy forth female anti biggest, addition cup yours ears completed."}], 
[["Hyosik-D", 3], "Maze", {s:"The reporter asked who the announcer's demonstration of the recent news had agitated, but the mayor didn't tell anything, although the mayor knew something.", a:"x-x-x reviewed miles jack wall regulates commonwealth ha miss except else fat causeway, ago holy forth female anti biggest, addition cup yours ears completed."}],
[["practice", 4], "Maze", {s:"The semester will start next week, but the students and teachers are not ready.", a:"x-x-x chivalry anti wages body sold, sin sky entitled sky concrete oil him goods."}],
[["practice", 4], "Maze", {s:"The mother of the prisoner sent him packages that contained cookies and novels.", a:"x-x-x placed dry arm amounted rare nor rhythmic fund authority blossom me defect."}],
[["practice", 4], "Maze", {s:"The reporter had dinner yesterday with the baseball player who Kevin admired.", a:"x-x-x invested joy reduce organisms rise sum attained tended sin Troop flowing."}],
[["practice", 4], "Maze", {s:"The therapist set up a meeting with the upset woman and her husband yesterday.", a:"x-x-x socialism ten sit sum absence wave ran keeps exist dry sum settled remainder."}];